import React, { useState } from 'react'

const FormEdit = ({item, setIsEdit}) => {

  const [inputEdit, setInputEdit] = useState(item.title);

  const handleEdit = (e) => {
    e.preventDefault()
    if(inputEdit.length > 0){
      item.title = inputEdit; 
      setIsEdit(false)
    }
  }
  const cancelEdit = () =>{
    setInputEdit(item.title)
    setIsEdit(false)
  }

  return (
    <form className='todoUpdateForm'>
      <input 
        className='todoInput'
        type='text' 
        value={inputEdit} 
        onChange={(e)=>setInputEdit(e.target.value)}/>

      <input 
        className='button'
        type='submit' 
        value='Update' 
        onClick={handleEdit}/>

      <button 
        className='buttonDelete'
        type='button' 
        onClick={cancelEdit}>
          Cancel
      </button>
    </form>
  )
}

export default FormEdit