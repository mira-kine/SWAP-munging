import React from 'react';
import './PokeList.css';
// import { useState, useEffect } from 'react';

export default function PokeList({ pokemon }) {
  return (
    <div className="container">
      <div className="poke-card">
        {pokemon.map((poke) => (
          <p key={poke.id}>
            <span>{poke.pokemon}</span>
            <span>{poke.type_1}</span>
            <img src={poke.url_image} />
          </p>
        ))}
      </div>
    </div>
  );
}
