import './App.css';
import { Component } from 'react';
// import Home from './view/home';
import Nav from './view/nav.js';
// import Login from './view/login';
// import Register from './view/register';
import './index.css';
import CharacterStrategy from './view/badges';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Students from './view/students';
import Goals from './view/goals';
// import DeletePopup from './view/deletePopup';
// import KeepDel from './view/keepDelete';


//model
export default class Dispatch extends Component {
  constructor(props){
    super(props);
  
  }


  render(){
    let app = this.props.app;
    let state = app.state;
    let styles =state.styles;
  return (
<BrowserRouter>
    <div style={{
      width:"100%", 
      height:"96vh",
      fontFamily: styles.fonts.fontNormal,
      }}>
        



     <Nav app={app}/> 
     <div style={{paddingTop:"50px",paddingLeft:"50px", width:"100%", height:"100%"}}>
     <Routes>
      {state.switchCase?.map((obj, index)=>
        <Route path={obj.path} element={<obj.comp app={app}/>} />
      )}
      <Route path={"/student/:id"} element={<CharacterStrategy app={app}/>} />


      {/* <Route path='/' element={<Character app={app} />} />
      <Route path='/adventure' element={<AdventureLog app={app} />} />
       */}
</Routes>
</div>
     </div>

     
     </BrowserRouter>
  )}
}