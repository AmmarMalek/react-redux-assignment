export const AddToDo = (data) =>{
    return{
        type:"ADDTODO",
        payload:{
            id : new Date().getTime().toString(),
            data : data
        }
    }
}

export const DeleteToDo = (id) =>{
    return{
        type:"DELETETODO",
        id:id
    }
}