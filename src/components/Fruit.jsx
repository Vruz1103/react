export default function Fruit({name,price,emoji,soldout}){
    // return <div>{emoji}{name}{price}</div>
    // return (<li>{emoji}{name}{price}</li>)
    // return (<div>{price>5?(<li>{emoji}{name}{price}</li>):("")}</div>)
    // return (<>{price>5?(<li>{emoji}{name}{price}</li>):("")}</>)
    return (<><li>{emoji}{name}{price}{soldout?("Sold Out"):("")}</li></>)


} 