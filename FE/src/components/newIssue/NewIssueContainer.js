import { useContext } from 'react';

import styled from 'styled-components';

import { NewIssueContent } from './NewIssueContent';
import { Sidebar } from './Sidebar';
import { NewIssueContext } from '../../pages/NewIssue';
import { Profile } from '../Profile';

export const NewIssueContainer = ({
  titleValue,
  titleSetValue,
  commentSetValue,
  assigneeSetValue,
  labelSetValue,
  commentValue,
  milestoneSetValue
}) => {
  const issueData = useContext(NewIssueContext);

  return (
    <MyNewIssueContainer>
      <Profile isLarge userInfo={issueData?.userInfo} />
      <NewIssueContent
        titleValue={titleValue}
        titleSetValue={titleSetValue}
        commentValue={commentValue}
        commentSetValue={commentSetValue}
      />
      <Sidebar
        assigneeSetValue={assigneeSetValue}
        labelSetValue={labelSetValue}
        milestoneSetValue={milestoneSetValue}
      />
    </MyNewIssueContainer>
  );
};

const MyNewIssueContainer = styled.div`
  display: flex;
  width: 1280px;
  justify-content: space-between;
  margin: 0px 0px 20px 0px;
`;
