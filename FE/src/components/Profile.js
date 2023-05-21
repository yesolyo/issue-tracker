import styled from 'styled-components';

const MyProfile = styled.img`
  border-radius: 50%;
  width: ${(props) => props.width || '20px'};
  height: ${(props) => props.height || '20px'};
`;

export const Profile = ({ isLarge, width, height, userInfo }) => {
  return (
    <MyProfile
      width={isLarge ? 32 : width}
      height={isLarge ? 32 : height}
      src={userInfo?.profileUrl}
      alt={userInfo?.name}
    />
  );
};
