import React, {useState} from 'react';

function TodoForm({addTodo}) {
    const [text, setText] = useState('');
    const onSubmitHandler = (e) => {
        e.preventDefault();
        addTodo(text)
        setText('')
    }
    return (
        <form onSubmit={(e) => onSubmitHandler(e)}>
            <input
                type="text"
                placeholder="Enter newTodo"
                value={text}
                onChange={(e) => setText(e.target.value)}/>
            <button type="submit">Submit</button>
        </form>
    );
}

export default TodoForm;