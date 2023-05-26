import { useContext } from 'react';

import styled from 'styled-components';

import { CommentElements } from './CommentElements';
import { IssueDetailContext } from '../../pages/IssueDetail';

export const IssueDetailContent = () => {
  const issueDetail = useContext(IssueDetailContext);
  const [issueSubInfo, CommentInfo] = issueDetail;

  return (
    <MyIssueDetailContent>
      {CommentInfo &&
        CommentInfo.map((comment) => (
          <CommentElements
            key={comment.userId}
            name={comment.userName}
            profilUrl={comment.userUrl}
            reply={comment.replyContents}
          />
        ))}
    </MyIssueDetailContent>
  );
};

const MyIssueDetailContent = styled.div`
  gap: 20px;
  display: flex;
  flex-direction: column;
  width: 1280px;
  margin: 0px auto;
`;
