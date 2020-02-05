import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));  //<App /> : Component (HTML을 반환하는 함수
// public/index.html의 root id를 찾아 모든 요소를 넣어줌
// 리액트는 소스코드(index.html)에 바로 html을 쓰지 않고 html을 삽입하거나 제거함
// 시작 시 빈 html를 로드하고 html을 밀어넣음
// > virtual! react가 빠른 이유