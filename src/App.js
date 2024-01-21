import {useState} from 'react';
import Name from './components/Name';

function App(){

  const [person, setPerson] = useState('Programmmer')

  function handleChangeName(nome){
    setPerson(nome);
  }

  return(
    <div>
      <h1>Componente App</h1>
      <h2>Hello: {person}</h2>
      <button onClick={ () => handleChangeName ('Mabi')}>
        Change name
      </button>
      
    </div>
  );
}

export default App;

