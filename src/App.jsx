import { useState } from 'react'
import TodoList from './components/TodoList'
import './App.css'
import TodoFrom from './components/TodoFrom'
import TodoFilter from './components/TodoFilter'

function App() {
  const [todos, setTodos] = useState([])
  const [newTodo, setNewTodo] = useState('')
  const [filter, setFilter] = useState('All')

  const addTodo = (text) => {
    setTodos([...todos, {id: Date.now(), text, completed: false}])
    console.log(todos);
  }

  const filterTodos = todos.filter(todo => {
    if (filter === 'Active') return !todo.completed;
    if (filter === 'Completed') return todo.completed
    return true;
  })

  const toggleTodo = (id) => {
    setTodos(
      todos.map(todo => todo.id === id ? {...todo, completed: !todo.completed} : todo)
    )
  }

  const removeTodo = (id) => {
    setTodos(todos.filter(todo => {
      if (todo.id === id) {
        alert('are you sure want to delete thid todo?')
        return false
      }
      return true
    }))
  }
  
  

  return (
    <>
      <div className='bg-slate-200 w-100 h-full p-4 rounded-md shadow-[0_0_10px_rgba(0,0,0,225)] gap-4 flex flex-col justify-center items-center mx-auto mt-100'>
        <h2 className='text-3xl font-bold text-black mb-4'>Todo List</h2>
        <TodoFrom
        newTodo={newTodo}
          setNewTodo={setNewTodo}
          addTodo={addTodo}
        />
        <TodoFilter filter={filter} setFilter={setFilter} />
        <TodoList todos={filterTodos} toggleTodo={toggleTodo} removeTodo={removeTodo}/>
      </div>
    </>
  )
}

export default App
