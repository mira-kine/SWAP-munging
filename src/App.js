import './App.css';
import Main from './components/Main/Main';
import background from './background.jpeg';

function App() {
  return (
    <main className="background" style={{ backgroundImage: `url(${background})` }}>
      <Main />
    </main>
  );
}

export default App;
