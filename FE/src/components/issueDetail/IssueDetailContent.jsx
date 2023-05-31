import { useContext, useEffect, useState } from 'react';

import styled from 'styled-components';

import { CommentElements } from './CommentElements';
import { IssueDetailContext } from '../../pages/IssueDetail';
import { fontSize } from '../../styles/font';
import { Button } from '../button/Button';
import { TextArea } from '../textForm/TextArea';

export const IssueDetailContent = () => {
  const issueDetail = useContext(IssueDetailContext);
  const [issueSubInfo, CommentInfo, userData] = issueDetail;
  const [comment, SetComment] = useState('');
  const [saveComment, setSaveComment] = useState([]);

  useEffect(() => {
    setSaveComment(CommentInfo);
  }, [CommentInfo]);

  const handleSaveComment = () => {
    setSaveComment([
      ...saveComment,
      {
        userId: userData.userInfo?.id,
        userName: userData.userInfo?.name,
        userUrl: userData.userInfo?.profileUrl,

        createTime: Date.now(),
        replyContents: comment
      }
    ]);

    SetComment('');
  };
  console.log(saveComment);
  const commentInput = {
    label: '코멘트를 입력하세요.',
    size: 's',
    value: comment,
    setValue: SetComment
  };

  const addComment = {
    size: 's',
    color: 'containerBlue',
    isIcon: true,
    iconWidth: 11,
    buttonText: '코멘트 작성',
    iconType: 'plus',
    disabled: comment.length < 1,
    isLeftPosition: true,
    onClick: handleSaveComment
  };

  return (
    <MyIssueDetailContent>
      {saveComment &&
        saveComment.map(
          ({ userId, userName, userUrl, createTime, replyContents }, index) => (
            <CommentElements
              key={index}
              authorInfo={{
                id: userData.userInfo?.id,
                name: userData.userInfo?.name
              }}
              userInfo={{
                id: userId,
                name: userName,
                profileUrl: userUrl
              }}
              createTime={createTime}
              reply={replyContents}
            />
          )
        )}
      <TextArea {...commentInput} />
      <Button {...addComment} />
    </MyIssueDetailContent>
  );
};

const MyIssueDetailContent = styled.div`
  gap: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  > button {
    justify-content: center;
    ${fontSize.S};
  }
  & div {
    :last-child {
      align-items: flex-start;
    }
  }
`;
