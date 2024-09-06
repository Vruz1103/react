import { useState } from "react";
import styles from '../assets/css/formtodo.module.css'

export default function FormTodo({todos,setTodos}){
    // const [todo,setTodo]=useState("");
    // const [todos,setTodos]=useState([]);

    const [todo,setTodo]=useState({name:"",done:false});

    function handleSubmit(e){
        e.preventDefault();
        setTodos([...todos,todo]);
        setTodo({name:"",done:false});
    }
    return( <form onSubmit={handleSubmit} className={styles.todoform}>
        <div className={styles.inputContainer}>        
        <input placeholder="Enter Todo Item ..."  className={styles.modernInput} type="text" value={todo.name} onChange={(e)=>setTodo({name:e.target.value,done:false})}></input>
        <button className={styles.modernButton} type="submit">Add</button> 
        </div>
        

     </form>)
}