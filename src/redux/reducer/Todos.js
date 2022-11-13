import { ADD_TODO, DEL_DATA, SET_FILTER, TOOGLE_TODO, UDPATE_DATA } from "../action/Action";

const init_state ={
    todos: []
}

function Todos(state = init_state,action) {
  switch (action.type) {  
    case ADD_TODO:
      const {id,task} = action.payload
      return{
        todos:[...state.todos,{id,task,status:false}]
      }
    case TOOGLE_TODO:{
      const { theId } = action.payload;
      const todos = state.todos.map(item => item.id === theId ? { ...item, status: !item.status } : item);
      return { todos }
    }
    case UDPATE_DATA:
      state.todos.map((item=>{
        if (item.id == action.payload.updateId) {
          item.task = action.payload.taskUpdate
        }
      }))
      return{
        todos : state.todos
      }
    case DEL_DATA:
      let a = state.todos.slice(0,action.payload)
      let b = state.todos.slice(action.payload + 1)
      const Todos = a.concat(b) 
      console.log(Todos);
      return{
          todos : Todos
      }
    default:
        return state;
  }
}

export default Todos