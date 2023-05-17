import styled from 'styled-components';

import { colors } from '../../styles/color';
import { Button } from '../Button';

const MyIssueListHeader = styled.div`
  display: flex;
`;

export const IssueListHeader = ({ value }) => {
  const combinedIssues = {
    type: 'ghostButton',
    opencolor: colors.gray900,
    closecolor: colors.gray700,
    openIssue: `열린 이슈(${value?.openCount})`,
    closeIssue: `닫힌 이슈(${value?.closeCount})`,
    backgroundColor: 'transparent',
    hoverColor: colors.gray900,
    openIcon: 'alertCircle',
    closeIcon: 'archive',
    isLeftPosition: true,
    isRightPosition: false
  };
  const combinedIssueProperties = {
    type: 'ghostButton',
    color: colors.gray600,
    assignee: '담당자',
    label: '레이블',
    milestone: '마일스톤',
    author: '작성자',
    img: 'chevronDown',
    backgroundColor: 'transparent',
    hoverColor: colors.gray900,
    isLeftPosition: true,
    isRightPosition: false
  };

  return (
    <MyIssueListHeader>
      <Button
        type={combinedIssues.type}
        buttonColor={combinedIssues.opencolor}
        backgroundColor={combinedIssues.backgroundColor}
        hoverColor={combinedIssues.hoverColor}
        buttonText={combinedIssues.openIssue}
        iconType={combinedIssues.openIcon}
        isLeftPosition={combinedIssues.isLeftPosition}
      />
      <Button
        type={combinedIssues.type}
        buttonColor={combinedIssues.closecolor}
        backgroundColor={combinedIssues.backgroundColor}
        hoverColor={combinedIssues.hoverColor}
        buttonText={combinedIssues.closeIssue}
        iconType={combinedIssues.closeIcon}
        isLeftPosition={combinedIssues.isLeftPosition}
      />
      <Button
        type={combinedIssueProperties.type}
        buttonColor={combinedIssueProperties.color}
        backgroundColor={combinedIssueProperties.backgroundColor}
        hoverColor={combinedIssueProperties.hoverColor}
        buttonText={combinedIssueProperties.assignee}
        iconType={combinedIssueProperties.img}
        isLeftPosition={combinedIssueProperties.isRightPosition}
      />
      <Button
        type={combinedIssueProperties.type}
        buttonColor={combinedIssueProperties.color}
        backgroundColor={combinedIssueProperties.backgroundColor}
        hoverColor={combinedIssueProperties.hoverColor}
        buttonText={combinedIssueProperties.label}
        iconType={combinedIssueProperties.img}
        isLeftPosition={combinedIssueProperties.isRightPosition}
      />
      <Button
        type={combinedIssueProperties.type}
        buttonColor={combinedIssueProperties.color}
        backgroundColor={combinedIssueProperties.backgroundColor}
        hoverColor={combinedIssueProperties.hoverColor}
        buttonText={combinedIssueProperties.milestone}
        iconType={combinedIssueProperties.img}
        isLeftPosition={combinedIssueProperties.isRightPosition}
      />
      <Button
        type={combinedIssueProperties.type}
        buttonColor={combinedIssueProperties.color}
        backgroundColor={combinedIssueProperties.backgroundColor}
        hoverColor={combinedIssueProperties.hoverColor}
        buttonText={combinedIssueProperties.author}
        iconType={combinedIssueProperties.img}
        isLeftPosition={combinedIssueProperties.isRightPosition}
      />
    </MyIssueListHeader>
  );
};
