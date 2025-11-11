# my-commitizen

pnpm 프로젝트에 Commitizen + 한국어 프롬프트 자동 설정 도구

## 사용법

```bash
# 프로젝트 루트에서 실행
pnpm dlx guen9310/my-commitizen-setter-pnpm#main

# 설정 완료 후 커밋
pnpm commit
```

## 설정 내용

실행 시 자동으로 처리되는 작업:

1. `commitizen`, `cz-customizable` 설치
2. `.cz-config.cjs` 파일 생성 (한국어 프롬프트)
3. package.json에 commitizen 설정 추가
4. `commit` 스크립트 추가

## 커밋 타입

| 타입       | 이모지 | 설명        |
| ---------- | ------ | ----------- |
| `feat`     | ✨     | 새로운 기능 |
| `fix`      | 🐛     | 버그 수정   |
| `docs`     | 📚     | 문서        |
| `style`    | 💎     | 코드 포맷팅 |
| `refactor` | 📦     | 리팩토링    |
| `test`     | 🚨     | 테스트      |
| `chore`    | ♻️     | 빌드/패키지 |
| `design`   | 🎨     | UI 디자인   |
| `comment`  | 💡     | 주석        |
| `rename`   | 🚚     | 파일/폴더명 |
| `remove`   | 🗑️     | 파일 삭제   |
| `deploy`   | 🚀     | 배포        |

## 스코프

`components`, `hooks`, `lib`, `atoms`, `types`, `app`, `config` (커스텀 입력 가능)

## 커스터마이징

프로젝트의 `.cz-config.js` 파일 수정

## 로컬 테스트

```bash
npm link
cd /path/to/test-project
pnpm dlx guen9310/my-commitizen-setter-pnpm
```
