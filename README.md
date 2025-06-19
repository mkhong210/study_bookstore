# Study Bookstore

React + TypeScript + Vite 기반으로 구현한 온라인 서점 웹앱입니다.  
컴포넌트 기반 UI 설계와 라우팅, 상태 관리, 부트스트랩 UI 컴포넌트 사용 경험을 익히기 위한 스터디/실습 프로젝트입니다.

<br />

## 사용 기술 스택

- **Frontend**: React, TypeScript, Vite
- **Styling**: Bootstrap, React-Bootstrap
- **Routing**: React Router DOM v7
- **HTTP 통신**: Axios
- **개발환경**: ESLint, TypeScript, Vite

<br />

## 주요 기능

- 홈, 로그인, 소개, 연락처 페이지 등 **여러 라우트로 구성된 다중 페이지 구성**
- `BookItem`, `Carousel` 등 **재사용 가능한 컴포넌트 구조 설계**
- `CartPage.tsx`를 통한 **장바구니 페이지 구현**
- 도서 상세 페이지: `DetailPage.tsx`, `DetailPage2.tsx`, `DetailPage3.tsx`로 다양한 버전의 상세 구성 실험
- Bootstrap 기반의 UI 구성 실습

<br />

## 폴더 구조 요약

```
src/
├── assets/             # 이미지 및 정적 파일
├── components/         # 공통 컴포넌트 (BookItem, Carousel 등)
├── data/               # 데이터 관련 파일
├── layout/             # 레이아웃 구성 요소 (Content, Footer 등)
├── pages/              # 페이지별 라우트 (Home, Cart, Login, Detail 등)
```

<br />

## 개인 회고 

> React 프로젝트 구조를 처음부터 잡아보며 라우팅과 컴포넌트 분리에 대한 감을 익힐 수 있었습니다. 
> Bootstrap을 활용해 빠르게 레이아웃을 구성하는 경험을 했습니다.
> 앞으로 상태 관리나 서버 연동까지 확장해보고 싶습니다.
