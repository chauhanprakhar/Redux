import React from 'react';
import './App.css';
import {connect} from 'react-redux'
import anotherName from './actions/myActions'
function App(props) {
  console.log(props)
  return (
    <div className="App">
     <h1>my name is {props.myname}</h1>
     <button onClick={()=>{props.changeName()}}>change it</button>
    </div>
  );
}
const mapStateToProps =(state)=>{
  return {
    myname:state.name
  }
}
const mapDispatchToProps =(dispatch)=>{
  return {                                                                     //will return a object {} is a object
         changeName:()=>{dispatch(anotherName())} //changename is a method

  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
