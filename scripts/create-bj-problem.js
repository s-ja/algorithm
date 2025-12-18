#!/usr/bin/env node

/**
 * 백준 문제 폴더 및 파일 자동 생성 스크립트
 * 
 * 사용 방법:
 *   node scripts/create-bj-problem.js 10866
 *   또는
 *   npm run create:bj 10866
 */

const fs = require("fs");
const path = require("path");

// 명령줄 인자에서 문제 번호 가져오기
const problemNumber = process.argv[2];

if (!problemNumber) {
  console.error("❌ 문제 번호를 입력해주세요.");
  console.log("사용 방법: node scripts/create-bj-problem.js <문제번호>");
  console.log("예시: node scripts/create-bj-problem.js 10866");
  process.exit(1);
}

// 문제 번호 유효성 검사 (숫자만 허용)
if (!/^\d+$/.test(problemNumber)) {
  console.error("❌ 문제 번호는 숫자만 입력해주세요.");
  process.exit(1);
}

const problemId = `BJ${problemNumber}`;
const problemDir = path.join(__dirname, "..", "Baekjoon", problemId);
const templateDir = path.join(__dirname, "..", "Baekjoon", "BJ_template");

// 폴더가 이미 존재하는지 확인
if (fs.existsSync(problemDir)) {
  console.error(`❌ ${problemId} 폴더가 이미 존재합니다.`);
  process.exit(1);
}

// 템플릿 파일 읽기
const templateJsPath = path.join(templateDir, "BJ_template.js");
const templateInputPath = path.join(templateDir, "input.txt");

if (!fs.existsSync(templateJsPath) || !fs.existsSync(templateInputPath)) {
  console.error("❌ 템플릿 파일을 찾을 수 없습니다.");
  process.exit(1);
}

try {
  // 폴더 생성
  fs.mkdirSync(problemDir, { recursive: true });
  console.log(`✅ ${problemId} 폴더 생성 완료`);

  // 템플릿 JS 파일 읽기 및 문제 번호로 치환
  let templateJs = fs.readFileSync(templateJsPath, "utf8");
  templateJs = templateJs.replace(/BJXXXX/g, problemId);
  templateJs = templateJs.replace(/XXXX/g, problemNumber);

  // JS 파일 생성
  const jsFileName = `${problemId}.js`;
  const jsFilePath = path.join(problemDir, jsFileName);
  fs.writeFileSync(jsFilePath, templateJs, "utf8");
  console.log(`✅ ${jsFileName} 파일 생성 완료`);

  // input.txt 파일 복사
  const templateInput = fs.readFileSync(templateInputPath, "utf8");
  const inputFilePath = path.join(problemDir, "input.txt");
  fs.writeFileSync(inputFilePath, templateInput, "utf8");
  console.log(`✅ input.txt 파일 생성 완료`);

  console.log("\n🎉 문제 폴더 및 파일 생성이 완료되었습니다!");
  console.log(`📁 위치: ${problemDir}`);
  console.log(`🔗 문제 링크: https://www.acmicpc.net/problem/${problemNumber}`);
} catch (error) {
  console.error("❌ 오류 발생:", error.message);
  process.exit(1);
}

