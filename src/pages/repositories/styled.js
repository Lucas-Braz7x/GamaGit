import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  width: 100%;
  height: auto;

  margin-top: -25px;
  padding: 0;
  background: radial-gradient(#b8cbb8 0%, #b8cbb8 0%, #b465da 0%, #cf6cc9 33%, #aa22bf 66%, #aa22bf 100%);
  overflowY: hidden;
`

export const Title = styled.h1`
  text-align: center;
  font-size: 2rem;
  font-family: sans-serif;
  color: #333;
  padding: 25px
`;

export const List = styled.ul`
  list-style: none;
  padding: none;
  font-family: sans-serif;
`;

export const ListItem = styled.li`
  margin: .5rem 0;
  background: #000;
  color: #fff;
  padding: .5rem;

  transition: transform 2s;

  &:hover{
    transform: scale(1.1);
  }
`;

export const Content = styled.div`
  width: 100%;
  max-width: 991px;
  margin: 0 auto; 

`;

export const LinkHome = styled(Link)`
  display: block;
  width: 4rem;
  text-align: center;
  margin: 0 auto;
  background: #000;
  padding: 5px 0;
  color: white;
  text-decoration: none;


  transition: transform 2s;

  &:hover{
    transform: scale(1.1);
  }

`