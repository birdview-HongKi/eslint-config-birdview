module.exports = {
  extends: [
    "plugin:react/recommended",
    "airbnb",
    "airbnb/hooks",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
  ],
  globals: {
    MyGlobal: true,
  },
  parser: "typescript-eslint/parser",
  // parser: "babel-eslint",
  parserOptions: {
    ecmaVersion: 6, //사용할 ECMAScript 버전을 설정
    sourceType: "module", // parser의 export 형태를 설정
    ecmaFeatures: {
      // ECMAScript의 언어 확장 기능을 설정
      jsx: true, // ECMScript 규격의 JSX 사용 여부
    },
  },
  env: {
    browser: true,
    es6: true,
    node: true,
    jest: true,
  },
  rules: {
    "import/extensions": ["off"],
    "import/no-unresolved": ["off"],
    "@typescript-eslint/explicit-module-boundary-types": ["warn"],
    // 리턴 타입 지정
    "react/js-no-target-blank": ["off"],
    // a태그 target= "_blank" 사용 시 보안적인 이슈 방지
    // 참고 : https://beomsoo.me/issue/Issue-4/
    "no-use-before-define": ["off"],
    // 변수와 함수를 사용하기 전에 항상 선언
    "import/prefer-default-export": ["warn"],
    // 모듈 중복으로 가져오기
    "no-unused-expressions": ["off"],
    "no-param-reassign": ["warn"],
    // 함수 매개 변수 재 할당 금지
    "react/jsx-filename-extension": [
      "warn",
      { extensions: ["js", "jsx", "tsx"] },
    ],
    // 확장자로 js와 jsx 둘다 허용하도록 수정
    "no-unused-vars": ["off"],
    // 사용하지 않는 변수가 있을때 빌드에러가 나던 규칙 해제
    "no-console": ["warn", { allow: ["error", "warn"] }],
    // console.error, console.warn은 허용
    "react-hooks/exhaustive-deps": ["warn"],
    // hooks의 의존성배열이 충분하지 않을때 강제로 의존성을 추가하는 규칙을 완화
    "react/jsx-props-no-spreading": ["off"],
    // props spreading을 허용하지 않는 규칙 해제
    "react/prop-types": ["off"],
    // props의 타입체크를 처리하려면 prop-types보단 차라리 typescript를 사용하는게 낫다.
    "react/display-name": ["off"],
    // React 컴포넌트 정의에서 displayName 누락 방지
    "no-alert": ["off"],
    // alert 사용 금지
    "react-hooks/rules-of-hooks": ["error"],
    // hook lint rules 적용
    "react/react-in-jsx-scope": ["warn"],
    //react를 최상단에 import 허용
  },
  settings: {
    "import/parsers": {
      "@typescript-eslint/parser": [".ts", ".tsx", ".js"],
    },
    "import/resolver": {
      node: { extensions: [".js", ".jsx", ".ts", ".tsx"] },
    },
  },
  plugins: ["react", "@typescript-eslint/eslint-plugin", "import", "jest"],
};
