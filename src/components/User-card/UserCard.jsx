import * as SC from './styled';

export const UserCard = ({userInfo, handleSearch}) => {
  return(
    <SC.Container>
      <SC.UserWrapper>
        <SC.UserAvatar src={userInfo.avatar_url} alt="" /> 
        <SC.UserName>{userInfo.login}</SC.UserName> 
      </SC.UserWrapper>
        <SC.UserBio><strong>Descrição:</strong> {userInfo.bio}</SC.UserBio> 
        <SC.UserData>
          <SC.UserProjects onClick={handleSearch}>
            <SC.UserParagraphy>Projetos</SC.UserParagraphy>
            <SC.UserDataNumber>{userInfo.public_repos}</SC.UserDataNumber>
          </SC.UserProjects>

          <SC.UserFollowers>
            <SC.UserParagraphy>Seguidores</SC.UserParagraphy>      
            <SC.UserDataNumber>{userInfo.followers}</SC.UserDataNumber>
          </SC.UserFollowers>
          
          <SC.UserFollowing>
            <SC.UserParagraphy>Seguindo</SC.UserParagraphy>      
            <SC.UserDataNumber>{userInfo.following}</SC.UserDataNumber>
          </SC.UserFollowing>
        </SC.UserData>
    </SC.Container>
    )
}