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
2. 사이드바에 **algorithm**과 **Baekjoon** 두 개의 루트가 보입니다.
3. **Baekjoon** 루트 아래의 `.js` 파일을 열어 편집하면, 그 파일에는 자동완성/코드 제안이 비활성화된 설정이 적용됩니다.
4. `scripts/`, `Programmers/` 등 다른 파일은 **algorithm** 루트에서 열면 기존처럼 자동완성이 동작합니다.
