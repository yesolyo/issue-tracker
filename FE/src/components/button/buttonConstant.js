import { colors } from '../../styles/color';

const issuesConstant = {
  type: 'ghostButton',
  openBtnColor: colors.gray900,
  closeBtnColor: colors.gray700,
  hoverColor: colors.gray900,
  backgroundColor: 'transparent',
  openIconType: 'alertCircle',
  closeIconType: 'archive',
  isLeftPosition: true,
  isRightPosition: false
};

export const issuePropertiesConstant = {
  btnColor: colors.gray600,
  hoverColor: colors.gray900,
  assignee: '담당자',
  label: '레이블',
  milestone: '마일스톤',
  author: '작성자',
  iconType: 'chevronDown'
};

export const openButtonOption = {
  type: issuesConstant.type,
  buttonColor: issuesConstant.openBtnColor,
  backgroundColor: issuesConstant.backgroundColor,
  hoverColor: issuesConstant.hoverColor,
  iconType: issuesConstant.openIconType,
  isLeftPosition: issuesConstant.isLeftPosition
};

export const closeButtonOption = {
  type: issuesConstant.type,
  buttonColor: issuesConstant.closeBtnColor,
  backgroundColor: issuesConstant.backgroundColor,
  hoverColor: issuesConstant.hoverColor,
  iconType: issuesConstant.closeIconType,
  isLeftPosition: issuesConstant.isLeftPosition
};

export const tabButtonOption = {
  type: issuesConstant.type,
  buttonColor: issuePropertiesConstant.btnColor,
  backgroundColor: issuesConstant.backgroundColor,
  hoverColor: issuePropertiesConstant.hoverColor,
  iconType: issuePropertiesConstant.iconType,
  isLeftPosition: issuesConstant.isRightPosition
};
