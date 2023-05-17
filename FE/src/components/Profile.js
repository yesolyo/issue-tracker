import styled from 'styled-components';

export const Profile = ({ isSmall, userInfo }) => {
  const ProfileBox = isSmall ? SmallProfile : LargeProfile;

  return <ProfileBox src={userInfo?.profileUrl} alt={userInfo?.userName} />;
};

const MyProfile = styled.img`
  border-radius: 50%;
`;

const SmallProfile = styled(MyProfile)`
  width: 20px;
  height: 20px;
`;

const LargeProfile = styled(MyProfile)`
  width: 32px;
  height: 32px;
`;
