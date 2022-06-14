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
      {item.title}
      <button onClick={()=>setIsEdit(true)}>Edit</button>
      <button onClick={deleteItem}>Delete</button>
    </div>
  )
}

export default TodoElement