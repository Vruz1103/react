import Fruit from "./fruit"
// export default function Fruits(){
//     const fruits = ['Apple','Mango','Banana','Kiwi','Orange']
//     return <div>
//  {fruits.map((fruit)=>(<h1>{fruit}</h1>))} 
//     </div>
// }


// export default function Fruits(){
//     const fruits = ['Apple','Mango','Banana','Kiwi','Orange']
//     return <div>
//         <ul>
//     {fruits.map((fruit)=>(<li key={fruit}>{fruit}</li>))} 
//     </ul>
//     </div>
// }

export default function Fruits(){
   const fruits=[
    {name:"Apple",
     price:10,
     emoji:"🍎"
    },
    {name:"Mango",
        price:7,
        emoji:"🥭"
    },
    {name:"Banana",
        price:2,
        emoji:"🍌"
    },
    {name:"Orange",
        price:5,
        emoji:"🍊"
    },
    {name:"Pineapple",
        price:8,
        emoji:"🍍"
    },
   ]
    return <div>
        <ul>
           {fruits.map((fruit)=>(
           <Fruit key={fruit.name} name={fruit.name} price={fruit.price} emoji={fruit.emoji}/>))}
    {/* {fruits.map((fruit)=>(<li key={fruit.name}>{fruit.name} ${fruit.price}{fruit.emoji}</li>))}  */}
    </ul>
    </div>
}