import React from 'react'
import Checkbox from './Checkbox'

export default function Task({name,done}){
  return (
    <div className="task">
      <Checkbox defaultChecked={done}/> 
      {name}
    </div>
  );
}
