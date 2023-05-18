import { Icon } from '../assets/Icon';
import { colors } from '../styles/color';

const checkType = {
  initial: {
    iconType: 'checkBoxInitial',
    fill: `${colors.gray300}`
  },
  active: {
    iconType: 'checkBoxActive',
    fill: `${colors.blue}`
  },
  disable: {
    iconType: 'checkBoxDisable',
    fill: `${colors.blue}`
  }
};

export const CheckBox = ({ type, onClick }) => {
  return <Icon {...checkType[type]} onClick={onClick} />;
};
