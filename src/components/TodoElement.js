import React from 'react'

const TodoElement = ({item, setIsEdit, setTodos, todos}) => {

  const deleteItem = () => {
    const filterItems = todos.filter((element)=>{
      return element.id !== item.id
    })
    setTodos(filterItems)
  }

  return (
    <div className='todoInfo'>
      <span className='todoTitle'>{item.title}</span>
      <button className='button' onClick={()=>setIsEdit(true)}>Edit</button>
      <button className='buttonDelete' onClick={deleteItem}>Delete</button>
    </div>
  )
}

export default TodoElement