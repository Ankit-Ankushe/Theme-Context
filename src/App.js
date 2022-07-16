import logo from './logo.svg';
import './App.css';
import Page from './components/Page';
import { useContext } from 'react';
import { ThemeContext } from './context/ThemeContext';

function App() {
 const {theme} = useContext(ThemeContext)
  let backColor = "white"
  if(theme==="light"){
    backColor="white"
  }else{
    backColor="black"
  }

  return (
    <div className="App" style={{backgroundColor:(backColor)}}>
      <Page/>
    </div>
  );
}

export default App;
