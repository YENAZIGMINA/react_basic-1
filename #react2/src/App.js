import './App.css';

import Header from './components/header'; //뒤에 .js는 생략가능
import Menu from './components/Menu';

function App() {
  return (
    <div>
      <Menu title= "그린"/>
      <Menu title = "학원"/>
      <Header color = "red" num ={1}/>
      <Header color = "blue" num ={2}/>
      <Header color = "green" num ={3}/>
    </div>
  );
}

export default App;
