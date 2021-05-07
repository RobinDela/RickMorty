import { useState, useEffect } from 'react';
import axios from 'axios';
import './RickGallery.css';

function RickGallery() {
  const [characters, setCharacters] = useState(['Mister Meeseek', 'PoopyHole']);
  useEffect(
    () =>
      axios
        .get('https://rickandmortyapi.com/api/character')
        .then(({ data }) => {
          console.log(data.results[0]);
          setCharacters(data.results);
        }),
    []
  );

  return (
    <>
      <h2>Personnages</h2>
      <ul className='charList'>
        <div className='Gallery'>
          {characters.map((character) => {
            return (
              <li>
                <h3>{character.name}</h3>
                <img src={character.image} alt='' />
              </li>
            );
          })}
        </div>
      </ul>
    </>
  );
}

export default RickGallery;
