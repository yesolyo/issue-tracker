import { useState } from 'react';

import styled from 'styled-components';

import { Icon } from '../assets/Icon';
import { colors } from '../styles/color';

// TODO : 상태에 따라 체크 박스 아이콘 변경 하기
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

export const CheckBox = ({ id, checked, onChange }) => {
  const iconType = checked ? 'active' : 'disable';
  return (
    <MyCheckBox
      id={id}
      type={'checkbox'}
      checked={checked}
      onChange={onChange}
    ></MyCheckBox>
  );
};

const MyCheckBox = styled.input``;
