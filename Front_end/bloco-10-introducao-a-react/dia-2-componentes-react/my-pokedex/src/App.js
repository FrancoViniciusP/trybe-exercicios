import './App.css';
import pokemons from './data';
import Pokemon from './pokemon';

function App() {
    return (  
      
      <ul>{pokemons.map(({ name, type, image, averageWeight:{ value, measurementUnit }}) => 
        <li>
          <strong>{name}</strong> <br></br>
          {type} <br></br>
          {value} {measurementUnit} <br></br>

        </li>
        )}

      </ul>
    );
  }

    
export default App;
