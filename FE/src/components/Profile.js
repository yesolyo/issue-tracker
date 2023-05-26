import styled from 'styled-components';

import { colors } from '../styles/color';

export const Profile = ({ isLarge, width, height, userInfo }) => {
  return (
    <MyProfile
      width={isLarge ? 40 : width}
      height={isLarge ? 40 : height}
      src={userInfo?.profileUrl}
      alt={userInfo?.name}
    />
  );
};

const MyProfile = styled.img`
  border-radius: 50%;
  width: ${(props) => props.width || '30px'};
  height: ${(props) => props.height || '30px'};
  background-color: ${colors.gray50};
`;
