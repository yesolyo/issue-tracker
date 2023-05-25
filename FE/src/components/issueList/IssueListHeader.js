import React, { useContext, useState } from 'react';

import styled from 'styled-components';

import { CheckboxStateContext } from './IssueListContainer';
import { IssueListContext, FilterStateContext } from '../../pages/IssueList';
import { colors } from '../../styles/color';
import { fontSize, fontType } from '../../styles/font';
import { Button } from '../button/Button';
import { CheckBox } from '../CheckBox';
import { Dropdown } from '../dropdown/Dropdown';
import { DropdownTabs } from '../dropdown/DropdownTabs';

export const IssueListHeader = () => {
  const { check, checkDispatch } = useContext(CheckboxStateContext);
  const issues = useContext(IssueListContext);
  const countInfo = issues.countInfo;

  const issueButtonTypes = [
    {
      text: '열린 이슈',
      status: true,
      onClick: () => setActiveTab(true),
      buttonOption: {
        size: 's',
        color: 'ghostBlack',
        iconType: 'alertCircle',
        isIcon: true,
        iconWidth: 16,
        isLeftPosition: true
      },
      count: countInfo?.openCount
    },
    {
      text: '닫힌 이슈',
      status: false,
      onClick: () => setActiveTab(false),
      buttonOption: {
        size: 's',
        color: 'ghostGray',
        iconType: 'archive',
        isIcon: true,
        iconWidth: 16,
        isLeftPosition: true
      },
      count: countInfo?.closeCount
    }
  ];

  const checkTabsType = {
    tabId: 'checkTab',
    tabName: '상태 수정',
    tite: '상태 변경',
    tabOptions: [
      {
        id: 'open',
        option: '선택한 이슈 열기'
      },
      {
        id: 'close',
        option: '선택한 이슈 닫기'
      }
    ]
  };

  const handleCheckedIssueTabsClick = () => {
    if (check.isAllChecked) checkDispatch({ type: 'ALL_UNCHECK' });
    else checkDispatch({ type: 'ALL_CHECK', payload: '모든 이슈 아이디 담은 배열 전달' });
  };

  const [activeTab, setActiveTab] = useState(true);

  return (
    <MyIssueListHeader>
      {check.isAllChecked
        ? (
          <>
            <MyCheckedIssueTabs>
              <CheckBox
                checked={check.isAllChecked}
                onChange={handleCheckedIssueTabsClick}
              />
              <div>{check.selectedIssues.length} 개 이슈 선택</div>
            </MyCheckedIssueTabs>
            <Dropdown {...checkTabsType} />
          </>
        )
        : (
          <>
            <MyIssueTabs>
              <CheckBox
                checked={check.isAllChecked}
                onChange={handleCheckedIssueTabsClick}
              />
              {issueButtonTypes.map(
                ({ text, status, buttonOption, count, onClick }, index) => (
                  <Button
                    key={index}
                    active={activeTab === status}
                    onClick={onClick}
                    {...buttonOption}
                    buttonText={`${text} (${count || 0})`}
                  />
                )
              )}
            </MyIssueTabs>
            <DropdownTabs />
          </>
        )}
    </MyIssueListHeader>
  );
};

const MyIssueListHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 25px;
  height: 64px;
  background-color: ${colors.gray100};
  border-bottom: 1px solid ${colors.gray300};
  border-radius: 16px 16px 0px 0px;

  button {
    justify-content: space-between;
    gap: 8px;
    width: max-content;
    ${fontSize.M}
  }
`;

const MyIssueTabs = styled.div`
  display: flex;
  align-items: center;
  gap: 18px;
  > svg,
  > button {
    cursor: pointer;
  }
`;

const MyCheckedIssueTabs = styled(MyIssueTabs)`
  ${fontType.BOLD};
`;
