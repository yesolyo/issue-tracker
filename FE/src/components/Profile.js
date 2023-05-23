import styled from 'styled-components';

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

const MyProfile = styled.img`
  border-radius: 50%;
  width: ${(props) => props.width || '25px'};
  height: ${(props) => props.height || '25px'};
`;
