import React from 'react'
import Table from './components/Table'
import UserInput from './components/UserInput'
import star from './starWarsDeathStar.jpg'
import './App.css';

function App() {
  const imageStyle = {
    height: "100%", 
    backgroundSize: 'cover', 
    backgroundRepeat: 'no-repeat', 
    backgroundImage:`url(${star})`
  }
  return (
    <div className="App" style={ imageStyle } >    
          <h1>Star Wars API</h1>
      <UserInput />
      <Table />
    </div>
  );
}

export default App;
