import './App.css';
import Article from './component/Aricle';
import Header from './component/Header';
import Nav from './component/Nav';

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
