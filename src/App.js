import React,{Component} from 'react';
import Login from './components/Login/Login'
import './App.css';



class App extends Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <Login/>
    )
  }
}

export default App;
