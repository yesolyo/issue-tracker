import { useContext } from 'react';

import styled from 'styled-components';

import { NewIssueContext } from '../../pages/NewIssue';
import { colors } from '../../styles/color';
import { Dropdown } from '../dropdown/Dropdown';

const sidebarTypes = [
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
  }
];

export const Sidebar = () => {
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
      {sidebarTypes.map(({ tabName, filterTabKey, filterOption }, index) => (
        <Dropdown
          key={index}
          type={'sidebar'}
          title={tabName}
          tabName={tabName}
          tabOptions={getFilteredData(filterTabKey, filterOption)}
          buttonOption={{
            disabled: false,
            size: 'm',
            color: 'ghostGray',
            iconType: 'chevronDown',
            isIcon: true,
            isLeftPosition: false,
            buttonText: tabName
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
