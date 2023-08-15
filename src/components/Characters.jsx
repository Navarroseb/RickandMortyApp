import React, {useContext} from 'react'
import { CharactersContext } from '../context/charactersContext'

const Characters = () => {
    const test = useContext(CharactersContext);
  return (
    <div className='row'>
        <div className="col-4">
            <h2>{test}</h2>
            <p>Image</p>
        </div>
    </div>
  )
}

export default Characters