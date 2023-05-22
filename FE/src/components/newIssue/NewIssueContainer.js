import { useContext } from 'react';

import styled from 'styled-components';

import { NewIssueContent } from './NewIssueContent';
import { Sidebar } from './Sidebar';
import { NewIssueContext } from '../../pages/NewIssue';
import { Profile } from '../Profile';

export const NewIssueContainer = () => {
  const issueData = useContext(NewIssueContext);

  return (
    <MyNewIssueContainer>
      <Profile isLarge userInfo={issueData?.userInfo} />
      <NewIssueContent />
      <Sidebar />
    </MyNewIssueContainer>
  );
};

const MyNewIssueContainer = styled.div`
  display: flex;
  width: 1280px;
  justify-content: space-between;
  margin: 0px 0px 20px 0px;
`;
