# @birdviewdev/eslint-config-birdview
ESLint 대한 설정입니다.
수정 또는 개선이 필요하면 편하게 수정 부탁드립니다.

## 작업이력
- [규칙](https://github.com/birdviewdev/eslint-config-birdview/blob/main/index.js)은 여기를 통해 확인할 수 있습니다

## 프로젝트 내 설치
1. 프로젝트 root위치에서 .npmrc 파일을 생성하고 아래 코드를 작성합니다.
```
@birdviewdev:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken={개인액세스토큰}
```
2. 프로젝트별 내 패키지 설치

```
npx install-peerdeps --dev @birdviewdev/eslint-config-birdview
```
3. 프로젝트 디렉터리의 루트에 .eslintrc 파일을 생성하고 아래와 같이 설정을 추가합니다. (예시 코드는 .eslintrc.js파일을 생성하여 작성했습니다)
```
module.exports = {
  extends: ["@birdviewdev/eslint-config-birdview"],
  parser: "@typescript-eslint/parser",
};
```
4. package.json에 eslint를 위한 스크립트 추가합니다
```
"scripts": {
  "lint": "eslint .",
  "lint:fix": "eslint . --fix"
}
```

## With Create React App
1. 프로젝트 root위치에서 .npmrc 파일을 생성하고 아래 코드를 작성합니다.
```
@birdviewdev:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken={개인액세스토큰}
```
2. 패키지를 설치합니다
```
install-peerdeps --dev @birdviewdev/eslint-config-birdview
```
3. package.json 파일에서 "eslintConfig" 내 "extends" 속성의 "react-app"를 지웁니다.
```
"eslintConfig": {
    "extends": [
      "react-app",
      ...
    ]
  },
```
4. 프로젝트 디렉터리의 루트에 .eslintrc 파일을 생성하고 아래와 같이 설정을 추가합니다. (예시 코드는 .eslintrc.js파일을 생성하여 작성했습니다)
```
module.exports = {
  extends: ["@birdviewdev/eslint-config-birdview"],
  parser: "@typescript-eslint/parser",
};
```
4. package.json에 eslint를 위한 스크립트 추가합니다.
```
"scripts": {
  "lint": "eslint .",
  "lint:fix": "eslint . --fix"
}
```
5. 스크립트를 통해 eslint 실행합니다.
```
yarn lint
```
