import { useEffect, useState } from 'react';
import React from 'react';
import droll from 'droll';

const KeyPad =(props)=>{
    // const diceList = [4,6,8,10,100,12,20]
    const [dieRoll,setDieRoll] = useState('3d20')
    const [rollObj,setRollObj]=useState({total:0,rolls:[]})

    const [d20s,addD20s] = useState(0)

    var value=''

    const rollDie =(die = dieRoll)=>{
        return droll.roll(die)
    }

    const executeRoll = (die=dieRoll)=>{
        var result = rollDie(die)
        setRollObj({
            total:result.total,
            rolls:result.rolls
        })
    }
    const handleClick = ()=>{
        executeRoll('1d100')
    }

    const roll20 = () =>{
        executeRoll('2d20')
    }

    const handleChange = (e) =>{
        // console.log(e.target.value)
        e.preventDefault()
        console.log(e.target.value)
    }

    useEffect(()=>{
        executeRoll()
    },[])

        const showRolls = rollObj.rolls.map((r, n) =>(
            <>
                {r}{n !== rollObj.rolls.length-1 ? ',':'' }
            </>
        ))

    return(
    <>
        <form onSubmit={handleChange}>
            <label>
                <input value={this} type='text'name='nextRoll'/>
            </label>
            <input type='submit' value='Submit'/>
        </form>
        <p>rolls: {showRolls} </p>
        <p>total: {rollObj.total}</p>

        <button
            onClick={roll20}>
            2d20
        </button>
    </>)
}

export default KeyPad;
