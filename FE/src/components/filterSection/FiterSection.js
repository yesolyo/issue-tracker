import { useContext } from 'react';

import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import { FilterBar } from './FilterBar';
import { IssueListContext } from '../../pages/IssueList';
import { colors } from '../../styles/color';
import { Button } from '../button/Button';

const filterTabOptions = {
  labels: {
    size: 's',
    color: 'ghostGray',
    iconType: 'label',
    iconWidth: 16,
    isIcon: true,
    isLeftPosition: true
  },
  milestone: {
    size: 's',
    color: 'ghostGray',
    iconType: 'milestone',
    iconWidth: 16,
    isIcon: true,
    isLeftPosition: true
  },
  newIssue: {
    size: 's',
    color: 'containerBlue',
    iconType: 'plus',
    isIcon: true,
    buttonText: '이슈작성',
    isLeftPosition: true
  }
};

export const FilterSection = () => {
  const navigate = useNavigate();
  const issues = useContext(IssueListContext);
  const issueCountInfo = issues.countInfo;
  return (
    <MyFilterSection>
      <FilterBar />
      <MyPageMoveTabButtons>
        <MyTabButtons>
          <MyLeftTabButton>
            <Button
              {...filterTabOptions.labels}
              buttonText={`레이블 (${issueCountInfo?.labelCount || 0})`}
              onClick={() => navigate('/labels')}
            />
          </MyLeftTabButton>
          <MyRightTabButton>
            <Button
              {...filterTabOptions.milestone}
              buttonText={`마일스톤 (${issueCountInfo?.milestoneCount || 0})`}
              onClick={() => navigate('/milestone')}
            />
          </MyRightTabButton>
        </MyTabButtons>
        <Button
          {...filterTabOptions.newIssue}
          onClick={() => navigate('/newIssue')}
        />
      </MyPageMoveTabButtons>
    </MyFilterSection>
  );
};

const MyFilterSection = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px 0;

  button {
    font-size: 14px;
    margin: 0 auto;
    cursor: pointer;
  }
`;

const MyPageMoveTabButtons = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;

const MyTabButtons = styled.div`
  display: flex;
  height: 40px;
  width: 300px;

  & div {
    width: 100%;
    border: 1px solid ${colors.gray300};

    :last-child {
      border-left: none;
    }

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
