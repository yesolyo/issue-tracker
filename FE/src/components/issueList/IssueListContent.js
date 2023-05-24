import { useContext } from 'react';

import styled from 'styled-components';

import { IssueItem } from './IssueItem';
import { IssueListContext } from '../../pages/IssueList';
import { colors } from '../../styles/color';

export const IssueListContent = () => {
  const { state } = useContext(IssueListContext);
  const issueListData = state.issueList;

  return (
    <MyIssueListContent>
      {issueListData?.map((issueData) => (
        <IssueItem key={issueData.id} {...issueData} />
      ))}
    </MyIssueListContent>
  );
};

const MyIssueListContent = styled.div`
  > div:not(:last-child) {
    border-bottom: 1px solid ${colors.gray300};
  }

  > div:last-child {
    border-radius: 0px 0px 16px 16px;
  }
`;
