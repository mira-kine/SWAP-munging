import React from 'react';
import { useState, useEffect } from 'react';
import { getPokemon, getTypes } from '../../services/pokemon';
import PokeList from '../PokeList/PokeList';
import UserInput from '../UserInput/UserInput';
import './Main.css';
import Graph from '../Graph/Graph';
import { getCount } from '../../services/pokemon';

export default function Main() {
  const [pokemon, setPokemon] = useState([]);
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState('');
  const [page, setNextPage] = useState(1);
  const [order, setOrder] = useState('');
  const [type, setType] = useState([]);
  const [selectedType, setSelectedType] = useState('all');
  const [count, setCount] = useState([]);

  useEffect(() => {
    let timer;
    const fetchData = async () => {
      const data = await getPokemon(query, page, order, selectedType);
      setPokemon(data.results);
      timer = setTimeout(() => {
        setLoading(false);
      }, 1500);
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
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getCount();
      setCount(data);
    };
    if (loading) {
      fetchData();
    }
  }, [count, setCount, loading]);

  return (
    <div className="main">
      <h1 className="header">Pokedex</h1>
      {loading && <span className="loader"></span>}
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
      <Graph count={count} pokemon={pokemon} type={type} />
    </div>
  );
}
