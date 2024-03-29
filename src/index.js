import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App'; //.js는 생략되어있음 //사용자 정의 태그(js 모듈인데 태그처럼 사용) 
import reportWebVitals from './reportWebVitals';

//컴포넌트 명은 대문자로

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( //return 되는 값이 여기에 박힌다고 함 (html 태그)
  //<React.StrictMode>
    <App /> 
  //</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
