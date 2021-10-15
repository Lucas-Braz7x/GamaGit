import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";

const animate = keyframes`
  0%{opacity: 0;}
  50%{opacity: .5;}
  100%{opacity: 1;}
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  
  width: 50%;
  max-width: 100wv;
  margin-top: 30px;
  
  box-shadow: 0 0 10px #000;
  border-radius: 30px;
  
  background: #0C0B0B;

  padding: 10px;
  box-sizing: border-box;

  transition: transform 2s;
  &:hover{
    transform: scale(1.08)
  }

  animation: ${animate} 3s .2;
`

export const UserWrapper = styled.div`
  display: flex;
  align-items: center;
  
  gap: 80px;

  @media(max-width: 670px){
    gap: 60px;
  }
  @media(max-width: 630px){
    gap: 40px;
  }
  @media(max-width: 590px){
    gap: 30px;
  }
  @media(max-width: 470px){
    flex-direction: column;
    gap: 10px;
   }
`

export const UserAvatar = styled.img`
  border-radius: 50%;
  box-shadow: 0 0 5px #B7B7B7;
  cursor: pointer;

  width: 140px;
  height: 140px;

  transition: transform 2s;
  &:hover{
    transform: scale(1.08);
  }

  @media(max-width: 815px){
    width:  100px;
    height: 100px;
   }
   @media(max-width: 590px){
    width:  80px;
    height: 80px;
   }
  
`

export const UserName = styled.h1`
  text-align: center;
  font-size: 2rem;
  font-weight: bold;
  font-family: sans-serif;
  color: #B7B7B7;

  text-shadow: 0 0 4px #B7B7B7;

  @media(max-width: 920px){
   font-size: 1.8rem; 
  }
  @media(max-width: 880px){
    font-size: 1.5rem; 
   }
   @media(max-width: 815px){
    font-size: 1.2rem; 
   }
   @media(max-width: 590px){
    font-size: 0.9rem;
   }
`

export const UserBio = styled.p`
  text-align: center;
  font-family: sans-serif;
  color: #B7B7B7;

  width: 100%;
  @media(max-width: 790px){
    font-size: 0.9rem; 
   }
   @media(max-width: 470px){
    font-size: 0.75rem; 
   }
`

export const UserData = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;

  @media(max-width: 780px){
    flex-direction:  column;
   }

`
export const UserParagraphy = styled.p`
  font-family: sans-serif;
  text-align: center;
  color: #B7B7B7;
  margin: 0;
  padding: 0
`
export const UserDataNumber = styled.p`
  margin: 0;
  padding: 0;
  color: #B7B7B7;
  font-size: 1.5rem;
  font-weight: bold;
  text-shadow: 0 0 3px #B7B7B7;
  text-align: center;
`

export const UserProjects = styled.div`
  border: 1px solid #000;
  background: #046313;
  border-radius: 8px;
  width: 80px;
  padding: 5px;

  transition: transform 1s;
  &:hover{
    transform: scale(1.08);
    cursor: pointer;
  }  

  @media(max-width: 780px){
    width: 80%;
    margin-right: 0;
   }
`

export const LinkRepos = styled(Link)`
  text-decoration: none;
`

export const UserFollowers = styled.div`
  border: 1px solid #000;
  background: #044A7D;
  border-radius: 8px;
  width: 80px;
  padding: 5px;

  transition: transform 1s;
  &:hover{
    transform: scale(1.08);
    cursor: pointer;
  }

  @media(max-width: 780px){
    width: 80%;
    margin-right: 0;
   }
`
export const UserFollowing = styled.div`
  border: 1px solid #000;
  background: #725200;
  border-radius: 8px;
  width: 80px;
  padding: 5px;

  transition: transform 1s;
  &:hover{
    transform: scale(1.08);
    cursor: pointer;
  }
  @media(max-width: 780px){
    width: 80%;
    margin-right: 0;
   }
`
