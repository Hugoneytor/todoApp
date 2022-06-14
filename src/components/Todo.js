import React, { useState } from 'react';
import FormEdit from './FormEdit';
import TodoElement from './TodoElement';

const Todo = ({item, setTodos, todos}) => {

  const [isEdit, setIsEdit] = useState(false)

  return (
    <div className='todo'>
      {(isEdit === false) 
        ? 
          (
            <TodoElement 
              item={item} 
              setIsEdit={setIsEdit} 
              setTodos={setTodos}
              todos={todos}
            />
          )
        :
          (
           <FormEdit 
              item={item}
              setIsEdit={setIsEdit} 
            /> 
          )}
    </div>
  )
}

export default Todo;


