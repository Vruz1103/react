import { useState } from "react"
// import TodoItem from "./Todoitem";
import FormTodo from "./FormTodo";
import TodoList from "./TodoList";
import FooterTodo from "./FooterTodo";

export default function Todo(){
    // const [todo,setTodo]=useState("");
    const [todos,setTodos]=useState([]);
    // function handleSubmit(e){
    //     e.preventDefault();
    //     setTodos([...todos,todo]);
    //     setTodo("");
    // }

    const completedTodos= todos.filter((todo)=>todo.done).length
    const totalTodos = todos.length;

    return (<div>
        {/* <form onSubmit={handleSubmit}>
           <input type="text" value={todo} onChange={(e)=>setTodo(e.target.value)}></input>
           <button type="submit">Add</button> 
        </form> */}
        <FormTodo todos={todos} setTodos={setTodos} />
        <TodoList todos={todos} setTodos={setTodos}  />
        <FooterTodo completedTodos={completedTodos} totalTodos={totalTodos}/>
        {/* {console.log(todos)} */}
        {/* {todos.map((item)=>{
          return(<TodoItem key={item} item={item}/>)
        })} */}
        {/* {todos} */}
    </div>
    );
}