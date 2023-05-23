import { useState } from 'react';

import styled, { css } from 'styled-components';

import { colors } from '../../styles/color';
import { fontSize, fontType } from '../../styles/font';

export const TextInput = ({ label, size }) => {
  const [value, setValue] = useState('');
  const inputSize = inputSizes[size];

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <MyTextInput inputSize={inputSize}>
      <input type="text" value={value} onChange={handleChange} />
      <label className={value && 'filled'} htmlFor={name}>
        {label}
      </label>
    </MyTextInput>
  );
};

const inputSizes = {
  xxl: css`
    width: 1216px;
    height: 40px;
  `,
  xl: css`
    width: 1008px;
    height: 40px;
  `,
  l: css`
    width: 904px;
    height: 40px;
  `,
  m: css`
    width: 600px;
    height: 40px;
  `,
  s: css`
    width: 472px;
    height: 40px;
  `,
  xs: css`
    width: 240px;
    height: 40px;
  `,
  lg: css`
    width: 912px;
    height: 56px;
  `,
  sm: css`
    width: 320px;
    height: 56px;
  `
};

const MyTextInput = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;

  &: focus-within label {
    transform: translate(0, 12px) scale(0.8);
  }

  &: filled {
    transform: translate(0, 12px) scale(0.8);
  }

  & label {
    position: absolute;
    pointer-events: none;
    transform: translate(0, 23px) scale(1);
    transform-origin: top left;
    transition: 200ms cubic-bezier(0, 0, 0.2, 1) 0ms;
    color: ${colors.gray600};
    font-size: 16px;
    line-height: 1;
    left: 16px;
  }

  & input {
    ${(props) => props.inputSize};
    border-radius: 11px;
    border: none;
    outline: none;
    box-shadow: none;
    padding: 10px 0px 0px 15px;
    background: ${colors.gray200};
    transition: 200ms cubic-bezier(0, 0, 0.2, 1) 0ms;
    ${fontSize.M};
    ${fontType.REGULAR};
  }

  & input:focus {
    background: ${colors.gray50};
    box-shadow: 0 0 0 2px #79b1ff;
  }
`;
