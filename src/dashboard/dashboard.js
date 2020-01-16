import React from 'react';
import Notification from './notification';
// import ProjectList from '../project/projectlist';
import { connect } from 'react-redux';
import ProjectList from '../project/projectlist';
import {firestorConnect} from 'react-redux-firebase'
import {compose} from 'redux'
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
    
    </div>
    </div>
        )

    }
}

const mapStateToProps = (state) => {
    return { projects: state.firestore.ordered.project}
}

export default compose( connect(mapStateToProps),
firestorConnect([{collection:'project'}]))(Deshboard);