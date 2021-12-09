import React from 'react';
import './PokeList.css';
import 'animate.css';

export default function PokeList({ pokemon, setLoading, setNextPage }) {
  const handleNext = () => {
    setLoading(true);
    setNextPage((prevState) => ++prevState);
  };
  const handlePrev = () => {
    setLoading(true);
    setNextPage((prevState) => --prevState);
  };

  return (
    <>
      <button className="next" onClick={handleNext}>
        Next Page
      </button>
      <button className="previous" onClick={handlePrev}>
        Previous Page
      </button>
      <div className="animate__animated animate__fadeInDown animate__slower">
        <div>
          {pokemon.map((poke) => (
            <div key={poke.id} className="poke-card">
              <img src={poke.url_image} />
              <span>name: {poke.pokemon}</span>
              <span>type: {poke.type_1}</span>
              <span>generation: {poke.generation_id}</span>
              <span>attack: {poke.attack}</span>
              <span>defense: {poke.defense}</span>
              <span>hp: {poke.hp}</span>
            </div>
          ))}
          <button className="next" onClick={handleNext}>
            Next Page
          </button>
          <button className="previous" onClick={handlePrev}>
            Previous Page
          </button>
        </div>
      </div>
    </>
  );
}
