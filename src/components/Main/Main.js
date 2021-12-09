import React from 'react';
import { useState, useEffect } from 'react';
import { getPokemon, getTypes } from '../../services/pokemon';
import PokeList from '../PokeList/PokeList';
import UserInput from '../UserInput/UserInput';

export default function Main() {
  const [pokemon, setPokemon] = useState([]);
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState('');
  const [page, setNextPage] = useState(1);
  const [order, setOrder] = useState('');
  const [type, setType] = useState([]);
  const [selectedType, setSelectedType] = useState('all');

  useEffect(() => {
    let timer;
    const fetchData = async () => {
      const data = await getPokemon(query, page, order, selectedType);
      setPokemon(data.results);
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
  }, [loading, query, page, order, selectedType]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getTypes();
      setType(data);
      setLoading(false);
    };
    if (loading) {
      fetchData();
    }
  }, [loading]);

  return (
    <div className="Main">
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
            type={type}
            selectedType={selectedType}
            setSelectedType={setSelectedType}
          />
          <PokeList pokemon={pokemon} setNextPage={setNextPage} setLoading={setLoading} />
        </>
      )}
    </div>
  );
}
