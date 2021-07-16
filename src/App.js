import React, {useState} from 'react';
import axios from 'axios';
import './App.css';

function App(props /* propriedades */) {
  const [usuario, setUsuario] = useState('');
  
  function handleSearch(){
    axios.get(`https://api.github.com/users/${usuario}/repos`).then(response => console.log(response.data));
  }
  return (

    <>
      <p>{usuario}</p>
      <input className="usuarioInput" placeholder="Usuário" value={usuario} onChange={event => setUsuario(event.target.value)} />
      <button type="button" onClick={handleSearch}>Pesquisar</button>
    </>
  );
}

export default App;
