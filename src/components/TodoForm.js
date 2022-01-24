import React, {useState, useEffect, useRef} from 'react';
//import TodoList from './TodoList';

function TodoForm(props) {
    const [input, setInput] = useState(props.edit ? props.edit.value : '');

    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current.focus();
    });

    const handleChange = e => {
        setInput(e.target.value);
    };

    const handleSubmit = e => {
        e.preventDefault();
        console.log(input);

         props.onSubmit({
            id: Math.floor(Math.random() * 10000),
            text: input
        }); 

        setInput('');
    };
 
    return (
        <form className='todo-form'>
          {props.edit ? (
            <>
              <input
                placeholder='Update your item'
                value={input}
                onChange={handleChange}
                name='text'
                ref={inputRef}
                className='todo-input edit'
              />
              <button onClick={handleSubmit} className='todo-button edit'>
                Update
              </button>
            </>
          ) : (
            <div>
              <input
                placeholder='Add a Todo'
                value={input}
                onChange={handleChange}
                name='text'
                className='todo-input'
                ref={inputRef}
              />
              <button onClick={handleSubmit} className='todo-button'>
                Add todo
              </button>
            </div>
          )}
        </form>
      );
    }
    
    export default TodoForm;
