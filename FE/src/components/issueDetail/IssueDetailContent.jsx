import { useContext, useState } from 'react';

import styled from 'styled-components';

import { CommentElements } from './CommentElements';
import { IssueDetailContext } from '../../pages/IssueDetail';
import { TextArea } from '../textForm/TextArea';

export const IssueDetailContent = () => {
  const issueDetail = useContext(IssueDetailContext);
  const [issueSubInfo, CommentInfo] = issueDetail;
  const [comment, SetComment] = useState('');
  const commentInput = {
    label: '코멘트를 입력하세요.',
    size: 's',
    value: comment,
    setValue: SetComment
  };
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
      <TextArea {...commentInput} />
    </MyIssueDetailContent>
  );
};

const MyIssueDetailContent = styled.div`
  gap: 20px;
  display: flex;
  flex-direction: column;
  width: 938px;
  margin: 0px auto;
  & div {
    :last-child {
      align-items: flex-start;
    }
  }
`;
