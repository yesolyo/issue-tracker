import styled from 'styled-components';

import { IssueDetailContent } from './IssueDetailContent';
import { Sidebar } from '../newIssue/SideBar';
export const IssueDetailContainer = () => {
  return (
    <MysIssueDetailContainer>
      <IssueDetailContent />
      <Sidebar />
    </MysIssueDetailContainer>
  );
};

const MysIssueDetailContainer = styled.div`
  display: flex;
  width: 1280px;
  margin: 0px auto;
`;
