import { useState } from "react";

export default function Form(){
    // const [name,setName]=useState("");
    const [name,setName]=useState({firstName:"",lastName:""});

    function handleChange(e){
        // console.log("Change occured");
        // console.log(e);
        // setName(e.target.value)
    }

    function handleSubmit(e){
        e.preventDefault();
        console.log(name);
    }
    return(<div>
        {name.firstName}-{name.lastName}
        <form>
            {/* <input onChange={handleChange} type="text" value="Firstname"></input> */}
            {/* <input onChange={handleChange} type="text" value={name}></input> */}
            {/* <input 
            // onChange={function demo(e){
            //     return handleChange(e);
            // }} 
            // onChange={(e)=>handleChange(e)}
            onChange={(e)=>setName(e.target.value)}
            type="text" 
            value={name}></input> */}
{/* 
            <input 
            onChange={(e)=>setName({firstName:e.target.value,lastName:""})}
            type="text"
            value={name.firstName}>
            </input>

            <input 
            onChange={(e)=>setName({firstName:"",lastName:e.target.value})}
            type="text"
            value={name.lastName}>
            </input> */}

            <input 
            onChange={(e)=>setName({...name,firstName:e.target.value})}
            type="text"
            value={name.firstName}>
            </input>

            <input 
            onChange={(e)=>setName({...name,lastName:e.target.value})}
            type="text"
            value={name.lastName}>
            </input>

            <button onClick={(e)=>handleSubmit(e)}>Add</button>
        </form>
    </div>)
}