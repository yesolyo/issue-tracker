import { useContext } from 'react';

import styled from 'styled-components';

import { NewIssueContext } from '../../pages/NewIssue';
import { colors } from '../../styles/color';
import { fontSize } from '../../styles/font';
import { Dropdown } from '../dropdown/Dropdown';
import { tabTypes } from '../dropdown/DropdownTypes';

export const Sidebar = ({
  assigneeSetValue,
  labelSetValue,
  milestoneSetValue
}) => {
  const sideBarTabs = ['assignees', 'labels', 'milestone'];
  const sideBarInfo = sideBarTabs.map((tab) => tabTypes[tab]);
  const setValue = {
    assignees: assigneeSetValue,
    labels: labelSetValue,
    milestone: milestoneSetValue
  };
  const getFilteredData = (filterTabKey, filterOption) => {
    const issueData = useContext(NewIssueContext);
    const issueListData = issueData.issueList;
    return issueListData
      ?.reduce((acc, issue) => {
        const filteredIssue = issue[filterTabKey];
        if (filteredIssue) {
          acc.push(filterOption(filteredIssue));
        }
        return acc;
      }, [])
      .flat(1)
      .reduce((acc, issue) => {
        if (acc.findIndex(({ id }) => id === issue.id) === -1) {
          acc.push(issue);
        }
        return acc;
      }, []);
  };

  return (
    <MySidebar>
      {sideBarInfo.map(({ tabId, tabName, filterOptions }) => (
        <Dropdown
          key={tabId}
          type={'sidebar'}
          tabId={tabId}
          tabName={tabName}
          setValue={setValue[tabId]}
          tabOptions={getFilteredData(tabId, filterOptions)}
          buttonOption={{
            disabled: false,
            size: 'm'
          }}
        />
      ))}
    </MySidebar>
  );
};

const MySidebar = styled.div`
  border: 1px solid ${colors.gray300};
  border-radius: 16px;
  background: ${colors.gray50};
  height: max-content;
  > div:not(:last-child) {
    border-bottom: 1px solid ${colors.gray300};
  }
  & button {
    height: 96px;
    justify-content: space-between;
    padding: 0 20px;
    ${fontSize.M}
  }
`;
