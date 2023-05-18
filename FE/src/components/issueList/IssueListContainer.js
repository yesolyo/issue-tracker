import styled from 'styled-components';

import { IssueListContent } from './IssueListContent';
import { IssueListHeader } from './IssueListHeader';

const MyIssueListContainer = styled.div`
  border: 1px solid #d9dbe9;
  border-radius: 16px;
`;

export const IssueListContainer = () => {
  return (
    <MyIssueListContainer>
      <IssueListHeader />
      <IssueListContent />
    </MyIssueListContainer>
  );
};
