import React, { useState } from 'react';
import axios from 'axios';
import * as S from './styled';
import { useHistory } from 'react-router-dom';
import { UserCard } from '../../components/User-card/UserCard';

function Home() {
  const history = useHistory();
  const [usuario, setUsuario] = useState('');
  const [erro, setErro] = useState(false);
  const [userInfo, setUserInfo] = useState([]);

  async function handleSearchUserInfo() {
    await axios.get(`https://api.github.com/users/${usuario}`).then(response => {
      const userResponse = response.data;
      setUserInfo(userResponse);
    })
  }

  function handleSearch() {
    axios.get(`https://api.github.com/users/${usuario}/repos`).then(response => {
      const repositories = response.data;
      const repositoriesName = [];
      repositories.map((repository) => {
        return repositoriesName.push(repository.name);
      });
      localStorage.setItem('repositoriesName', JSON.stringify(repositoriesName));
      setErro(false);
      history.push('/repositories');
    }).catch(err => {
      setErro(true);
    });
  }
  return (
    <S.HomeContainer>
      <S.Content>
        <S.Title>Pesquise um Repositório do GitHub</S.Title>
        <S.InputContainer>

          <S.Input
            className="usuarioInput"
            placeholder="Usuário"
            value={usuario}
            onChange={event => setUsuario(event.target.value)}
          />
          <S.Button type="button" onClick={/* handleSearch */handleSearchUserInfo}>Pesquisar</S.Button>
        </S.InputContainer>
        {usuario === userInfo.login &&
          <UserCard
            userInfo={userInfo}
            handleSearch={handleSearch}
          />
        }
      </S.Content>
      {erro ? <S.ErrorMsg>Ocorreu um erro</S.ErrorMsg> : ''}
    </S.HomeContainer>

  );
}

export default Home;
