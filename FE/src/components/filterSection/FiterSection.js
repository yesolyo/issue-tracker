import { useContext } from 'react';

import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import { FilterBar } from './FilterBar';
import { TabButton } from './TabButton';
import { IssueListContext } from '../../pages/IssueList';
import { colors } from '../../styles/color';
import { Button } from '../button/Button';

const MyFilterSection = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px 0;
`;

const TabButtons = styled.div`
  display: flex;
  gap: 15px;
  > div {
    width: 320px;

    > div {
      width: 100%;
    }
  }
`;

export const FilterSection = () => {
  const navigate = useNavigate();
  const issueData = useContext(IssueListContext);
  const issueCountInfo = issueData.countInfo;

  const issueTabConstant = {
    type: 'ghostButton',
    btnColor: colors.gray700,
    backgroundColor: colors.gray100,
    hoverColor: colors.gray700,
    lefBtnText: `레이블(${issueCountInfo?.labelCount || 0})`,
    rightBtnText: `마일스톤(${issueCountInfo?.milestoneCount || 0})`,
    leftIconType: 'label',
    rightIconType: 'milestone',
    isLeftPosition: true,
    isRightPositin: false
  };

  const addIssueConstant = {
    type: 'containerButton',
    btnColor: colors.gray50,
    backgroundColor: colors.blue,
    hoverColor: colors.gray50,
    btnText: '이슈 작성',
    iconType: 'plus',
    isIcon: true,
    isLeftPosition: true
  };

  return (
    <MyFilterSection>
      <FilterBar />
      <TabButtons>
        <TabButton
          type={issueTabConstant.type}
          buttonColor={issueTabConstant.btnColor}
          hoverColor={issueTabConstant.hoverColor}
          backgroundColor={issueTabConstant.backgroundColor}
          leftext={issueTabConstant.lefBtnText}
          rightText={issueTabConstant.rightBtnText}
          leftIconType={issueTabConstant.leftIconType}
          rightIconType={issueTabConstant.rightIconType}
          isIcon={addIssueConstant.isIcon}
          isLeftPosition={issueTabConstant.isLeftPosition}
        />
        <Button
          type={addIssueConstant.type}
          buttonColor={addIssueConstant.btnColor}
          hoverColor={addIssueConstant.hoverColor}
          backgroundColor={addIssueConstant.backgroundColor}
          buttonText={addIssueConstant.btnText}
          iconType={addIssueConstant.iconType}
          isIcon={addIssueConstant.isIcon}
          isLeftPosition={addIssueConstant.isLeftPosition}
          onClick={() => navigate('/newIssue')}
        />
      </TabButtons>
    </MyFilterSection>
  );
};
