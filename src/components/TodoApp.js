import React, { useState } from 'react'

const TodoApp = () => {

  const [title, setTitle] = useState('');
  const [todos, setTodos] = useState([]);

  const handleInputChange = (e) => {
    setTitle(e.target.value);
  }

  const handleClick = (e) => {
    e.preventDefault()

    if(title.length > 0){
      const newTodo = {
        id: crypto.randomUUID(),
        title: title,
        completed: false,
      }

      setTodos([...todos, newTodo]);
      setTitle('');
    }
  }

  return (
    <div className='todoContainer'>
      <form className='todoCreateForm' onSubmit={handleClick}>
        <input 
          className='todoInput' 
          onChange={handleInputChange} value={title}/>
        <input 
          className='buttonCreate' 
          type="submit" 
          value="Create todo" 
          onClick={ handleClick }/>
      </form>
      {title}
    </div>
  )
}

export default TodoApp