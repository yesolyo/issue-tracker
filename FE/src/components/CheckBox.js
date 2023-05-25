import { useState } from 'react';

import styled from 'styled-components';

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

export const CheckBox = ({ id, checked, onChange }) => {
  const isChecked = checked;
  return (
    <MyCheckBox id={id} type={'checkbox'} onClick={onChange}></MyCheckBox>
  );
};

const MyCheckBox = styled.input``;
