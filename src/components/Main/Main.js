import React from 'react';
import { useState, useEffect } from 'react';
import { getPokemon } from '../../services/pokemon';
import PokeList from '../PokeList/PokeList';
import UserInput from '../UserInput/UserInput';

export default function Main() {
  const [pokemon, setPokemon] = useState([]);
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [order, setOrder] = useState('');

  useEffect(() => {
    let timer;
    const fetchData = async () => {
      const data = await getPokemon(query, page, order);
      setPokemon([...data.results]);
      timer = setTimeout(() => {
        setLoading(false);
      }, 2000);
    };
    if (loading) {
      fetchData();
    }
    return () => {
      clearInterval(timer);
    };
  }, [loading, query, page, order]);

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
            setOrder={setOrder}
          />
          <PokeList pokemon={pokemon} setPage={setPage} setLoading={setLoading} />
        </>
      )}
    </div>
  );
}
