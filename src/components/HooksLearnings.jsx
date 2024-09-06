
// import { useState,useEffect } from "react"

// export default function HooksLearnings(){
//     // const [count,setCount]=useState(0);
//     // const[otherCount,setOtherCount]=useState(5);
//     // useEffect(()=>{
//     //     // document.title=`${count} new messages!
//     //     document.title=`${otherCount} new messages!`;
//     // },[otherCount])
//     // return(<div>
//     //     <h3>{count}New Messages</h3>
//     //     <button onClick={()=>setCount(count+1)}>Increase</button>
//     //     <h3>Other Count:{otherCount}</h3>
//     //     <button onClick={()=>setOtherCount(otherCount+5)}>Increase by 5</button>
//     // </div>)
// }


// import React, { useContext } from 'react';


// const ThemeContext = React.createContext('light');

// export default function HooksLearnings() {
//   const theme = useContext(ThemeContext); 

//   return (
//     <div>
//       <button style={{ backgroundColor: theme === 'dark' ? '#333' : '#fff' }}>
//         Theme Button
//       </button>
//     </div>
//   );
// }


// import React, { useState, useEffect } from 'react';

// export default function HooksLearnings() {
//   const [time, setTime] = useState(0);

//   useEffect(() => {
//     const timerId = setInterval(() => setTime(prevTime => prevTime + 1), 1000);

//     return () => clearInterval(timerId);
//   }, []);

//   return (
//     <div>
//       <p>Time: {time}</p>
//     </div>
//   );
// }


// import React, { useState, useCallback } from 'react';

// export default function HooksLearnings() {
//   const [count, setCount] = useState(0);

//   const handleClick = useCallback(() => {
//     setCount(count + 1);
//   }, [count]);

//   return (
//     <div>
//       <ChildComponent onClick={handleClick} />
//       <p>Count: {count}</p>
//     </div>
//   );
// }

// function ChildComponent({ onClick }) {
//   return <button onClick={onClick}>Click me</button>;
// }


// import React, { useState, useMemo } from 'react';

// export default function HooksLearnings() {
//   const [num, setNum] = useState(5);
//   const [count, setCount] = useState(0);

//   const computeFactorial = (n) => {
//     console.log('Computing factorial...');
//     if (n <= 1) return 1;
//     return n * computeFactorial(n - 1);
//   };

//   const factorial = useMemo(() => computeFactorial(num), [num]); // Memoize the result

//   return (
//     <div>
//       <button onClick={() => setCount(count + 1)}>Re-render</button>
//       <button onClick={() => setNum(num + 1)}>Increment Number</button>
//       <p>Factorial: {factorial}</p>
//     </div>
//   );
// }




// import React, { useRef } from 'react';

// export default function HooksLearnings() {
//   const inputRef = useRef(null);

//   const handleClick = () => {
//     inputRef.current.focus(); 
//   };

//   return (
//     <div>
//       <input ref={inputRef} placeholder="Focus me" />
//       <button onClick={handleClick}>Focus Input</button>
//     </div>
//   );
// }



// import React, { useState, useLayoutEffect, useRef } from 'react';

// export default function HooksLearnings() {
//   const [size, setSize] = useState(0);
//   const boxRef = useRef(null);

//   useLayoutEffect(() => {
//     const width = boxRef.current.getBoundingClientRect().width;
//     setSize(width);
//   }, []);

//   return (
//     <div>
//       <div ref={boxRef} style={{ width: '200px', height: '100px', background: 'lightblue' }}>
//         Box
//       </div>
//       <p>Box width: {size}px</p>
//     </div>
//   );
// }
