import { useContext } from 'react';

import styled from 'styled-components';

import { IssueListContext } from '../../pages/IssueList';
import { colors } from '../../styles/color';
import { Button } from '../button/Button';
import { openButtonOption, closeButtonOption } from '../button/buttonConstant';
import { CheckBox } from '../CheckBox';
import { DropdownTabs } from '../dropdown/DropdownTabs';

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

const IssueTabs = styled.div`
  display: flex;
  align-items: center;
  gap: 18px;

  > svg,
  > button {
    cursor: pointer;
  }
`;

export const IssueListHeader = () => {
  const issueData = useContext(IssueListContext);
  const countInfo = issueData.countInfo;
  const onClick = null;
  return (
    <MyIssueListHeader>
      <IssueTabs>
        <CheckBox type={'initial'} onClick={onClick} />
        <Button
          {...openButtonOption}
          buttonText={`열린 이슈(${countInfo?.openCount || 0})`}
        />
        <Button
          {...closeButtonOption}
          buttonText={`닫힌 이슈(${countInfo?.closeCount || 0})`}
        />
      </IssueTabs>
      <DropdownTabs />
    </MyIssueListHeader>
  );
};
