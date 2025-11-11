module.exports = {
  // 커밋 유형 정의
  types: [
    { value: 'feat', name: '✨ feat:     새로운 기능 추가' },
    { value: 'fix', name: '🐛 fix:      버그 수정' },
    { value: 'docs', name: '📚 docs:     문서 작성 및 수정' },
    { value: 'style', name: '💎 style:    코드 포맷팅, UI/CSS 변경' },
    { value: 'refactor', name: '♻️  refactor: 코드 리팩토링' },
    { value: 'test', name: '🚨 test:     테스트 코드' },
    { value: 'chore', name: '🔧 chore:    빌드, 패키지, 설정 파일 수정' },
  ],

  // 스코프(Scope) 정의
  scopes: [
    { name: 'project' },      // 프로젝트 전체 관련
    { name: 'components' },    // 컴포넌트 관련
    { name: 'deps' },          // 의존성 패키지 관련
    { name: 'config' },        // 설정 파일 관련
    { name: 'types' },         // 타입 정의 관련
    { name: 'utils' },         // 유틸리티 함수 관련
    { name: 'parser' },        // HTML/JSON 파서 관련
    { name: 'tree' },          // 트리 구조 관련
    { name: 'ui' },            // UI/스타일 관련
  ],

  // 프롬프트에 표시될 메시지
  messages: {
    type: '어떤 유형의 작업을 커밋하시나요?',
    scope: '\n이번 변경의 스코프(scope)는 무엇인가요? (optional)',
    customScope: '스코프를 직접 입력해주세요:',
    subject: '변경 사항에 대한 짧고 간결한 제목을 작성해주세요:\n',
    body: '변경 사항에 대한 자세한 설명을 작성해주세요 (optional). 줄바꿈을 하려면 "|"를 사용하세요:\n',
    breaking: '브레이킹 체인지(BREAKING CHANGE)가 있나요? (optional):\n',
    footer: '이번 커밋과 관련된 이슈 번호를 입력해주세요 (e.g. #31, #34) (optional):\n',
    confirmCommit: '이대로 커밋하시겠습니까?',
  },

  allowCustomScopes: true,
  allowBreakingChanges: ['feat', 'fix'],
  skipQuestions: ['body'],
  subjectLimit: 100,
};