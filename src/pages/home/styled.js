import styled from 'styled-components';

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
`

export const Content = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
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
