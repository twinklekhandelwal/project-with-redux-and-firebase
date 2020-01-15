import React from 'react';

import './App.css';
// import ProjectList from './project/projectlist';
import { BrowserRouter,Switch,Route } from "react-router-dom";
import Navbar from './layout/navbar';
import Deshboard from './dashboard/dashboard';
//  import ProjectList from './project/projectlist';
import ProjectDetail from './project/projectdetail';
import Signin from './auth/sign';
import Signup from './auth/Signup';
import CreateProject from './project/createProject';
function App() {
  return (
    <BrowserRouter>
    
    <Navbar/>
    {/* <Deshboard/> */}
    
     {/* <ProjectList/> */}
    

    
 <Switch>
  <Route exact path="/" component={Deshboard}/>
  <Route path="/login/:id" component={ProjectDetail}/>
  <Route path="/signin" component={Signin}/>
  <Route path="/signup" component={Signup}/>
  <Route path="/project" component={CreateProject}/>
</Switch>
    </BrowserRouter>
  );
}

export default App;
