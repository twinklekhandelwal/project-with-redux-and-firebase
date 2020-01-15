import React from 'react';
import Notification from './notification';
// import ProjectList from '../project/projectlist';
import { connect } from 'react-redux';
import ProjectList from '../project/projectlist';
class Deshboard extends React.Component{
    render() {
        const { projects } = this.props;
        return(
            <div className="container">
<div className="row">
    <div className="col s12 m6"></div>
    <div className="col s12 m6"></div>
    <Notification/>
    <ProjectList projects={projects}/> 
    {/* <ProjectList/>
    <ProjectList/>
    <ProjectList/> */}
    </div>
    </div>
        )

    }
}

const mapStateToProps = (state) => {
    return { projects: state.project.projects}
}

export default connect(mapStateToProps)(Deshboard);