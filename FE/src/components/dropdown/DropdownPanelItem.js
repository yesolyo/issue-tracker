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
    <li>
      {profileUrl && <Profile userInfo={{ option, profileUrl }} />}
      {backgroundColor && (
        <Icon iconType={'roundImage'} fill={backgroundColor} />
      )}
      <div>{option}</div>
      <Icon
        iconType={isSelected ? 'checkOnCircle' : 'checkOffCircle'}
        fill={colors.gray700}
      />
    </li>
  );
};
