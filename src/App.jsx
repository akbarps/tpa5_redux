import { Container } from "react-bootstrap"
import FormAddTodo from './components/FormAddTodo'
import TodoItems from './components/TodoItems'
import FilterItems from './components/FilterItems'
import "./App.css"
function App() {


  return (
    <Container style={{marginTop:'200px',backgroundColor:'bisque',borderRadius:'50px',textAlign:'center',maxWidth:'900px',padding:'20px'}}>
      <h2>TODO LIST</h2>
      <FormAddTodo/>
      <TodoItems/>
      <FilterItems/>
    </Container>
  )
}

export default App
