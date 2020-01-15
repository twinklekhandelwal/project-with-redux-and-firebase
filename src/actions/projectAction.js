export const createProject=(project)=>{
    // console.log(project ,"twinkle")
    return(dispatch,getState)=>{
        dispatch({
            type:'create_project',
            project:project
        })
    }
}