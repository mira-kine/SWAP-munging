import React from 'react';
import { useState, useEffect } from 'react';
import { getPokemon } from '../../services/pokemon';
import PokeList from '../PokeList/PokeList';
import UserInput from '../UserInput/UserInput';

export default function Main() {
  const [pokemon, setPokemon] = useState([]);
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const data = await getPokemon(query);
      setPokemon([...data.results]);
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    };
    if (loading) {
      fetchData();
    }
  }, [loading, query]);

  return (
    <div className="App">
      <h1>Pokedex</h1>
      {loading && <span className="loader">!</span>}
      {!loading && (
        <>
          <UserInput
            query={query}
            setQuery={setQuery}
            setLoading={setLoading}
            setPokemon={setPokemon}
          />
          <PokeList pokemon={pokemon} />
        </>
      )}
    </div>
  );
}
