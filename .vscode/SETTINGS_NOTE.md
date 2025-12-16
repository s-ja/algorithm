## VS Code 워크스페이스 설정 변경 기록

**목적:** 이 문서는 알고리즘 풀이용 저장소에서 적용한 VS Code 워크스페이스 설정의 초기 의도와, 최근 자동완성 복구를 위해 조정한 내용을 기록합니다.

**파일 위치:** [.vscode/settings.json](.vscode/settings.json)

---

### 1) 최초 설정(배경)

- 대상 저장소: 알고리즘 문제 풀이용 개인 레포지토리
- 이유: 풀이 학습 과정에서 에디터의 자동완성(스니펫, 인라인 제안, AI 제안 등)이 정답 작성에 영향을 주어 학습을 방해한다고 판단되어, 워크스페이스 범위에서 자동완성 관련 기능을 비활성화함.

주요 의도 설정 예:

- `editor.quickSuggestions`을 꺼서 실시간 제안을 차단
- `editor.inlineSuggest.enabled`을 꺼서 인라인 제안 차단
- Cursor AI 관련(`cursor.*`) 자동완성 기능 비활성화

### 2) 문제 발생 및 진단

- 문제: 최근 에디터에서 클립(예: `clg`) 같은 자동완성/스니펫 후보가 전혀 뜨지 않음.
- 진단 결과: 일부 파일에 남아있던 문법 오류(예: 잘못된 토큰)가 파싱을 방해했으나, 워크스페이스 설정에서 자동완성을 전반적으로 차단해 둔 것도 복구를 막는 원인이었음.

### 3) 이번 변경(복구) 요약

- 변경 일시: 2025-12-16
- 변경자: 사용자 요청에 따라 설정 복구
- 변경 내용(주요):
  - `editor.inlineSuggest.enabled`: `false` → `true`
  - `editor.suggest.*` 관련 미리보기/상태바 옵션 활성화
  - `editor.suggestOnTriggerCharacters`: `false` → `true`
  - `editor.acceptSuggestionOnEnter`: `off` → `on`
  - `editor.quickSuggestions.other`: `false` → `true` (comments/strings은 계속 비활성)
  - `editor.tabCompletion`: `off` → `on`

이 변경은 워크스페이스 범위에서 스니펫, 코드 제안, 인라인 완성 등이 정상 동작하도록 복구합니다.

### 4) 영향 및 권장 사용 방식

- 영향: 자동완성(스니펫 포함)이 다시 활성화되어 코드 작성 보조가 정상화됩니다. 다만, 문제 풀이 학습 목적상 자동완성으로 인해 '풀이 사고 과정'이 흐트러지는 경우가 있으면 아래 권장 사용 방식 참고.

권장

- 평상시(학습 집중 세션): 자동완성을 부분적으로 끄려면 `editor.quickSuggestions.other: false` 또는 `editor.inlineSuggest.enabled: false`를 단기적으로 사용.
- 평가/정답 제출 직전: 자동완성을 켜두어 빠른 코드 작성과 형식 정리를 활용.
- 필요 시 워크스페이스 설정 대신 개인 사용자 설정(User Settings)에서 전환하여 저장소별 동작을 분리.

### 5) 되돌리기 방법

- 원복을 원하면 [.vscode/settings.json](.vscode/settings.json) 파일의 관련 키를 이전값으로 바꾸면 됩니다.
- 예: `editor.inlineSuggest.enabled: false`, `editor.quickSuggestions.other: false`, `editor.tabCompletion: off`

### 6) 다음 검토 항목

1. 워크스페이스 내 다른 파일(.vscode 내 추가 파일 또는 확장 설정)에서 자동완성에 영향을 주는 추가 설정이 있는지 검토
2. 개인별(사용자 설정)과 워크스페이스 설정 간 우선순위 정책 문서화
3. 필요 시 `settings.json`에 주석으로 사용 가이드(예: 단축키, 전환 권장 상황) 추가

---

문서 끝. 추가로 이 기록을 리포지토리 루트의 `README.md`나 `.vscode/CHANGELOG.md`로 복사해 두길 원하시면 알려주세요.
