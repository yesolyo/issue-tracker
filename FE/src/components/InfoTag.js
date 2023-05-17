import styled from 'styled-components';

import { Icon } from '../assets/Icon';
import { colors } from '../styles/color';
import { fontSize } from '../styles/font';

// const tagTypes = {
//   open: {
//     tagType: 'open',
//     text: '열린이슈',
//     icon: 'alertCircle',
//     hasIcon: true
//   },
//   close: {
//     tagType: 'close',
//     text: '닫힌이슈',
//     icon: 'archive',
//     hasIcon: true
//   },
//   label: {
//     tagType: 'label',
//     text: 'label.id',
//     backgroundColor: 'label.backgroundColor',
//     // backgroundColor: 'red',
//     hasIcon: false
//   },
//   author: {
//     tagType: 'author',
//     text: 'author.name',
//     hasIcon: false
//   }
// };

export const InfoTag = ({
  tagType,
  text = null,
  icon = null,
  hasIcon,
  backgroundColor
}) => {
  const MyLabelTag = styled(MydefaultTag)`
    color: ${colors.gray50};
    background-color: ${backgroundColor};
  `;

  const tagTypes = {
    open: MyOpenTag,
    close: MyCloseTag,
    labels: MyLabelTag,
    author: MyAuthorTag
  };

  const MyInfoTag = tagTypes[tagType];

  return (
    <MyInfoTag backgroundColor={backgroundColor}>
      {hasIcon && <Icon iconType={icon} fill={colors.gray50} />}
      {text}
    </MyInfoTag>
  );
};

const MydefaultTag = styled.div`
  height: 32px;
  padding: 0 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  ${fontSize.S}
`;