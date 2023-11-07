import {useState} from "react";
import './Counter.scss';

export const Counter = () => {
    const [count, setCount] = useState(0);

    return <div>
        <p>Counter component</p>
        <p>{count}</p>
        <button onClick={()=> setCount((value)=>value+1)}>+</button>
        <button onClick={()=> setCount((value)=>value-1)}>-</button>
    </div>
}
