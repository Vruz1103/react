// const name="Rob";
// function displayMessage(){
//     return "Wow";
// }
// function Hello(props){
//     const{name,message}=props;
//     // return <h1>Hello from a component{displayMessage()}</h1>
//     // return <h1>Hello from a component</h1> <h1>Wow</h1>;
//     return(
//         <div>
//             {/* <h1>{props.message} {props.name}</h1> */}
//             {/* <h1>Wow</h1> */}
//             <h1>{message} {name}</h1>
//         </div>
//     );
// }
// export default Hello; 


// function Hello({name,message,emoji}){
//     // const{name,message}=props;
//     // return <h1>Hello from a component{displayMessage()}</h1>
//     // return <h1>Hello from a component</h1> <h1>Wow</h1>;
//     return(
//         <div>
//             {/* <h1>{props.message} {props.name}</h1> */}
//             {/* <h1>Wow</h1> */}
//             <h1>{message} {name} {emoji}</h1>
//         </div>
//     );
// }
// export default Hello; 



// function Hello(props){
// //    props.name="Jake";
//     return(
//         <div>
          
//             <h1>{props.message} {props.name} {props.emoji}</h1>
//         </div>
//     );
// }
// export default Hello; 


// function Hello({name,message,emoji,seatNumbers}){
    
//         return(
//             <div>
              
//                 <h1>{name}{message}{emoji}{seatNumbers}</h1>
//             </div>
//         );
//     }
//     export default Hello; 

// function Hello(props){
    
//     return(
//         <div>
          
//             <h1>{props.person.name}{props.person.message}{props.person.emoji}{props.person.seatNumbers}</h1>
//         </div>
//     );
// }
// export default Hello; 

function Hello({person}){
    
    return(
        <div>
          
            <h1>{person.name}{person.message}{person.emoji}{props.person.seatNumbers}</h1>
        </div>
    );
}
export default Hello; 
