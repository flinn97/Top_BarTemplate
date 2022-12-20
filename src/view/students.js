import { Component } from 'react';
import "../App.css"
import StudentCard from './studentCard';



export default class Students extends Component {
  constructor(props) {
    super(props);

    this.state = {

    }
  }
 


  render() {
    let app = this.props.app;
    let dispatch = app.dispatch;
    let state = app.state;
    let componentList = state.componentList;
    let styles =state.styles;

    return (
      <div><h1>students</h1>
      <StudentCard app={app} type="bigCard" theme="spawn" />
      </div>

    )
  }
}

