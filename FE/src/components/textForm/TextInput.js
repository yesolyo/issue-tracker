
import { useState, useRef } from 'react';


import styled from 'styled-components';

import { colors } from '../../styles/color';
import { fontSize, fontType } from '../../styles/font';

export const TextInput = React.memo(({ label, height, value, setValue, myInputRef,
  focusStyle }) => {
  const [isTextInputFocus, setIsTextInputFocus] = useState(false);

  return (
    <MyTextInput
      isFocus={isTextInputFocus}
      height={height}
      value={value}
      focusStyle={focusStyle}
      onMouseUp={() => setIsTextInputFocus(true)}
      onBlur={() => setIsTextInputFocus(false)}
    >
      <input
        type="text"
        onChange={(e) => {
          setValue(e.target.value);
        }}
        ref={myInputRef}
      />
      <label className={value && 'filled'}>{label}</label>
    </MyTextInput>
  );
});

const MyTextInput = styled.div`
  height: ${({ height }) => height || '40px'};
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 11px;
  background: ${({ isFocus }) => (isFocus ? `${colors.gray50}` : null)};
  box-shadow: ${({ isFocus }) => (isFocus ? `0 0 0 1px #79b1ff` : null)};

  &: focus-within label {
    transform: translate(0, 12px) scale(0.8);
  }

  &: filled {
    transform: translate(0, 12px) scale(0.8);
  }

  & label {
    position: absolute;
    ${({ value }) =>
    value.length > 0
      ? 'transform: translate(0, 12px) scale(0.8);'
      : 'transform: translate(0, 23px) scale(1);'}
    pointer-events: none;
    transform-origin: top left;
    transition: 200ms cubic-bezier(0, 0, 0.2, 1) 0ms;
    color: ${colors.gray600};
    font-size: 16px;
    line-height: 1;
    left: 16px;
  }

  & input {
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    border-radius: 11px;
    border: none;
    outline: none;
    box-shadow: none;
    padding: 10px 30px;
    background: ${({ isFocus }) =>
    isFocus ? `${colors.gray50}` : `${colors.gray200}`};
    transition: 200ms cubic-bezier(0, 0, 0.2, 1) 0ms;
    ${fontSize.M};
    ${fontType.REGULAR};
  }
  & input:focus {
    background: ${colors.gray50};

    ${(props) => props.focusStyle || `box-shadow: 0 0 0 2px ${colors.blue};`}
  }

