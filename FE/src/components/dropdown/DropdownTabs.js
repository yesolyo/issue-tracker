import { useContext } from 'react';

import styled from 'styled-components';

import { Dropdown } from './Dropdown';
import { IssueListContext } from '../../pages/IssueList';

const tabTypes = [
  {
    tabName: '작성자',
    filterTabKey: 'author',
    filterOption (author) {
      return {
        option: author.name,
        profileUrl: author.profileUrl
      };
    }
  },
  {
    tabName: '레이블',
    filterTabKey: 'labels',
    filterOption (labels) {
      return labels.map((label) => {
        return {
          option: label.name,
          backgroundColor: label.backgroundColor
        };
      });
    }
  },
  {
    tabName: '마일스톤',
    filterTabKey: 'milestone',
    filterOption (milestone) {
      return {
        option: milestone.name
      };
    }
  },
  {
    tabName: '담당자',
    filterTabKey: 'assignees',
    filterOption (assignees) {
      return assignees.map((assignee) => {
        return {
          option: assignee.name,
          profileUrl: assignee.profileUrl
        };
      });
    }
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
  const getFilteredData = (filterTabKey, filterOption) => {
    const issueData = useContext(IssueListContext);
    const issueListData = issueData.issueList;
    return issueListData
      ?.reduce((acc, issue) => {
        const filteredIssue = issue[filterTabKey];
        if (filteredIssue) {
          acc.push(filterOption(issue[filterTabKey]));
        }
        return acc;
      }, [])
      .flat(1);
  };

  return (
    <MyDropdownTabs>
      {tabTypes.map(({ tabName, filterTabKey, filterOption }) => (
        <Dropdown
          key={tabName}
          title={tabName}
          tabName={tabName}
          tabOptions={getFilteredData(filterTabKey, filterOption)}
        />
      ))}
    </MyDropdownTabs>
  );
};
