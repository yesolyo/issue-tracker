import styled from 'styled-components';

import { CheckBox } from './CheckBox';
import { InfoTag } from './InfoTag';
import { Profile } from './Profile';
import { Icon } from '../assets/Icon';
import { colors } from '../styles/color';
import { fontSize, fontType } from '../styles/font';

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

// 위에 필터탭이랑 너비 같게 한다음 이미지 프로필 겹치게 만들기
const IssueAssignee = styled.div`
  padding-right: 10px;

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

  const getTimeElapsed = (date) => {
    const currentTime = new Date();
    const secValue = 1000;
    const timeDiff = (currentTime - new Date(date)) / secValue;
    const timeOption = {
      sec: 1,
      min: 60,
      hour: 60 * 60,
      day: 60 * 60 * 24,
      week: 60 * 60 * 24 * 7
    };
    const timeTextOption = {
      sec: '초',
      min: '분',
      hour: '시간',
      day: '일',
      week: '주'
    };

    let timeUnit = '';
    if (timeDiff < 60) {
      timeUnit = 'sec';
    } else if (timeDiff >= 60 && timeDiff < 3600) {
      timeUnit = 'min';
    } else if (timeDiff >= 3600 && timeDiff < 86400) {
      timeUnit = 'hour';
    } else if (timeDiff >= 86400 && timeDiff < 604800) {
      timeUnit = 'day';
    } else {
      timeUnit = 'week';
    }

    const elapsedTime = Math.floor(timeDiff / timeOption[timeUnit]);
    // const
    return `${elapsedTime}${timeTextOption[timeUnit]}`;
  };

  return (
    <MyIssueItem>
      <IssueBox className="left">
        <CheckBox type={'initial'} onClick={onClick} />
        <Issue IssueclassName="이슈">
          <IssueTitle>
            <Icon iconType={'alertCircle'} fill={colors.blue} />
            <span>{title}</span>
            {!!labels.length &&
              labels.map((label, index) => (
                <InfoTag
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
