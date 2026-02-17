import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background: #f5f5f5;
   min-height: 100vh;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 20px;
  color: #333;
`;

const Form = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 20px;
`;

const Input = styled.input`
  padding: 10px;
  border: 2px solid #ccc;
  border-radius: 5px;
  font-size: 1rem;
  width: 200px;
  background: #ccc;
`;

const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
`;

const CheckboxLabel = styled.label`
  margin-left: 5px;
  font-size: 1rem;
  color: #333;
`;

const Button = styled.button`
  padding: 10px 20px;
  font-size: 1rem;
  color: #fff;
  background-color: #007bff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #0056b3;
  }
`;

const List = styled.ul`
  list-style-type: none;
  padding: 0;
  width: 400px;
`;

const ListItem = styled(motion.li)`
  background: #fff;
  color: #333;
  margin-bottom: 10px;
  padding: 15px;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

const DeleteButton = styled.button`
  background: none;
  border: none;
  color: #e74c3c;
  cursor: pointer;
  font-size: 1rem;
  &:hover {
    color: #c0392b;
  }
`;

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");
  const [completed, setCompleted] = useState(false);
  const [description, setdescription] = useState("");
  const [editingId, setEditingId] = useState(null); 
  const [editValue, setEditValue] = useState("");  

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/todos")
      .then((response) => setTodos(response.data));
  }, []);

  const addTodo = () => {
    if (!newTodo.trim()) return;
    axios
      .post("http://localhost:8080/api/todos", { title: newTodo,description, completed })
      .then((response) => setTodos([...todos, response.data]));
    setNewTodo("");
    setdescription("");
    setCompleted(false);
    
  };

  const deleteTodo = (id) => {
    axios
      .delete(`http://localhost:8080/api/todos/${id}`)
      .then(() => setTodos(todos.filter((todo) => todo.id !== id)));
  };
  const updateTodo = (id) => {
  axios.put(`http://localhost:8080/api/todos/${id}`, { title: editValue })
    .then(res => {
      setTodos(todos.map(t => t.id === id ? res.data : t));
      setEditingId(null); // Close the edit box
    });
};

  
    
    

  return (
    <Container>
 
      <Title>Todo App</Title>
      <Form>
        <Input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Add a new task"
        />
        <input
          type="text"
          placeholder="Enter description"
          value={description}
          onChange={(e) => 
            setdescription(e.target.value)
          }
          />
        <CheckboxContainer>
          <input
            type="checkbox"
            checked={completed}
            onChange={(e) => setCompleted(e.target.checked)}
          />
          <CheckboxLabel>Completed</CheckboxLabel>
        </CheckboxContainer>
        <Button onClick={addTodo}>Add</Button>
      </Form>
      <List>
        <AnimatePresence>
          {todos.map((todo) => (
            <ListItem
              key={todo.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
             
             {editingId === todo.id ? (
            <input 
             value={editValue} 
             onChange={(e) => setEditValue(e.target.value)}
             onKeyDown={(e) => e.key === 'Enter' && updateTodo(todo.id)}
             />
            ) : (
            <span onDoubleClick={() => { setEditingId(todo.id); setEditValue(todo.title); }}>
             {todo.title} - {todo.completed ? "Done" : "Pending"}
            </span>
            )}

            <button onClick={() => editingId === todo.id ? updateTodo(todo.id) : setEditingId(todo.id)}>
            {editingId === todo.id ? "Save" : "Edit"}
            </button>
              {/* {todo.title} - {todo.completed ? "Done" : "Pending"} */}
              <DeleteButton onClick={() => deleteTodo(todo.id)}>
                Delete
              </DeleteButton>
            </ListItem>
          ))}
        </AnimatePresence>
      </List>
    </Container>
    
  );
}

export default TodoList;