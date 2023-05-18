import styled from 'styled-components';

import { Icon } from '../../assets/Icon';
import { colors } from '../../styles/color';
import { fontType } from '../../styles/font';

const MyTextInput = styled.div`
  position: relative;
  display: flex;
  width: 472px;
  height: 35px;
  align-items: center;
  & svg {
    position: absolute;
  }

  & input {
    background: transparent;
    width: 100%;
    height: 100%;
    border-radius: 0px 11px 11px 0px;
    border: 1px solid ${colors.gray300};
    background-color: none;
    ${fontType.REGULAR}
  }
`;

const sideLabeledTextInput = styled(MyTextInput)`
  & svg {
    top: 13px;
    left: 5px;
  }

  & input {
    padding: 5px 18px 0px;
  }
`;
const topLabeledTextInput = styled(MyTextInput)`
  & svg {
    top: 0px;
    left: 5px;
  }

  & input {
    padding: 13px 5px 0px;
  }
`;
export const TextInput = ({ type, iconType, initialText }) => {
  const textInputType = {
    sideLabeledTextInput,
    topLabeledTextInput
  };
  const MyTextInput = textInputType[type];
  return (
    <MyTextInput>
      <Icon iconType={iconType} fill={colors.gray600} width={11} />
      <input type="text" placeholder={initialText} />
    </MyTextInput>
  );
};
