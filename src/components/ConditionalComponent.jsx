import Welcome from './Welcome';
import Code from './Code';
import { useState } from 'react';

export default function ConditionalComponent() {
  const [display, setDisplay] = useState(false);
  // let messageOne = <h1>This is message 1</h1>;
  // let messageTwo = <h1>This is message 2</h1>;
  let message;
  // function displayButton(){
  //     return(<h1><button>Click Me</button></h1>)
  // }
  // const display = true;
  //   const display = false;

  // return display?<h1>Message 1</h1>:<h1>Message 2</h1>;
  return (
    <div>
      <button
        onClick={() => {
          setDisplay(!display);
        }}
      >
        Click Me
      </button>
      {display ? <Welcome /> : <Code />}
      {/* display?
      <Welcome />:<Code /> */}
    </div>
  );

  // if(display){
  //     // return(messageOne)
  //     message=<h1>This is message 1</h1>;
  // }
  // else{
  //     // return(messageTwo)
  //     message=<h1>This is message 2</h1>;
  // }
  // return message;

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
