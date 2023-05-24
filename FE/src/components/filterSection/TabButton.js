import { useContext } from 'react';

import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import { IssueListContext } from '../../pages/IssueList';
import { colors } from '../../styles/color';
import { Button } from '../button/Button';

export const TabButton = () => {
  const navigate = useNavigate();
  const { state } = useContext(IssueListContext);
  const issueCountInfo = state.countInfo;
  return (
    <MyTabButton>
      <MyLeftTabButton>
        <Button
          size={'s'}
          color={'ghostGray'}
          iconType={'label'}
          iconWidth={16}
          isIcon
          buttonText={`레이블(${issueCountInfo?.labelCount || 0})`}
          isLeftPosition
          onClick={() => navigate('/LabelList')}
        />
      </MyLeftTabButton>
      <MyRightTabButton>
        <Button
          size={'s'}
          color={'ghostGray'}
          iconType={'milestone'}
          iconWidth={16}
          isIcon
          buttonText={`마일스톤(${issueCountInfo?.milestoneCount || 0})`}
          isLeftPosition
          onClick={() => navigate('/MilestoneList')}
        />
      </MyRightTabButton>
    </MyTabButton>
  );
};

const MyTabButton = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 40px;
  width: 320px;
  background: ${colors.gray100};

  button {
    margin: 0 auto;
  }

  div {
    width: 100%;
    border: 1px solid ${colors.gray300};

    &: hover {
      background: ${colors.gray200};
    }
  }
`;

const MyLeftTabButton = styled.div`
  border-radius: 11px 0px 0px 11px;
`;

const MyRightTabButton = styled.div`
  border-radius: 0px 11px 11px 0px;
`;
