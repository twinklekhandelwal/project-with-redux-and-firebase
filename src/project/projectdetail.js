
import React from 'react';
// import { Link } from "react-router-dom";
const ProjectDetail=(props)=>{
    const id=props.match.params.id
    return(
        <div class="container">
<div class="project-list section">
      <div class="card z-depth-0 ">
        <div class="card-content white-text"></div>
        <span class="card-title">Card Title-{id}</span>
        <p>I am a very simple card. I am good at containing small bits of information.
          I am convenient because I require little markup to use effectively.</p>
        
        </div>
        <div class="card-action">
        <p>I am a very simple card. I am good at containing small bits</p>
        </div>
        </div>
        </div>
    )
}
export default ProjectDetail;