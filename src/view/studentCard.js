import { Component } from 'react';
import "../App.css"
import MapComponent from '../view/mapComponent';
// import DelButton from '../componentListNPM/componentForms/deleteButton';
// import RunButton from '../componentListNPM/componentForms/runButton';
// import ParentFormComponent from '../componentListNPM/parentFormComponent';


export default class Card extends Component {
  constructor(props) {
    super(props);
    

  }

  /**
   * 
   * OPTIONS
   * BIGGESTCARD
   * BIGGERCARD
   * BIGCARD
   */


  render() {
    let app = this.props.app;
    let dispatch = app.dispatch;
    let state = app.state;
    let componentList = state.componentList;
    let styles =state.styles;
    let cards={
      biggestcard: <BiggestCard app={app} />,
      biggercard: <BiggerCard app={app} />,
      bigcard: <BigCard app={app} />,
      biggestCardColorTab: <BiggestCardColorTab app ={app} />
    
    }

    return (
      <div >
        {cards[this.props.theme? this.props.theme: "biggestCardColorTab"]}
        </div>

    )
  }
}
class MainContent extends Component{
  constructor(props) {
    super(props);
  }
  render(){
    let app = this.props.app;
    let dispatch = app.dispatch;
    let state = app.state;
    let componentList = state.componentList;
    let styles =state.styles;

    return(
      <MapComponent  app={app} name="student" cells={[{img:"picURL"}, ["firstName", "lastName"], "_id", "delete", ]} linkOptions={{path:["/student/"], cells:[0,1,2]}}/>      

      )
  }
}


class BiggestCard extends Component{
  constructor(props) {
    super(props);
  }
  render(){
    let app = this.props.app;
    let dispatch = app.dispatch;
    let state = app.state;
    let componentList = state.componentList;
    let styles =state.styles;

    return(
    <div className='scroller' style={{...styles?.biggestcard}}>      
      <MainContent app={app} />
      </div>
      )
  }
}

class BiggestCardColorTab extends Component{
  constructor(props) {
    super(props);
  }
  render(){
    let app = this.props.app;
    let dispatch = app.dispatch;
    let state = app.state;
    let componentList = state.componentList;
    let styles =state.styles;

    return(
    <div  style={{...styles?.biggestcard}}>   
    <div style={{width:"100%", height:"100px", background:"green",  borderRadius:"23px 23px 0px 0px"}}></div>   
    <div className='scroller'>
      <MainContent app={app} />
      </div>
      </div>
      )
  }
}


class BigCard extends Component{
  constructor(props) {
    super(props);
  }
  render(){
    let app = this.props.app;
    let dispatch = app.dispatch;
    let state = app.state;
    let componentList = state.componentList;
    let styles =state.styles;

    return(
      <div className='scroller'  style={{...styles?.bigcard}}>   
            <MainContent app={app} />
  
      </div>
      )
  }
}

class BiggerCard extends Component{
  constructor(props) {
    super(props);
  }
  render(){
    let app = this.props.app;
    let dispatch = app.dispatch;
    let state = app.state;
    let componentList = state.componentList;
    let styles =state.styles;

    return(
      <div className='scroller'  style={{...styles?.biggercard}}>      
            <MainContent app={app} />

      </div>
      )
  }
}







