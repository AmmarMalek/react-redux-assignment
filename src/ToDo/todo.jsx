import React from 'react';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { AddToDo, DeleteToDo } from '../actions/actions'

function Todo(props) {
    const[indata, setindata] = useState('')
    const list = useSelector((state)=>state.listdata.list);
    const dispatch = useDispatch();
    return (
        <>
            <div className="container">
                <div className="row mt-5">
                    <div className="col-6">
                        <input type="text" className='form-control' value={indata} onChange={(event)=>setindata(event.target.value)}/>
                        <br />
                        <button className='btn btn-primary' type='button' onClick={()=>{dispatch(AddToDo(indata,setindata('')))}}>Add</button>
                        {list.map((ele,i)=>{
                            return(
                                <>
                                    <h1>{ele.data}</h1>
                                    <button className='btn btn-success' onClick={()=>{dispatch(DeleteToDo(ele.id))}}>Delete</button>
                                </>
                            )
                        })}
                    </div>
                </div>
            </div>  
        </>
    );
}

export default Todo;