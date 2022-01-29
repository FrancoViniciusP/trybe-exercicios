import './App.css';
import pokemons from './data';
import Pokedex from './Pokedex';

function App() {
  return (
    <main>
         <Pokedex pokemon={ pokemons } />
    </main>
  
  );
}
export default App;
