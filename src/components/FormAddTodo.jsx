import React, { useState } from "react";
import { Button, Form, InputGroup } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/action/Action";

function FormAddTodo() {
    const dispatch = useDispatch()
    const [value, setValue] = useState('');
    function handleInput(e) {
        setValue(e.target.value)   
    }
function handleSubmit(eve) {
    eve.preventDefault()
    dispatch(addTodo(value))
    setValue('')
}
  return (
    <Form className="" onSubmit={handleSubmit}>
     <InputGroup className="mb-3" style={{maxWidth:'700px',margin:'auto'}}>
        <Form.Control
          placeholder="Add your todo things"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
          value={value}
          onChange={handleInput}
        />
        <Button variant="outline-primary" type="submit" disabled={!value}>
          ADD
        </Button>
      </InputGroup>
    </Form>
  );
}

export default FormAddTodo;
