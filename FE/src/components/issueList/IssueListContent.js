import { useContext } from 'react';

import styled from 'styled-components';

import { IssueItem } from './IssueItem';
import { IssueListContext } from '../../pages/IssueList';
import { colors } from '../../styles/color';

const MyIssueListContent = styled.div`
  > div:not(:last-child) {
    border-bottom: 1px solid ${colors.gray300};
  }

  > div:last-child {
    border-radius: 0px 0px 16px 16px;
  }
`;

export const IssueListContent = () => {
  const issueData = useContext(IssueListContext);
  const issueListData = issueData.issueList;

  return (
    <MyIssueListContent>
      {issueListData?.map((issueData) => (
        <IssueItem key={issueData.id} {...issueData} />
      ))}
    </MyIssueListContent>
  );
};
