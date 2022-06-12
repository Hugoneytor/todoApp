import React, { useState } from 'react';

const Todo = ({item}) => {

  const [isEdit, setIsEdit] = useState(false)
  const [inputEdit, setInputEdit] = useState(item.title);
  
  const handleEdit = (e) => {
    e.preventDefault()
    if(inputEdit.length > 0){
      item.title = inputEdit; 
      setIsEdit(false)
    }
  }

  return (
    <div>
      {(isEdit === false) 
        ? 
          (
            <div>
              {item.title}
              <button onClick={()=>setIsEdit(true)}>Edit</button>
              <button>Delete</button>
            </div>
          )
        :
          (
            <form>
              <input type='text' value={inputEdit} onChange={(e)=>setInputEdit(e.target.value)}/>
              <input type='submit' value='Update' onClick={handleEdit}/>
            </form>
          )
      }
    </div>
  )
}

export default Todo;


