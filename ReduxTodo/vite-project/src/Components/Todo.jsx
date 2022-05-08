import { useState } from "react";
import { useDispatch } from "react-redux";
//import {useDispatch} from "react-redux"
import { addTodo } from "../actions";

function Todo() {
  const [inputData, setInputData] =useState('')

const dispatch=useDispatch();
  
  return (
    <>
      <div className="child-div">
        <figcaption>
          <figcaption>ADD your list here </figcaption>
        </figcaption>

        <div className="addItem">
          <input
            type="text"
            placeholder="set task"
            value={inputData}
            onChange={(e) => 
              setInputData(e.target.value)
            }
          />
          <i className="fa fa-plus and add-btn" 
          onClick={()=>dispatch(addTodo(inputData))}></i>
        </div>
      </div>
    </>
  );
}

export default Todo;
