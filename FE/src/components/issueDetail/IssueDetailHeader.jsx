import { useContext } from 'react';

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

  const pageHeaderInfo = {
    leftChild: `FE 이슈트래커 디자인 시스템 구현`,
    middleChild: `#${issueSubInfo?.id}`
  };

  const editBtn = [
    {
      id: 1,
      size: 's',
      color: 'outlineBlue',
      iconType: 'edit',
      iconWidth: '12',
      buttonText: '제목 편집'
    },
    {
      id: 2,
      size: 's',
      color: 'outlineBlue',
      iconType: 'archive',
      iconWidth: '12',

      buttonText: '이슈 닫기'
    }
  ];

  const labelTagBtn = {
    tagType: 'open',
    hasIcon: true,
    icon: 'archive',
    text: '열린 이슈',
    backgroundColor: colors.blue,
    fontColor: colors.gray50
  };

  return (
    <MyIssueDetailHeader>
      <PageHeader
        leftChild={pageHeaderInfo.leftChild}
        middleChild={pageHeaderInfo.middleChild}
        rigthChild={
          <ButtonHeader>
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
              />
            ))}
          </ButtonHeader>
        }
      />
      <SubHeader>
        <LabelTag {...labelTagBtn} />
        <p>
          이 이슈가 {getTimeElapsed(issueSubInfo?.createTime)}에{' '}
          {issueSubInfo?.author.name}님에 의해 열렸습니다. * 코멘트{' '}
          {CommentInfo?.length}개
        </p>
      </SubHeader>
      <hr />
    </MyIssueDetailHeader>
  );
};

const MyIssueDetailHeader = styled.div`
  width: 1280px;
  margin: 0 auto;
  & hr {
    margin: 20px;
    background: ${colors.gray300};
  }
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

const ButtonHeader = styled.div`
  display: flex;
  gap: 10px;
`;
