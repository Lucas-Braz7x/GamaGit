import styled from "styled-components";
import { Link } from "react-router-dom";

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
`

export const UserWrapper = styled.div`
  display: flex;
  align-items: center;
  
  gap: 80px
  
`

export const UserAvatar = styled.img`
  border-radius: 50%;
  box-shadow: 0 0 5px #B7B7B7;
  margin-left: 10px;
  cursor: pointer;

  width: 140px;
  height: 140px;

  transition: transform 2s;
  &:hover{
    transform: scale(1.08);
  }
`

export const UserName = styled.h1`
  text-align: center;
  font-size: 2rem;
  font-weight: bold;
  font-family: sans-serif;
  color: #B7B7B7;

  text-shadow: 0 0 4px #B7B7B7;
`

export const UserBio = styled.p`
  text-align: center;
  font-family: sans-serif;
  color: #B7B7B7;
`

export const UserData = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

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

  margin-right: 20px;
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
`

export const LinkRepos = styled(Link)`
  text-decoration: none;
`

export const UserFollowers = styled.div`
  margin-right: 20px;
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

`
export const UserFollowing = styled.div`
  margin-right: 20px;
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
`
