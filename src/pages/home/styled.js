import styled, { keyframes } from 'styled-components';

const animate = keyframes`
  0%{opacity: 0;}
  50%{opacity: .5;}
  100%{opacity: 1;}
`

export const Input = styled.input`
  border: 1px solid #ddd;
  border-radius: .25rem 0 0 .25rem;
  height: 1.5rem;
  padding: 0 .5rem;

  &:focus,
  &:active{
    outline: none;
    box-shadow: none;
  }
`;

export const Button = styled.button`
  height: 1.5rem;
  border: 1px solid #000;
  background: #000;
  color: #fff;
  border-radius: 0 .25rem .25rem 0;

  &:focus,
  &:active{
    outline: none;
    box-shadow: none;
  }
`
export const HomeContainer = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: radial-gradient(#b8cbb8 0%, #b8cbb8 0%, #b465da 0%, #cf6cc9 33%, #aa22bf 66%, #aa22bf 100%);
`

export const Content = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space;
  flex-direction: column;

  gap: 30px;
`

export const Title = styled.h1`
  text-shadow: 1px 5px 20px black;
  perspective: 1000;
  animation: ${animate} 3s .3s;
`
export const InputContainer = styled.div`

`
export const ErrorMsg = styled.span`
  display: block;
  font-size: 0.65rem;
  font-weight: bold;
  color: red;
  margin-top: 1rem 
`
