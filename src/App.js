import React,{Component} from 'react';
import  Header from './components/Header.js';
class App extends Component{
  state={
    sign:"Login"
  }
  render(){
      return (
        <Header sign={this.state.sign}/>
      );
  }
}

export default App;
