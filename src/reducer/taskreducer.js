function taskReducer(state,action){

    switch(action.type){
        case 'addTask':{
            return [
                ...tasks,{
                    taskid:action.taskid,
                    taskname:action.taskname,
                    status:action.status
                }
            ]
        }
    }
     
}