#!/usr/bin/env node

/**
 * 프로그래머스 문제 폴더 및 파일 자동 생성 스크립트
 * 
 * 사용 방법:
 *   node scripts/create-prg-problem.js 120583
 *   또는
 *   npm run create:prg 120583
 */

const fs = require("fs");
const path = require("path");

// 명령줄 인자에서 문제 번호 가져오기
const problemNumber = process.argv[2];

if (!problemNumber) {
  console.error("❌ 문제 번호를 입력해주세요.");
  console.log("사용 방법: node scripts/create-prg-problem.js <문제번호>");
  console.log("예시: node scripts/create-prg-problem.js 120583");
  process.exit(1);
}

// 문제 번호 유효성 검사 (숫자만 허용)
if (!/^\d+$/.test(problemNumber)) {
  console.error("❌ 문제 번호는 숫자만 입력해주세요.");
  process.exit(1);
}

const problemId = `PRG${problemNumber}`;
const problemDir = path.join(__dirname, "..", "Programmers", problemId);

// 폴더가 이미 존재하는지 확인
if (fs.existsSync(problemDir)) {
  console.error(`❌ ${problemId} 폴더가 이미 존재합니다.`);
  process.exit(1);
}

try {
  // 폴더 생성
  fs.mkdirSync(problemDir, { recursive: true });
  console.log(`✅ ${problemId} 폴더 생성 완료`);

  // 프로그래머스 문제 템플릿 생성
  const templateJs = `/**
 * 프로그래머스 문제 풀이
 * 
 * 문제 번호: ${problemId}
 * 문제 링크: https://school.programmers.co.kr/learn/courses/30/lessons/${problemNumber}
 */

// ============================================
// 여기서부터 직접 풀이를 작성하세요
// ============================================

function solution() {
  // 풀이 로직 작성
  // ...
  
  return answer;
}

module.exports = solution;
`;

  // JS 파일 생성
  const jsFileName = `${problemId}.js`;
  const jsFilePath = path.join(problemDir, jsFileName);
  fs.writeFileSync(jsFilePath, templateJs, "utf8");
  console.log(`✅ ${jsFileName} 파일 생성 완료`);

  console.log("\n🎉 문제 폴더 및 파일 생성이 완료되었습니다!");
  console.log(`📁 위치: ${problemDir}`);
  console.log(`🔗 문제 링크: https://school.programmers.co.kr/learn/courses/30/lessons/${problemNumber}`);
} catch (error) {
  console.error("❌ 오류 발생:", error.message);
  process.exit(1);
}

