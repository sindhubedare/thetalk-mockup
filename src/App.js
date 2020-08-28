import React from 'react';
import './App.css';
import Header from './Components/Header';
import Newinterview from './Components/Newinterview';

function App() {
  return (
    <React.Fragment>
    <div className="App">
     <Header />
    </div>
    <div>
    <Newinterview />
</div>
</React.Fragment>
  );
}

export default App;

