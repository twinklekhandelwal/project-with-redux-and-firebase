import React from 'react';
import Projectsummary from './projectsummary'

const ProjectList=({projects})=>{
  console.log(projects, "Pralhad")
    return(
        <div class="container">
<div class="project-list section">
    {projects.map(project=>{
      return(
    <Projectsummary project={project}/>)})}
        </div>
        </div>
       
        
        )
        }
        export default ProjectList;