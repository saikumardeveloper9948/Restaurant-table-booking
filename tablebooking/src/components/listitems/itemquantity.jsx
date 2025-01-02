import React from "react";

const ProductCount =(props)=> {
    const [count, setCount] = React.useState(1);

 const increment=()=>{
        setCount(count+1)
    }
    const decrement=()=>{
        setCount(count-1)
    }
    

        return (
            <span className="flex ">
                <button onClick={increment} disabled={count===15} className="bg-green-300 rounded-2xl px-2 "><b >+</b></button>
                <p className="px-2 my-auto ">{count}</p>
               <button onClick={decrement} disabled={count===1} className="bg-green-300 px-2 rounded-2xl"><b >-</b></button>
            </span>
        )
    
}
export default ProductCount;