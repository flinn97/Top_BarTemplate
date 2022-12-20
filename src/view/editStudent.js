import { Component } from 'react';
import "../App.css"
import ParentFormComponent from '../componentListNPM/parentFormComponent';
import MapComponent from './mapComponent';
// ipmort ParentFormComponent\
// import ParentFormComponent from './parentFormComponent';


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
      biggestCardColorTab: <BiggestCardColorTab app ={app} />,
      biggerCardColorTab: <BiggerCardColorTab app ={app} />,
      bigCardColorTab: <BigCardColorTab app ={app} />,
      biggestCardPopup: <BiggestCardPopup app = {app} />


    
    }

    return (
      <div >
        {cards[this.props.theme? this.props.theme: "biggestCardColorTab"]}
        </div>

    )
  }
}
import { Component } from 'react';
import ParentFormComponent from '../componentListNPM/parentFormComponent';

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
    let student= state.currentComponent;

    return(
    <div>
      <ParentFormComponent type="photoUpload" obj={student} name="picURL" />

      <ParentFormComponent obj={student} name="parent" label="parent"/>
      <ParentFormComponent obj={student} name="address" label="address" />

      <ParentFormComponent obj={student} name="phone" label="phone" />
      <ParentFormComponent obj={student} name="firstName" label="firstName" />
      <ParentFormComponent obj={student} name="lastName" label="lastName" />
      <ParentFormComponent obj={student} name="about" label="about" />
      <ParentFormComponent obj={student} name="email" label="email"  />
      <ParentFormComponent type="switch" obj={student} name="time" label="time"  />
      <ParentFormComponent type="switch" obj={student} name="check" label="check"  />
      <ParentFormComponent type="switch" obj={student} name="trackTime" label="trackTime"  />
      <ParentFormComponent type="switch" obj={student} name="starpoints" label="starpoints"  />
      <ParentFormComponent type="timePick" obj={student} name="days" />
      <ParentFormComponent type="linkObjects" obj={student} objType="student" name="syncedStudents" />
      <ParentFormComponent type="run" obj={student} />


    </div>
      )
  }
}

class TabContent extends Component{
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
    <div></div>
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
    <div style={{width:"100%", height:"100px", background:"green", borderRadius:"23px 23px 0px 0px"}}><TabContent app={app} /></div>   
    <div className='scroller'>
      <MainContent app={app} />
      </div>
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


class BiggerCardColorTab extends Component{
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
    <div  style={{...styles?.biggercard}}>   
    <div style={{width:"100%", height:"100px", background:"green", borderRadius:"23px 23px 0px 0px"}}><TabContent app={app} /></div>   
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

class BigCardColorTab extends Component{
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
    <div  style={{...styles?.bigcard}}>   
    <div style={{width:"100%", height:"100px", background:"green", borderRadius:"23px 23px 0px 0px"}}> <TabContent app={app} /></div>   
    <div className='scroller'>
      <MainContent app={app} />
      </div>
      </div>
      )
    }
  }
  class BiggestCardPopup extends Component{
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
        <div className="popup-box" style={{ zIndex: "1010" }}>
        <div ref={this.wrapperRef}  className="diapicboxa" style={{ zIndex: "1010", height:window.innerHeight<900?"70vh":"54vh" }}>
        <div style={ ///EXIT BUTTON
                        styles.buttons.closeicon
                    } onClick={this.props.handleClose}>x</div>
            
 
         
    <div style={{display:"flex", flexDirection:"column", justifyContent:"center", display:"flex", alignItems:"center"}}>

<MainContent app ={app} />
       

    </div>
    </div>



    </div>
        )
      }
    }
  

