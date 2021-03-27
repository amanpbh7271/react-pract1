import logo from './logo.svg';
import './App.css';

import Greet from './compnents/Greet.js'

class App extends React.Component{
  constructor(){
  super();
  this.state={
    show:true
  }
  }
}

function App() {
  return (
    <div className="App">
      <Greet />
    </div>
  );
}

export default App;
