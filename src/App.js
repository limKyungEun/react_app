import './App.css';

function Header(props){

  console.log('props', props.title);//콘솔창에 오류 뜨는데 확장팩 설치하면 안뜸

  return(
    <header>
        <h1><a href='/' onClick={(event)=>{//화살표 함수 근데 굳이?
          event.preventDefault();
          props.onChangeMode();
        }}>{props.title}</a></h1>
    </header>
  )

}
function Nav(props){

  const lis =[]
  for(let i=0; i<props.topics.length; i++){
    let t = props.topics[i];
    lis.push(<li key={t.id}><a href={'/read/'+t.id}>{t.title}</a></li>);//key={t.id} 는 콘솔 오류 때문에 넣은 key
  }

  return(
    <nav>
        <ol>
          {lis}
        </ol>
    </nav>
  )

}
function Article(props){//여기서 함수명에 밑줄이 갈때는 함수를 만들어 놓고 사용하지 않아서

  return(
    <article>
    <h2>{props.title}</h2>
    {props.body}
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

const topics =[

  {id:1, title:'html',body:'html is...'},
  {id:2, title:'css',body:'css is...'},
  {id:3, title:'javascript',body:'javascript is...'}
]

  return (
    <div className="App">
      <Header title="Web" onChangeMode={function(){
        alert('Header');
      }}></Header>{/* 위에 잇는 return헤드를 호출 */}
      <Nav topics={topics}></Nav>{/* 위에 잇는 return네브를 호출 */}
      <Article title="Welcome" body="Hello, Web"></Article>{/* 위에 잇는 return아티클를 호출 */}
      {/* 태그 꺽쇠 안쪽에 컨탭하면 자동 임포트 된다 */}
    
    </div>
  );
}

export default App;
