import React from "react";
const droll = require('droll');



const NumPad =(props)=>{

    const handleClick=()=>{
        console.log('CLICK')
        props.setRollString('2d20')
        console.log(droll.roll(props.rollString).total)
    }

    return(
        <>
        <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={handleClick}
        >
            <p>2d20</p>

        </button>
        </>
    )
}

export default NumPad
