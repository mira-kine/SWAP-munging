import React from 'react';
// import { useState, useEffect } from 'react';

export default function PokeList({ pokemon }) {
  return (
    <div>
      {pokemon.map((poke) => (
        <p key={poke.id}>
          {poke.pokemon}
          {poke.type}
        </p>
      ))}
    </div>
  );
}
