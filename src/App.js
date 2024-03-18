import './App.css';

function Header(){

  return(
    <header>
        <h1><a href='/'>REACT</a></h1>
    </header>
  )

}
function Nav(){

  return(
    <nav>
        <ol>
          <li><a href="/read/1">html</a></li>
          <li><a href="/read/2">css</a></li>
          <li><a href="/read/3">JS</a></li>
        </ol>
    </nav>
  )

}
function Article(){//여기서 함수명에 밑줄이 갈때는 함수를 만들어 놓고 사용하지 않아서

  return(
    <article>
    <h2>Welcome</h2>
    Hello, WEB
    </article>
  )

}

// 순서
// app.js에서 함수를 만듬
// component에서 태그 별 함수를 만들어 html태그를 넣음
// 함수밑에 export default 함수명; 을 꼭 넣어야함
// app.js에서 함수를 호출
// 태그 꺽쇠 안쪽에 컨탭하면 자동 임포트

function App() {
  return (
    <div className="App">
      <Header></Header>{/* 위에 잇는 return헤드를 호출 */}
      <Nav></Nav>{/* 위에 잇는 return네브를 호출 */}
      <Article></Article>{/* 위에 잇는 return아티클를 호출 */}
      {/* 태그 꺽쇠 안쪽에 컨탭하면 자동 임포트 된다 */}
   
    </div>
  );
}

export default App;
