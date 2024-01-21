import {useState} from 'react';
import Name from './components/Name';

function App(){

  const [person, setPerson] = useState('Programmmer')


  return(
    <div>
      <h1>Componente App</h1>
      <h2>Hello: {person}</h2>
      <Name person="Mabi" />
    </div>
  );
}

export default App;

