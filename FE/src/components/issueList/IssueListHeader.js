import styled from 'styled-components';

import { colors } from '../../styles/color';
import { Button } from '../Button';

const MyIssueListHeader = styled.div`
  display: flex;
`;

export const IssueListHeader = ({ value }) => {
  const issuesConstant = {
    type: 'ghostButton',
    openBtnColor: colors.gray900,
    closeBtnColor: colors.gray700,
    hoverColor: colors.gray900,
    backgroundColor: 'transparent',
    openBtnText: `열린 이슈(${value?.openCount})`,
    closeBtnText: `닫힌 이슈(${value?.closeCount})`,
    openIconType: 'alertCircle',
    closeIconType: 'archive',
    isLeftPosition: true,
    isRightPosition: false
  };

  const issuePropertiesConstant = {
    type: 'ghostButton',
    btnColor: colors.gray600,
    hoverColor: colors.gray900,
    backgroundColor: 'transparent',
    assignee: '담당자',
    label: '레이블',
    milestone: '마일스톤',
    author: '작성자',
    iconType: 'chevronDown',
    isLeftPosition: true,
    isRightPosition: false
  };

  return (
    <MyIssueListHeader>
      <Button
        type={issuesConstant.type}
        buttonColor={issuesConstant.openBtnColor}
        backgroundColor={issuesConstant.backgroundColor}
        hoverColor={issuesConstant.hoverColor}
        buttonText={issuesConstant.openBtnText}
        iconType={issuesConstant.openIconType}
        isLeftPosition={issuesConstant.isLeftPosition}
      />
      <Button
        type={issuesConstant.type}
        buttonColor={issuesConstant.closeBtnColor}
        backgroundColor={issuesConstant.backgroundColor}
        hoverColor={issuesConstant.hoverColor}
        buttonText={issuesConstant.closeBtnText}
        iconType={issuesConstant.closeIconType}
        isLeftPosition={issuesConstant.isLeftPosition}
      />
      <Button
        type={issuePropertiesConstant.type}
        buttonColor={issuePropertiesConstant.btnColor}
        backgroundColor={issuePropertiesConstant.backgroundColor}
        hoverColor={issuePropertiesConstant.hoverColor}
        buttonText={issuePropertiesConstant.assignee}
        iconType={issuePropertiesConstant.iconType}
        isLeftPosition={issuePropertiesConstant.isRightPosition}
      />
      <Button
        type={issuePropertiesConstant.type}
        buttonColor={issuePropertiesConstant.btnColor}
        backgroundColor={issuePropertiesConstant.backgroundColor}
        hoverColor={issuePropertiesConstant.hoverColor}
        buttonText={issuePropertiesConstant.label}
        iconType={issuePropertiesConstant.iconType}
        isLeftPosition={issuePropertiesConstant.isRightPosition}
      />
      <Button
        type={issuePropertiesConstant.type}
        buttonColor={issuePropertiesConstant.btnColor}
        backgroundColor={issuePropertiesConstant.backgroundColor}
        hoverColor={issuePropertiesConstant.hoverColor}
        buttonText={issuePropertiesConstant.milestone}
        iconType={issuePropertiesConstant.iconType}
        isLeftPosition={issuePropertiesConstant.isRightPosition}
      />
      <Button
        type={issuePropertiesConstant.type}
        buttonColor={issuePropertiesConstant.btnColor}
        backgroundColor={issuePropertiesConstant.backgroundColor}
        hoverColor={issuePropertiesConstant.hoverColor}
        buttonText={issuePropertiesConstant.author}
        iconType={issuePropertiesConstant.iconType}
        isLeftPosition={issuePropertiesConstant.isRightPosition}
      />
    </MyIssueListHeader>
  );
};
