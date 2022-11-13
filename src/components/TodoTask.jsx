import React, { useEffect, useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { delData, toggleCheck, updateDsta } from "../redux/action/Action";

function TodoTask({ todo,index }) {
  const dispatch = useDispatch();
  const [checked, setChecked] = useState(false);
  const [show, setShow] = useState(false);
  const [update, setUpdate] = useState("");
  function handleChecked() {
    dispatch(toggleCheck(todo.id));
  }
  function editHandler() {}
  useEffect(() => {
    setChecked(todo.status);
  }, [todo]);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  function handleUpdate(e) {
    setUpdate(e.target.value);
  }
  function handleSubmit(eve) {
    eve.preventDefault();
    dispatch(updateDsta(todo.id,update))
    setUpdate("")
    handleClose();
  }
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        marginBottom: "10px",
        backgroundColor: "beige",
        borderRadius: "20px",
        padding: "15px",
        width: "100%",
        textAlign: "left",
        border: "1px solid black",
      }}
    >
      <div className="task">
        <input
          onChange={handleChecked}
          style={{ transform: "scale(1.8)", marginRight: "15px" }}
          type={"checkbox"}
          name="cek"
          checked={checked}
        />
        <label htmlFor="cek">
          {todo.status ? (
            <h5 style={{ textDecoration: "line-through" }}>{todo.task}</h5>
          ) : (
            <h4>{todo.task}</h4>
          )}
        </label>
      </div>
      {todo.status ? (
        <></>
      ) : (
        <div className="edit" style={{ display: "flex" }}>
          <Button onClick={handleShow} style={{ marginRight: "20px" }}>
            Edit
          </Button>
          <Button onClick={()=>dispatch(delData(index))}>Delete</Button>
        </div>
      )}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Update Task</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Change Task</Form.Label>
              <Form.Control
                type="text"
                placeholder="your new task"
                autoFocus
                onChange={handleUpdate}
                value={update}
              />
            </Form.Group>
            <Button
              style={{ marginRight: "10px" }}
              variant="secondary"
              onClick={handleClose}
            >
              Close
            </Button>
            <Button type="submit" variant="primary" onClick={handleClose}>
              Update Task
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default TodoTask;
