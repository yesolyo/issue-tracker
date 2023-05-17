import { useContext } from 'react';

import styled from 'styled-components';

import { Profile } from './Profile';
import { Icon } from '../assets/Icon';
import { IssueListContext } from '../pages/IssueList';

export const Header = () => {
  const issueData = useContext(IssueListContext);
  const userInfo = issueData.userInfo;
  const largeLogoIcon = {
    iconType: 'logotypeLarge',
    width: 200,
    height: 40
  };
  const isSmall = false;

  return (
    <MyHeader>
      <Icon {...largeLogoIcon} />
      <Profile isSmall={isSmall} userInfo={userInfo} />
    </MyHeader>
  );
};

const MyHeader = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 25px 25px;
`;
