// import "../assets/css/style.css"
import styles from './inlinecomponent.module.css'

export default function InlineComponent(){
    return(<div>
        {/* <h1 style={{color:"blue", fontSize:"140px"}}>Inline Component</h1> */}
        {/* <h1 className="header">Inline Component</h1> */}
        {/* <h1 className="inline-header">Inline Component</h1> */}
        <h1 className={styles.header}>Inline Component</h1>
        </div>)
}