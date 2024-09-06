import styles from '../assets/css/footertodo.module.css'

export default function FooterTodo({completedTodos,totalTodos}){
    return(<div className={styles.footer}>
        <span className={styles.item}>Completed Todos:{completedTodos}</span>
        <span className={styles.item}>Total Todos:{totalTodos}</span>
    </div>)
}