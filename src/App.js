import './App.css';
import { useState, useEffect } from 'react';

import NumPad from './Components/NumPad';

const droll = require('droll');

const App=()=>{
  const [rollString, setRollString] = useState('')
  const [resultString, setResultString] = useState(0)
  const [isLoading, setIsLoading] = useState(true)
  const [data, setData]= useState([])
  const baseURL = "https://www.dnd5eapi.co";
  const spellListURL = baseURL + '/api/spells/'

  const [spellIndex, setSpellIndex]= useState([])

  const [spellDictionary, setSpellDictionary] = useState([])
  const [focusSpell, setFocusSpell] = useState([])

  const fetcher=(url,hook)=>{
    fetch(url)
      .then((res) => res.json())
      .then((json) => hook(json['results']))
      .catch((error)=> console.log(error))
  }

  useEffect(()=>{
    // getSpells()
    fetch(spellListURL+'zone-of-truth')
      .then((res)=> res.json())
      .then((json)=>setFocusSpell(json))
      .catch((error)=> console.log(error))

    console.log('activated')
    console.log(focusSpell.desc)
    fetcher(spellListURL, setSpellIndex)

    // spellIndex.map(item =>
    //   console.log(item.url)


    // )
    // console.log(focusSpell)
  },[]);

  useEffect(()=>{
    if (spellIndex.length !== 0){
      setIsLoading(false)
    }
    // console.log(spellIndex)
  },[spellIndex])

  const doARoll=()=>{
    let result = droll.roll(rollString).total
    setResultString(result)

  }
  useEffect(()=>{
    doARoll();
  },[rollString])


  return (
    <div className="App">
      {/* <header className="App-header">

        <p>
          {resultString}
        </p>
        <NumPad setRollString={setRollString} rollString={rollString}/>
      </header> */}
      {isLoading ? (
        <h1>Loading...</h1>
      ):(
        spellIndex.map((spell) => (
          <>
            <p>{spell.url}</p>
          </>
        ))
      )}
    </div>
  );
}

export default App;
