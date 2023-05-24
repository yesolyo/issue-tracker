import { useContext } from 'react';

import styled from 'styled-components';

import { NewIssueContext } from '../../pages/NewIssue';
import { colors } from '../../styles/color';
import { fontSize } from '../../styles/font';
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

const buttonOption = {
  disabled: false,
  size: 'l',
  color: 'ghostGray',
  iconType: 'chevronDown',
  isIcon: true,
  isLeftPosition: false
};

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
          size={'m'}
          tabOptions={getFilteredData(filterTabKey, filterOption)}
          buttonOption={buttonOption}
        />
      ))}
    </MySidebar>
  );
};

const MySidebar = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  > div {
    justify-content: space-around;
    border: 1px solid ${colors.gray400};
    width: 240px;
    height: 96px;
    background: ${colors.gray50};
    z-index: 1;
    &: first-child {
      border-radius: 16px 16px 0px 0px;
    }
    &: last-child {
      border-radius: 0px 0px 16px 16px;
    }
  }
  > svg,
  > button {
    cursor: pointer;
  }
`;
