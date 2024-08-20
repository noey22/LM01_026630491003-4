import {useState} from 'react';
import { sculptureList } from './myPetForm';

export default function Gallery() {
    const [index, setlndex] = useState(0);
    function handleClick(){
        setlndex(index+1);
    }
    function handleClickBack(){
        setlndex(index-1);
    }
    let sculpture = sculptureList[index];
    return(
        <>
          <button onClick={handleClick} disabled={index === sculptureList.length -1}>
            Next
          </button>
          <h2>
            <i>{sculpture.name}</i>{sculpture.pettype}
          </h2>
          <h3>
            ({index+1} of {sculptureList.length})
          </h3>
          <img
            src={sculpture.picture}
            alt={sculpture.detail}
          />
          <button onClick={handleClickBack} disabled ={index === 0}>
            Back
          </button>
        </>
    )
}