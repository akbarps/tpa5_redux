import React from 'react'
import { Container } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { Changer } from '../redux/Changer'
import TodoTask from "./TodoTask"

function TodoItems() {
    const {reducer1,reducer2} = useSelector(state=>state)
    // const {FilterReducer} = useSelector(state=>state.reducer2)
    const filtering = Changer(reducer1,reducer2)
    // console.log(reducer1.todos.filter(item => item.status === true))
  
    
  return (
      <Container style={{maxWidth:'700px'}}>
        {filtering.length ? filtering.map((item,index)=>{
          return(
              <TodoTask key={item.id} index={index} todo={item}/>
          )
        }) :<h5>No Todo Today, Yeay !</h5>}
          
      </Container>
  )
}

export default TodoItems