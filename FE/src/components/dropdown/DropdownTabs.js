import { useContext, useEffect } from 'react';

import styled from 'styled-components';

import { Dropdown } from './Dropdown';
import { IssueListContext } from '../../pages/IssueList';

const tabTypes = [
  {
    tabName: '작성자',
    filterTabKey: 'author',
    filterOption (author) {
      return {
        id: author.id,
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
          id: label.id,
          option: label.name,
          backgroundColor: label.backgroundColor,
          fontColor: label.fontColor
        };
      });
    }
  },
  {
    tabName: '마일스톤',
    filterTabKey: 'milestone',
    filterOption (milestone) {
      return {
        id: milestone.id,
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
          id: assignee.id,
          option: assignee.name,
          profileUrl: assignee.profileUrl
        };
      });
    }
  }
];

export const DropdownTabs = () => {
  // TODO: queryString으로 filter
  const getFilteredData = (filterTabKey, filterOption) => {
    const issues = useContext(IssueListContext);
    const issueListData = issues.issueList;
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
    <MyDropdownTabs>
      {tabTypes.map(({ tabName, filterTabKey, filterOption }) => (
        <Dropdown
          key={filterTabKey}
          tabId={filterTabKey}
          tabName={tabName}
          type={'tabs'}
          tabOptions={getFilteredData(filterTabKey, filterOption)}
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
