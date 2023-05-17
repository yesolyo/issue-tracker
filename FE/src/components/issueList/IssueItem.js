import styled from 'styled-components';

import { Icon } from '../../assets/Icon';
import { colors } from '../../styles/color';
import { fontSize, fontType } from '../../styles/font';
import { getTimeElapsed } from '../../utils/timeElapsed';
import { CheckBox } from '../CheckBox';
import { LabelTag } from '../LabelTag';
import { Profile } from '../Profile';

const MyIssueItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100px;
  padding: 0 25px;
  &: hover {
    background-color: ${colors.gray100};
  }
`;

const IssueBox = styled.div`
  display: flex;
  align-items: center;
  gap: 18px;
  > svg {
    cursor: pointer;
  }
`;

const Issue = styled.div`
  display: flex;
  flex-direction: column;
  gap: 7px;
`;

const IssueTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  > span {
    ${fontSize.L};
  }
`;

const IssueDiscription = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  height: 30px;
  > p {
    height: 30px;
    vertical-align: center;
    color: ${colors.gray600};
    ${fontSize.M};
    ${fontType.EXTRALIGHT};
  }
`;

const IssueAssignee = styled.div`
  padding-right: 20px;
  & > img:last-of-type {
    margin-left: -10px;
  }
  img:hover {
    transition: margin 0.1s ease-in-out;
  }
`;

export const IssueItem = ({
  id,
  title,
  author,
  labels = null,
  milestone = null,
  assignees = null,
  date,
  isOpen = null,
  replyAuthors = null
}) => {
  const onClick = null;
  const labelsOption = {
    tagType: 'labels',
    hasIcon: false
  };

  return (
    <MyIssueItem>
      <IssueBox>
        <CheckBox type={'initial'} onClick={onClick} />
        <Issue>
          <IssueTitle>
            <Icon iconType={'alertCircle'} fill={colors.blue} />
            <span>{title}</span>
            {!!labels.length &&
              labels.map((label, index) => (
                <LabelTag
                  key={index}
                  {...labelsOption}
                  text={label.id}
                  backgroundColor={label.backgroundColor}
                />
              ))}
          </IssueTitle>
          <IssueDiscription>
            <p>#{id}</p>
            <p>
              이 이슈가 {getTimeElapsed(date)}전, {author?.name}님에 의해
              작성되었습니다
            </p>
            {milestone && (
              <p>
                <Icon iconType={'milestone'} fill={colors.gray600} />
                {milestone?.id}
              </p>
            )}
          </IssueDiscription>
        </Issue>
      </IssueBox>
      {assignees && (
        <IssueAssignee>
          {assignees.map((assignee, index) => (
            <Profile key={index} isSmall={true} userInfo={assignee} />
          ))}
        </IssueAssignee>
      )}
    </MyIssueItem>
  );
};
