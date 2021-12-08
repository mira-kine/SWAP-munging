import './App.css';
import { getPokemon } from './services/pokemon';
import { useEffect, useState } from 'react';

function App() {
  const [pokemon, setPokemon] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getPokemon();
      setPokemon(data.results);
      setLoading(false);
    };
    fetchData();
  }, []);

  return (
    <div className="App">
      <h1>Pokedex</h1>
      {loading && <h1 className="loading">Loading!</h1>}
      {!loading && pokemon.map((poke) => <p key={poke.id}>{poke.pokemon}</p>)}
    </div>
  );
}

export default App;
