import './App.css';
import { getPokemon } from './services/pokemon';
import { useEffect, useState } from 'react';

function App() {
  const [pokemon, setPokemon] = useState([]);
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const data = await getPokemon();
      setPokemon(data.results);
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    };
    fetchData();
  }, []);

  return (
    <div className="App">
      <h1>Pokedex</h1>
      {loading && <span className="loader">!</span>}
      {!loading && pokemon.map((poke) => <p key={poke.id}>{poke.pokemon}</p>)}
    </div>
  );
}

export default App;
