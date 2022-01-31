import './App.css';
import pokemons from './data';
import Pokedex from './Pokedex';

function App() {
  return (
    <main>
      <h1>Pokedex</h1>
         <Pokedex pokemon={ pokemons } />
    </main>
  
  );
}
export default App;
