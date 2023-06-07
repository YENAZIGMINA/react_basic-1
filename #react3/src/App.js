import './App.css';
import Body from './components/Body';
import Header from './components/Header';
import Footer from './components/Footer'
import Children from './components/Children';

function App() {
  const name = "myunzzhang"
  const footProps = {
    name:"myunzzhang",
    location:"Kimhae"
  }
  function handleClick(){
    console.log("function's click")
  }
  const arrowClick =()=>{
    console.log("arrow function start")
  }
  return (
    <div>
      <Header name={name}/>
      <Body name={name} location='kimhaesi'/>
      <Footer {...footProps}/>
      <Children>
      <div>Children 컨퍼넌트</div>
      </Children>
      <button onClick={handleClick}>
        function's Click
      </button> <br></br>
      <button onClick={arrowClick}>
        Arrow function Click
      </button>
      </div>
  );
}

export default App;
