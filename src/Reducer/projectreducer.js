const initState = {
    projects: [{id:1,title:"twinkle"},{id:2,title:"ronak"}]
}

const projectreducer = (state = initState, action ) => {
    switch(action.type){
        case 'create_project':
        console.log(state)
    }
    return(state)
}

export default projectreducer ;
