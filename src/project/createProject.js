import React, { Component } from 'react';
import {createProject} from '../actions/projectAction';

import { connect } from 'react-redux';
 class Sign extends Component {
  state=({
     title:"",
     content:"",
     
     


   })
   handleSumbit=(e)=>{
     
    e.preventDefault()
    // console.log(this.state)
    this.props.createProject(this.state)

   }
   handleChange=(e)=>{
     this.setState({
[e.target.id]:e.target.value})

   }
   
  render() {
    
    return (
      
<div className="container">
  <div className="row">
  <form className="col s6" onSubmit={this.handleSumbit}>
  <h4>Sign In</h4>
    <div className="row">
      <div className="input-field col s6">
        <input  id="title" type="text" className ="validate" onChange={this.handleChange}/>
        <label htmlFor="title">title</label>
      </div>
      </div>
      <div className="row">
      <div className="input-field col s6">
        <input id="project content" type="text" className="validate" onChange={this.handleChange}/>
        <label htmlFor="project content">project content</label>
      </div>
    </div>
    
    
    <div className="row">
      <div className="input-field col s6">
      <div className="waves-effect waves-light btn">Create</div>
      </div>
      </div>
       
    
  </form>
</div>
<createProject/> 
</div>

    )}

}

const mapDispatchToProps = (dispatch) => {
  return { createProject:(project)=> dispatch(createProject(project))}
}

export default connect(mapDispatchToProps)(Sign);

