import React, { useState } from 'react'

export default function TaskForm({onAdd}) {
    const [taskName, setTaskName] = useState("");

    function handleSubmit(ev) {
        ev.preventDefault();
        onAdd(taskName);
        setTaskName("");
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
        <button>+</button>
        <input  type="text" 
                value={taskName} 
                onChange={ev => setTaskName(ev.target.value)}
                placeholder='your next task...'/>
        </form>
    </div>
  );
}

