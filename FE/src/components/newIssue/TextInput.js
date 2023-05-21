import styled from 'styled-components';

import { Icon } from '../../assets/Icon';
import { colors } from '../../styles/color';
import { fontSize, fontType } from '../../styles/font';

const MyTextInput = styled.div`
  position: relative;
  display: flex;
  align-items: center;

  & input {
    width: 100%;
    height: 100%;
    background: transparent;
    border: none;
    outline: none;
    ${fontType.REGULAR}
  }
`;

const defaultTextInput = styled(MyTextInput)`
  background: ${colors.gray200};
  border: 1px solid ${colors.gray300};
  box-sizing: border-box;
  height: 55px;
  padding: 0 24px;
  border-radius: 11px;
  ${fontSize.M}
`;

const sideLabeledTextInput = styled(MyTextInput)`
  background: ${colors.gray200};
  border-radius: 0px 11px 11px 0px;

  &: hover {
    background: ${colors.gray50};
    border: 1px solid ${colors.gray400};
  }
`;

const topLabeledTextInput = styled(MyTextInput)``;

export const TextInput = ({
  type,
  isIcon,
  iconType,
  initialText,
  inputWidth,
  inputHeight
}) => {
  const textInputType = {
    sideLabeledTextInput,
    topLabeledTextInput,
    defaultTextInput
  };
  const MyTextInput = textInputType[type];
  return (
    <MyTextInput>
      {isIcon
        ? (
          <>
            <Icon
              iconType={iconType}
              fill={colors.gray600}
              width={11}
              height={11}
            />
            <input type="text" placeholder={initialText} />
          </>
        )
        : (
          <>
            <input type="text" placeholder={initialText} />
          </>
        )}
    </MyTextInput>
  );
};
