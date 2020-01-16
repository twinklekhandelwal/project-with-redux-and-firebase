export const createProject=(project)=>{
    // console.log(project ,"twinkle")
    return(dispatch,getState,{getFirestore,getFirebase})=>{
        const firestore =getFirestore()
        firestore.collection('project').add({
            ...project,
            firstname:'twinkle',
            lastname:'khandelwal',
            id:1223,
            createAt:new Date()

        }).then(()=>{
        dispatch({
            type:'create_project',
            project:project
        })
    }).catch((err)=>{
        dispatch({type:'create_project_error,err'})
    })
    }
    }
