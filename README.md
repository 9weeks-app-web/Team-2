# 프로젝트 이름
스펙폴리오.

## 디렉토리 구조

root/
├─ src/
│ ├─ app/
│ │ ├─ [특정 라우트]/
│ │ │ ├─ components/         # 해당 라우트 전용 로컬 컴포넌트
│ │ │ ├─ state/              # 로컬 상태 관리
│ │ │ └─ [기본 파일]           # 기본 page.tsx , layout.tsx
│ │ └─ [최상단 기본 파일]        # 기본 page.tsx , layout.tsx
│ │
│ ├─ components/             # 전역적으로 사용되는 공통 컴포넌트
│ ├─ state/                  # 전역 상태 관리
│ ├─ styles/                 # 전역 스타일
│ └─ utils/                  # 전역 유틸리티 함수
│ └─ git_hooks/              # lefthook 커밋 컨벤션 설정 파일
│ 
├─ public/                   # 정적 파일 (이미지, 아이콘 등)
└─ [기타 설정 파일 (package.json, tsconfig.json, next.config.js 등)]

## 기술 스택

- **Next.js 14**: 최신 웹 애플리케이션 프레임워크, 서버사이드 렌더링 및 정적 생성 지원.
- **TypeScript (TS)**: JavaScript의 타입 안전성과 확장성을 제공하는 언어.
- **Recoil**: React를 위한 상태 관리 라이브러리, 효율적인 상태 공유 및 관리를 지원.
- **Styled-Components**: CSS-in-JS 라이브러리, 컴포넌트 기반의 스타일링을 제공.

## 커밋컨벤션

root/git_hooks/commit_convention.js -> 이름 표시된부분 본인 이름으로 바꾸고 커밋

https://velog.io/@2juzzang/Github%EB%A5%BC-%EC%9D%B4%EC%9A%A9%ED%95%9C-%ED%98%91%EC%97%85%EC%97%90-%EA%B4%80%ED%95%98%EC%97%AC-part-2.-Commit-Convention-%EC%A0%81%EC%9A%A9%ED%95%B4%EB%B3%B4%EA%B8%B0-with.-lefthook

## 팀원
- 김재현
- 이윤희
- 김재하
- 이하연
