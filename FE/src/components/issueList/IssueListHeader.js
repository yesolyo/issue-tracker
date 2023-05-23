import React, { useContext, useState } from 'react';

import styled from 'styled-components';

import { IssueListContext } from '../../pages/IssueList';
import { colors } from '../../styles/color';
import { Button } from '../button/Button';
import { CheckBox } from '../CheckBox';
import { DropdownTabs } from '../dropdown/DropdownTabs';

export const IssueListHeader = () => {
  const issueData = useContext(IssueListContext);
  const countInfo = issueData.countInfo;
  // const issueButtonTypes = [
  //   {
  //     text: '열린 이슈',
  //     status: true,
  //     option: openButtonOption,
  //     count: countInfo?.openCount
  //   },
  //   {
  //     text: '닫힌 이슈',
  //     status: false,
  //     option: closeButtonOption,
  //     count: countInfo?.closeCount
  //   }
  // ];

  // const [activeTab, setActiveTab] = useState(true);
  // const handleTabClick = () => {
  //   setActiveTab(!activeTab);
  // };

  return (
    <MyIssueListHeader>
      <MyIssueTabs>
        <CheckBox type={'initial'} onClick={onClick} />
        <Button
          size={'s'}
          color={'ghostBlack'}
          iconType={'alertCircle'}
          isIcon
          buttonText={`열린 이슈(${countInfo?.openCount || 0})`}
          isLeftPosition
        />
        <Button
          size={'s'}
          color={'ghostGray'}
          iconType={'archive'}
          isIcon
          buttonText={`닫힌 이슈(${countInfo?.closeCount || 0})`}
          isLeftPosition
        />
      </MyIssueTabs>
      <DropdownTabs />
    </MyIssueListHeader>
  );
};

const MyIssueListHeader = styled.div`
  display: flex;
  gap: 18px;
  justify-content: space-between;
  align-items: center;
  padding: 0 25px;
  height: 64px;
  background-color: ${colors.gray100};
  border-bottom: 1px solid ${colors.gray300};
  border-radius: 16px 16px 0px 0px;
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
