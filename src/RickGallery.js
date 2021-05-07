import { useState } from 'react';
import './RickGallery.css';

function RickGallery() {
  const [characters] = useState(['Mister Meeseek', 'PoopyHole']);
  return (
    <>
      <h2>Personnages</h2>
      <ul className='charList'>
        {characters.map((character) => {
          return <li>{character}</li>;
        })}
      </ul>
    </>
  );
}

export default RickGallery;
