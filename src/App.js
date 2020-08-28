import React from 'react';
import './App.css';
import Header from './Components/Header';
import Newinterview from './Components/Newinterview';
import MostRead from './Components/MostRead';

function App() {
  return (
    <React.Fragment>
    <div className="App">
     <Header />
    </div>
    <div>
    <Newinterview />
</div>
<div>
  <MostRead />
</div>
</React.Fragment>
  );
}

export default App;

