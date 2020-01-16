const initState = {
    projects: [{id:1,title:"twinkle"},{id:2,title:"ronak"}]
}

const projectreducer = (state = initState, action ) => {
    switch(action.type){
        case 'create_project':
        return state;
        case 'create_project_error':
        return state;
        default:
        
    
    return(state)
    }
}

export default projectreducer ;
