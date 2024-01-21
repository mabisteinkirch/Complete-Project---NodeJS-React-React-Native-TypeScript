import {useState} from 'react';

function App(){
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [email, setEmail] = useState('');
  const [user, setUser] = useState({});

  function handleRegister (e){
    e.preventDefault();
    alert ('Usuário registrado com sucesso')
    setUser({
      name: name,
      age: age,
      email: email,
    })
  }

  return(
    <div>
      <form onSubmit={handleRegister}>
        <label>Name: </label>
        <input placeholder="Digite seu nome" value={name} onChange={(e) => setName(e.target.value)}/> <br/>

        <label>Age: </label>
        <input placeholder="Digite sua idade" value={age} onChange={(e) => setAge(e.target.value)}/> <br/>

        <label>Email: </label>
        <input placeholder="Digite seu email" value={email} onChange={(e) => setEmail(e.target.value)}/> <br/>

       <button type="submit">Register</button>
      </form>
      <br/><br/>
      <div>
        <span>You are welcome {user.name}</span><br/>
        <span>Age: {user.age}</span><br/>
        <span>Email:  {user.email}</span><br/>
      </div> 
    </div>
  );
}
export default App;

