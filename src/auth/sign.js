import React, { Component } from 'react';

 class Sign extends Component {
  state=({
     email:"",
     password:"",
     
     last_name:"",
     first_name:""


   })
   handleSumbit=(e)=>{
     
    e.preventDefault()
    console.log(this.state)

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
    <div className="row">
      <div className="input-field col s6">
        <input  id="first_name" type="text" className ="validate" onChange={this.handleChange}/>
        <label htmlFor="first_name">First Name</label>
      </div>
      <div className="input-field col s6">
        <input id="last_name" type="text" className="validate" onChange={this.handleChange}/>
        <label htmlFor="last_name">Last Name</label>
      </div>
    </div>
    
    <div className="row">
      <div className="input-field col s12">
        <input id="password" type="password" className="validate" onChange={this.handleChange}/>
        <label htmlFor="password">Password</label>
      </div>
    </div>
    <div className="row">
      <div className="input-field col s12">
        <input id="email" type="email" className="validate" onChange={this.handleChange}/>
        <label htmlFor="email">Email</label>
      </div>
    </div>
    <div className="row">
      <div className="input-field col s6">
      <div className="waves-effect waves-light btn">Login</div>
      </div>
      </div>
      
    
  </form>
</div>
</div>
    )}

}


export default Sign;
