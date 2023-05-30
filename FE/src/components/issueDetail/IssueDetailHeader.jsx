import { useContext, useEffect, useState } from 'react';

import styled from 'styled-components';

import { IssueDetailContext } from '../../pages/IssueDetail';
import { colors } from '../../styles/color';
import { getTimeElapsed } from '../../utils/timeElapsed';
import { Button } from '../button/Button';
import { LabelTag } from '../LabelTag';
import { PageHeader } from '../PageHeader';

export const IssueDetailHeader = () => {
  const issueDetail = useContext(IssueDetailContext);
  const [issueSubInfo, CommentInfo] = issueDetail;
  const [isEdit, setIsEdit] = useState(false);
  const [isClose, setIsClose] = useState(false);
  const [titleData, setTitleData] = useState(null);

  const handleEdit = () => {
    setIsEdit(true);
    setTitleData(`${issueSubInfo?.title}`);
  };

  const handleCloseIssue = () => {
    setIsClose(true);
  };

  const pageHeaderInfo = {
    leftChild: issueSubInfo?.title,
    middleChild: `#${issueSubInfo?.id}`,
    value: isEdit
  };

  const editBtn = [
    {
      id: 1,
      size: 's',
      color: 'outlineBlue',
      iconType: 'edit',
      iconWidth: '12',
      buttonText: '제목 편집',
      onClick: handleEdit
    },
    {
      id: 2,
      size: 's',
      color: 'outlineBlue',
      iconType: 'archive',
      iconWidth: '12',
      buttonText: '이슈 닫기',
      onClick: handleCloseIssue
    }
  ];
  const labelTagBtn = {
    tagType: isClose ? 'close' : 'open',
    hasIcon: true,
    icon: 'archive',
    text: isClose ? '닫힌 이슈' : '열린 이슈'
  };

  return (
    <MyIssueDetailHeader>
      <PageHeader
        leftChild={pageHeaderInfo.leftChild}
        middleChild={pageHeaderInfo.middleChild}
        rigthChild={
          <>
            {editBtn.map((edit) => (
              <Button
                key={edit.id}
                size={edit.size}
                color={edit.color}
                iconType={edit.iconType}
                iconWidth={edit.iconWidth}
                isIcon
                buttonText={edit.buttonText}
                isLeftPosition
                onClick={edit.onClick}
              />
            ))}
          </>
        }
        value={isEdit}
        inputValue={titleData}
        inputSetValue={setTitleData}
      />
      <SubHeader>
        <LabelTag {...labelTagBtn} />
        <p>
          이 이슈가 {getTimeElapsed(issueSubInfo?.createTime)}에{' '}
          {issueSubInfo?.author.name}님에 의해 열렸습니다. * 코멘트{' '}
          {CommentInfo?.length}개
        </p>
      </SubHeader>
    </MyIssueDetailHeader>
  );
};

const MyIssueDetailHeader = styled.div`
  width: 1280px;
  margin: 0 auto;
  border-bottom: 1px solid ${colors.gray400};
  padding-bottom: 25px;
`;
const SubHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding-left: 25px;
  & p {
    color: ${colors.gray600};
  }
`;
