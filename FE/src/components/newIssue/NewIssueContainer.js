import { useContext } from 'react';

import styled from 'styled-components';

import { NewIssueContent } from './NewIssueContent';
import { Sidebar } from './Sidebar';
import { NewIssueContext } from '../../pages/NewIssue';
import { Profile } from '../Profile';
const MyNewIssueContainer = styled.div`
  display: flex;
  width: 1280px;
  justify-content: space-between;
  margin: 0px 0px 20px 0px;
`;
export const NewIssueContainer = () => {
  const issueData = useContext(NewIssueContext);

  const logoInfo = {
    iconType: 'logotypeLarge',
    width: 200,
    height: 40,
    isSmall: false,
    userInfo: issueData?.userInfo
  };

  return (
    <MyNewIssueContainer>
      <Profile isSmall={logoInfo.isSmall} userInfo={logoInfo.userInfo} />
      <NewIssueContent />
      <Sidebar />
    </MyNewIssueContainer>
  );
};
