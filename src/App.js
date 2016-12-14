import React,{Component, PropTypes} from 'react'
import axios from 'axios'
import {  Link } from 'react-router';
export default class App extends Component {

  render(){

    return(
      <div>
     <ul>
       <li><Link to='/'>home</Link></li>
       <li><Link to='/work'>work</Link></li>
     </ul>
        {this.props.children}
      </div>
    )
  }
}
