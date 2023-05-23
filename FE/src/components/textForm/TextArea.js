import { useState } from 'react';

import styled, { css } from 'styled-components';

import { colors } from '../../styles/color';
import { fontSize, fontType } from '../../styles/font';
import { Button } from '../button/Button';

export const TextArea = ({ label, size }) => {
  const [value, setValue] = useState('');
  const areaSize = areaSizes[size];
  const fileSize = fileSizes[size];

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <MyTextArea areaSize={areaSize} value={value}>
      <textarea value={value} onChange={handleChange} />
      <label className={value && 'filled'}>{label}</label>

      <MyFileArea fileSize={fileSize}>
        <Button
          size={'m'}
          color={'ghostBlack'}
          iconType={'paperclip'}
          isIcon
          buttonText={`파일 첨부하기`}
          isLeftPosition
        />
        <div>띄어쓰기 포함 {value.length}자</div>
      </MyFileArea>
    </MyTextArea>
  );
};

const areaSizes = {
  l: css`
    width: 912px;
    height: 384px;
  `,
  s: css`
    width: 958px;
    height: 188px;
  `
};

const fileSizes = {
  l: css`
    width: 942px;
    height: 52px;
  `,
  s: css`
    width: 988px;
    height: 52px;
  `
};

const MyTextArea = styled.div`
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
    ${(props) =>
    props.value.length > 0
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
  & textarea {
    ${(props) => props.areaSize};
    border-radius: 11px 11px 0px 0px;
    border: none;
    outline: none;
    box-shadow: none;
    padding: 30px 0px 0px 30px;
    background: ${colors.gray200};
    transition: 200ms cubic-bezier(0, 0, 0.2, 1) 0ms;
    ${fontSize.M};
    ${fontType.REGULAR};
  }

  & textarea:focus {
    background: ${colors.gray50};
    box-shadow: 0 0 0 2px #79b1ff;
  }
`;

const MyFileArea = styled.div`
  ${(props) => props.fileSize};
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: dashed ${colors.gray300};
  background: ${colors.gray200};
  border-radius: 0px 0px 11px 11px;
  > div {
    padding: 0px 20px 0px 0px;
  }
  > button {
    padding: 0px 0px 0px 20px;
    justify-content: flex-start;
  }
`;
