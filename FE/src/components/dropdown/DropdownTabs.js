import { useContext } from 'react';

import styled from 'styled-components';

import { Dropdown } from './Dropdown';
import { tabTypes } from './DropdownTypes';
import { IssueListContext } from '../../pages/IssueList';

export const DropdownTabs = () => {
  const tabButtons = ['author', 'labels', 'milestone', 'assignees'];
  const dropdownTabInfo = tabButtons.map((tab) => tabTypes[tab]);
  const getParticleType = (tabId) =>
    ['author', 'assignees'].includes(tabId) ? '가' : '이';
  // TODO : 선택된 옵션으로 queryString 전달 후 응답 리렌더 필요함
  const getFilteredData = (filterTabKey, filterOption) => {
    const issues = useContext(IssueListContext);
    const issueListData = issues.issueList;
    return (
      issueListData
        ?.reduce((acc, issue) => {
          const filteredIssue = issue[filterTabKey];
          if (filteredIssue) {
            acc.push(filterOption(filteredIssue));
          }
          return acc;
        }, [])
        .flat(1)
        // (TODO : 제거예정) 현재 mock data 중복 처리 위해 추가된 로직
        .reduce((acc, issue) => {
          if (acc.findIndex(({ id }) => id === issue.id) === -1) {
            acc.push(issue);
          }
          return acc;
        }, [])
    );
  };

  return (
    <MyDropdownTabs>
      {dropdownTabInfo.map(({ tabId, tabName, filterOptions }) => (
        <Dropdown
          key={tabId}
          type={'tabs'}
          tabId={tabId}
          tabName={tabName}
          tabOptions={getFilteredData(tabId, filterOptions)}
          buttonOption={{ size: 's' }}
          optionalArea={
            <>
              {tabName}
              {getParticleType(tabId)} 없는 이슈
            </>
          }
        />
      ))}
    </MyDropdownTabs>
  );
};

const MyDropdownTabs = styled.div`
  display: flex;
  align-items: center;
  gap: 18px;

  > svg,
  > button {
    cursor: pointer;
  }

  button {
    padding: 10px;
  }
`;
