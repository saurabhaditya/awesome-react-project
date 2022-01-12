import {useState} from "react";

export default function Square({value, handleClick}) {
    console.log(value);
    return <button className="square"
            onClick={handleClick}>
        {value}
    </button>


}

let isX = true;
