# 알고리즘 문제 풀이

- BJ : [Baekjoon](https://www.acmicpc.net/user/igniter05)
- JO: [jungol](https://jungol.co.kr/account/69640)
- PRG: [Programmers](https://programmers.co.kr/)
- else : else

## 🚀 빠른 시작

### 새 백준 문제 폴더 생성

```bash
# npm 스크립트 사용 (권장)
npm run create:bj 10866

# 또는 직접 실행
node scripts/create-bj-problem.js 10866
```

이 명령어는 다음을 자동으로 생성합니다:

- `Baekjoon/BJ10866/` 폴더
- `BJ10866.js` 파일 (템플릿 기반)
- `input.txt` 파일

### 새 프로그래머스 문제 폴더 생성

```bash
# npm 스크립트 사용 (권장)
npm run create:prg 120583

# 또는 직접 실행
node scripts/create-prg-problem.js 120583
```

이 명령어는 다음을 자동으로 생성합니다:

- `Programmers/PRG120583/` 폴더
- `PRG120583.js` 파일 (템플릿 기반)

## 📝 사용 팁

1. 문제 번호만 입력하면 자동으로 폴더와 파일이 생성됩니다
2. 템플릿 파일은 `Baekjoon/BJ_template/` 폴더에 있습니다
3. 생성된 파일의 문제 번호와 링크는 자동으로 치환됩니다

## 🔧 Baekjoon 폴더에서만 자동완성/코드 제안 끄기

Baekjoon 문제만 풀 때 자동완성과 AI 코드 제안을 끄고 싶다면:

1. **워크스페이스로 열기**: Cursor에서 `algorithm.code-workspace` 파일을 엽니다.  
   (파일 → 폴더에서 워크스페이스 열기 → `algorithm.code-workspace` 선택)
2. 워크스페이스에서 **Baekjoon**이 **첫 번째** 루트로 설정되어 있어, `Baekjoon/` 아래 파일을 열면 `Baekjoon/.vscode/settings.json`(자동완성 비활성화)이 적용됩니다.
3. **Baekjoon** 루트 아래에서만 파일을 열어 편집하세요.  
   사이드바에서 **Baekjoon** → BJ1991 → `BJ1991.js` 처럼 **Baekjoon** 루트를 통해 열면 됩니다.
4. `scripts/`, `Programmers/` 등은 **algorithm** 루트에서 열면 기존처럼 자동완성이 동작합니다.

**여전히 제안이 뜨는 경우 (수동 끄기):**

- Cursor 설정에서 **Cursor Tab** 끄기: `Ctrl+Shift+J`(Mac: `Cmd+Shift+J`) → **Features** → **Cursor Tab** → **Disabled**
- 또는 화면 우측 하단 **Cursor Tab** 버튼을 눌러 끄기
- 워크스페이스를 연 뒤 Cursor를 한 번 재시작해 보세요.
