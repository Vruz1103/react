import styles from "../assets/css/todoitem.module.css"

export default function TodoItem({item, todos,setTodos}){
    function handleDelete(item){
        setTodos(todos.filter((todo)=>todo!==item))

    }
    function handleClick(name){
       const newArray= todos.map((todo)=>todo.name===name?{...todo,done:!todo.done0}:todo)
       setTodos(newArray);

    }

    const completedClass= item.done ? styles.completed:"";

    return(<div className={styles.item}>
        <div className={styles.itemName}>
            <span className={completedClass}  onClick={()=>handleClick(item.name)}>{item.name}</span>
        
        <span>
            <button onClick={()=>handleDelete(item)} className={styles.deleteButton}>
                Remove
            </button>
        </span>
        </div>
        
        <hr className={styles.line}/>
        </div>)
}