import { Box,Stack } from "@mui/material";
import { useEffect, useState } from "react";

function App() {
  const[input,setInput]=useState('');
  const[dictionary,setDictionary]=useState("");
     const data = 
    [

    { word: "React", meaning: "A JavaScript library for building user interfaces." },

    { word: "Component", meaning: "A reusable building block in React." },

    { word: "State", meaning: "An object that stores data for a component." }

     ]
     const handleChange=(e)=>{
      setInput(e.target.value);
     }
     const handleClick=()=>{
      // data.filter(obj => obj.word===input && (showValue=obj.meaning));
      const match = data.find(obj=>obj.word.toLowerCase()===input.toLowerCase());
      if(match){
        setDictionary(match.meaning);
      }else{
            setDictionary("Word not found in the dictionary.");
      }
      // console.log(data,showValue);
     }
  return (
    <Stack width={'40%'} padding={'10px'}>
      <h1>Dictionary App</h1>
      <Box>
      <input type="text" placeholder="Search for a word..." style={{padding:"5px"}} onChange={(e)=>handleChange(e)}/>
      <button onClick={handleClick}>Search</button>
      </Box>
      <h3>Definition:</h3>
      <p>{dictionary}</p>
    </Stack>
  );
}

export default App;
