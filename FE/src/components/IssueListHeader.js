import styled from 'styled-components';

import { CheckBox } from './CheckBox';
import { colors } from '../styles/color';

export const IssueListHeader = () => {
  const onClick = null;
  return (
    <MyIssueListHeader>
      <div className="left">
        <CheckBox type={'initial'} onClick={onClick} />
        <button>열린이슈</button>
        <button>닫힌이슈</button>
      </div>
      <div className="right">
        <button>담당자</button>
        <button>레이블</button>
        <button>마일스톤</button>
        <button>작성자</button>
      </div>
    </MyIssueListHeader>
  );
};

const MyIssueListHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 25px;
  height: 64px;
  border-bottom: 1px solid ${colors.gray300};
  background-color: ${colors.gray100};
  border-radius: 16px 16px 0px 0px;
  > div {
    display: flex;
    gap: 18px;
    > svg {
      cursor: pointer;
    }
  }
`;
