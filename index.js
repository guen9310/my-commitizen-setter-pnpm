#!/usr/bin/env node

const { execSync } = require('child_process');
const path = require('path');
const fs = require('fs');

// 색상 헬퍼 (이전과 동일)
const colors = {
  reset: "\x1b[0m",
  green: "\x1b[32m",
  cyan: "\x1b[36m",
  red: "\x1b[31m",
};
const log = (message, color = colors.reset) => console.log(color + message + colors.reset);

// 명령어 실행 함수 (이전과 동일)
const runCommand = (command) => {
  try {
    execSync(command, { stdio: 'inherit' });
  } catch (e) {
    log(`\n❌ 오류가 발생했습니다: '${command}' 실행 실패`, colors.red);
    return false;
  }
  return true;
};

// --- 메인 로직 시작 ---

log('🚀 커스텀 Commitizen 설정을 시작합니다 (pnpm 환경)...', colors.cyan);

// 1. package.json 파일 존재 여부 확인 (이전과 동일)
if (!fs.existsSync(path.resolve(process.cwd(), 'package.json'))) {
  log('\n❌ 현재 디렉토리에 package.json 파일이 없습니다. 프로젝트 루트에서 실행해주세요.', colors.red);
  process.exit(1);
}

// 2. 의존성 설치 (cz-customizable 추가)
log('\n[1/4] Commitizen 및 관련 패키지를 설치합니다...', colors.cyan);
const installDeps = runCommand('pnpm add -D commitizen cz-customizable');
if (!installDeps) process.exit(1);

// 3. 커스텀 설정 파일(.cz-config.js) 복사
log('\n[2/4] 커스텀 설정 파일(.cz-config.js)을 생성합니다...', colors.cyan);
const configTemplatePath = path.resolve(__dirname, '.cz-config.js'); 
const targetProjectPath = path.resolve(process.cwd(), '.cz-config.js');
try {
  fs.copyFileSync(configTemplatePath, targetProjectPath);
  log('.cz-config.js 파일이 성공적으로 생성되었습니다.', colors.green);
} catch (e) {
  log(`\n❌ .cz-config.js 파일 복사 중 오류 발생: ${e}`, colors.red);
  process.exit(1);
}

// 4. package.json에 commitizen 설정 추가
log('\n[3/4] package.json에 commitizen이 커스텀 설정을 사용하도록 구성합니다...', colors.cyan);
const setCommitizenPath = runCommand('pnpm pkg set config.commitizen.path=./node_modules/cz-customizable');
if (!setCommitizenPath) process.exit(1);

// 5. 'commit' 스크립트 추가
log("\n[4/4] package.json에 'commit' 스크립트를 추가합니다...", colors.cyan);
const addScript = runCommand('pnpm pkg set scripts.commit=cz');
if (!addScript) process.exit(1);


log('\n✨ 모든 설정이 완료되었습니다!', colors.green);
log("이제부터 'pnpm commit' 명령어를 사용하여 커스텀 커밋을 작성할 수 있습니다.", colors.green);