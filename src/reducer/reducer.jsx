const InitialData = {
    list:[]
}
const MyData = (state=InitialData,action)=>{
    switch(action.type)
    {
        case "ADDTODO":
            const id = action.payload.id;
            console.log(id);
            const data = action.payload.data;
            console.log(data);
            return{
                ...state,
                list:[
                    ...state.list,
                    {
                        id:id,
                        data:data
                    }
                ]
            }

        case "DELETETODO":
            const list = state.list.filter((ele)=>ele.id!==action.id)
            // console.log(state.list);
            return{
                ...state,
                list:list
            }
            default: return state;

    }
}

export default MyData;