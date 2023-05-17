import styled from 'styled-components';

import { Icon } from '../assets/Icon';
import { colors } from '../styles/color';
import { fontSize } from '../styles/font';

const MydefaultTag = styled.div`
  height: 32px;
  padding: 0 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  ${fontSize.S}
`;

const issueTag = styled(MydefaultTag)`
  width: max-content;
  gap: 4px;
  color: ${colors.gray50};
`;

const MyOpenTag = styled(issueTag)`
  background-color: ${colors.blue};
`;

const MyCloseTag = styled(issueTag)`
  background-color: ${colors.navy};
`;

const MyAuthorTag = styled.div`
  color: ${colors.gray600};
  border: 1px solid ${colors.gray600};
`;

export const LabelTag = ({
  tagType,
  text = null,
  icon = null,
  hasIcon,
  backgroundColor
}) => {
  const MyLabelsTag = styled(MydefaultTag)`
    color: ${colors.gray50};
    background-color: ${backgroundColor};
  `;

  const tagTypes = {
    open: MyOpenTag,
    close: MyCloseTag,
    labels: MyLabelsTag,
    author: MyAuthorTag
  };

  const MyLabelTag = tagTypes[tagType];

  return (
    <MyLabelTag backgroundColor={backgroundColor}>
      {hasIcon && <Icon iconType={icon} fill={colors.gray50} />}
      {text}
    </MyLabelTag>
  );
};
