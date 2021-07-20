import React, {useState} from 'react';
import axios from 'axios';
import * as S from './styled';

function Home(props /* propriedades */) {
  const [usuario, setUsuario] = useState('');
  
  function handleSearch(){
    axios.get(`https://api.github.com/users/${usuario}/repos`).then(response => console.log(response.data));
  }
  return (

    <S.Container>
      <p>{usuario}</p>
      <S.Input className="usuarioInput" placeholder="Usuário" value={usuario} onChange={event => setUsuario(event.target.value)} />
      <S.Button type="button" onClick={handleSearch}>Pesquisar</S.Button>
    </S.Container>
  );
}

export default Home;
