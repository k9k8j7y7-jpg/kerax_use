# KERA-X Manual (kerax_use)

KERA-X 클리닉 매뉴얼 및 가이드 시스템입니다. React와 Vite를 기반으로 구축되었으며, 다국어 지원과 인터랙티브한 UI를 제공합니다.

## 🚀 시작하기

### 필수 조건
*   **Node.js**: v18 이상 권장
*   **npm** 또는 **yarn**

### 설치
```bash
npm install
```

### 로컬 개발 서버 실행
```bash
npm run dev
```
실행 후 `http://localhost:5173`에서 결과를 확인할 수 있습니다.

### 빌드
```bash
npm run build
```
`dist` 폴더에 배포용 파일이 생성됩니다.

---

## 🛠 기술 스택
*   **Core**: React 19, TypeScript
*   **Build Tool**: Vite
*   **Icons**: Lucide React
*   **Styling**: Vanilla CSS (Custom Properties 활용)

---

## 📂 프로젝트 구조
```text
src/
├── assets/         # 정적 자산 (이미지, 로고 등)
├── App.tsx         # 메인 애플리케이션 컴포넌트 및 로직
├── index.css       # 전역 스타일 및 디자인 시스템 (CSS 변수)
├── main.tsx        # 엔트리 포인트
└── translations.ts # 다국어(한/영) 텍스트 데이터
```

---

## 🌐 다국어 지원 (i18n)
`src/translations.ts` 파일에서 모든 텍스트를 관리합니다.
새로운 언어를 추가하거나 텍스트를 수정하려면 해당 파일을 편집하세요.

---

## 📤 배포 가이드

### FTP 업로드 (`upload.ps1`)
배포를 자동화하기 위한 PowerShell 스크립트가 포함되어 있습니다.

1.  `npm run build`를 실행하여 최신 빌드 파일을 생성합니다.
2.  `upload.ps1`을 실행합니다:
    ```powershell
    .\upload.ps1 -Password "실제비밀번호"
    ```
    *주의: 보안을 위해 스크립트 내에 비밀번호를 직접 작성하지 마십시오.*

---

## 📄 라이선스
이 프로젝트는 개인 프로젝트로 라이선스 정의가 필요합니다.
