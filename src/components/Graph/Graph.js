import React from 'react';
import { VictoryBar, VictoryChart } from 'victory';

export default function Graph({ count, pokemon, type }) {
  return (
    <div>
      <div className="graph-container">
        {pokemon.map((poke) => (
          <div key={poke.id}>
            <span>{poke.count}</span>
          </div>
        ))}
      </div>
      <VictoryChart>
        <VictoryBar type={type} x={parseInt(count)} />
      </VictoryChart>
    </div>
  );
}
