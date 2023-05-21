import { useContext } from 'react';

import styled from 'styled-components';

import { Dropdown } from './Dropdown';
import { IssueListContext } from '../../pages/IssueList';

const tabTypes = [
  {
    tabName: '작성자',
    filterTabKey: 'author'
  },
  {
    tabName: '레이블',
    filterTabKey: 'labels'
  },
  {
    tabName: '마일스톤',
    filterTabKey: 'milestone'
  },
  {
    tabName: '담당자',
    filterTabKey: 'assignees'
  }
];

const MyDropdownTabs = styled.div`
  display: flex;
  align-items: center;
  gap: 18px;

  > svg,
  > button {
    cursor: pointer;
  }
`;

export const DropdownTabs = () => {
  // TODO: queryString으로 filter
  const getFilteredData = (filterTabKey) => {
    const issueData = useContext(IssueListContext);
    const issueListData = issueData.issueList;
    return issueListData
      ?.map((issue) => issue[filterTabKey])
      .filter((data) => !!data)
      .flat(1);
  };

  return (
    <MyDropdownTabs>
      {tabTypes.map(({ tabName, filterTabKey }, index) => {
        return (
          <Dropdown
            key={index}
            tabName={tabName}
            tabOptions={getFilteredData(filterTabKey)}
          />
        );
      })}
    </MyDropdownTabs>
  );
};
