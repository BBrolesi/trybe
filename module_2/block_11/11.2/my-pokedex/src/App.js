import logo from './logo.svg';
import './App.css';
import Pokedex from './Pokedex'
import pokemons from './data'

function App() {
  return (
    <main className='App'>
    <Pokedex pokemons={pokemons} />
    </main>
  );
}

export default App;
