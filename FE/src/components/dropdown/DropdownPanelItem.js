import styled from 'styled-components';

import { Icon } from '../../assets/Icon';
import { colors } from '../../styles/color';
import { Profile } from '../Profile';

export const DropdownPanelItem = ({
  id,
  option,
  profileUrl,
  backgroundColor,
  isSelected
}) => {
  return (
    <MyDropdownPanelItem>
      {profileUrl && <Profile userInfo={{ option, profileUrl }} />}
      {backgroundColor && (
        <Icon iconType={'roundImage'} fill={backgroundColor} />
      )}
      <div>{option}</div>
      <Icon
        iconType={isSelected ? 'checkOnCircle' : 'checkOffCircle'}
        fill={colors.gray700}
      />
    </MyDropdownPanelItem>
  );
};

const MyDropdownPanelItem = styled.li`
  z-index: 3;
`;
