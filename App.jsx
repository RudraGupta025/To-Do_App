import { useState, useEffect } from 'react';
import './App.css';
import { CreateTodo } from './components/CreateTodo.jsx'; // ✅ Fixed casing
import { Todo } from './components/todo.jsx';  
import "./components/CreateTodo.css"; 
       
function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3003/todos")
      .then(async (res) => {
        const data = await res.json();
        setTodos(data.todos);
      })
      .catch((error) => {
        console.error("Error fetching todos:", error);
      });
  }, []);

  return (
    <div>
      <CreateTodo />
      <Todo todos={todos} />
    </div>
  );
}

export default App;
