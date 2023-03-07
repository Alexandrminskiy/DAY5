import { useState } from 'react';
import './App.css';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { Main } from './components/Main/Main';

function App() {

  const [todos, setTodos] = useState([])

  const addNewTodo = (title) => {
    const newTodo = {
      id: crypto.randomUUID(),
      complited: false,
      title
    }

    setTodos((prev) => [newTodo, ...prev])
  }

  const changeStatusTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id))
  }

  const clearAllTodos = () => {
    setTodos([])
  }

console.log({todos});

  return (
    <div>
    <div className="container py-5">
      <Header addNewTodo={addNewTodo} />
      <hr />
      <Main />
      <Footer />
    </div>
    <p>
      
    </p>
    </div>
  );
}

export default App;
