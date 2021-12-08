import './App.css';
import { getPokemon } from './services/pokemon';
import { useEffect, useState } from 'react';
import PokeList from './components/PokeList/PokeList';

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
    if (loading) {
      fetchData();
    }
  }, [loading]);

  return (
    <div className="App">
      <h1>Pokedex</h1>
      {loading && <span className="loader">!</span>}
      {!loading && (
        <>
          <PokeList {...{ pokemon }} />
        </>
      )}
    </div>
  );
}

export default App;
