import Welcome from "./Welcome";
import Code from "./Code";

export default function ConditionalComponent(){
    // let messageOne = <h1>This is message 1</h1>;
    // let messageTwo = <h1>This is message 2</h1>;
    let message;
    // const display = true;
    const display = false;
    if(display){
        // return(messageOne)
        message=<h1>This is message 1</h1>;
    }
    else{
        // return(messageTwo)
        message=<h1>This is message 2</h1>;
    }
    return message;
    
    
    
    
    
    
    
    
    
    // const display=false;
    // const display=true;
    // if(display){
    //     return(<Welcome/>)
    // }
    // else{
    //     return(<Code/>)
    // }



    // if(display){
    //     return(
    //         <div>
    //             <h3>This is a conditional component</h3>
    //         </div>

    //     );
    // }
    // else{
    //     return(
    //     <div>
    //     <h3>Code Everyday</h3>
    //     </div>
    //     );
    // }
    // return(<div>
    //     <h3>This is a conditional component</h3>
    //     <h3>Code Everyday</h3>
    // </div>)
}