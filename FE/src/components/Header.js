import { useContext } from 'react';

import styled from 'styled-components';

import { Profile } from './Profile';
import { Icon } from '../assets/Icon';
import { IssueListContext } from '../pages/IssueList';

const MyHeader = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 25px 25px;
`;

export const Header = ({ text }) => {
  const issueData = useContext(IssueListContext);
  const logoInfo = {
    iconType: 'logotypeLarge',
    width: 200,
    height: 40,
    isSmall: false,
    userInfo: issueData.userInfo
  };

  return (
    <MyHeader>
      {text
        ? (
          { text }
        )
        : (
          <>
            <Icon {...logoInfo} />
            <Profile isSmall={logoInfo.isSmall} userInfo={logoInfo.userInfo} />
          </>
        )}
    </MyHeader>
  );
};
