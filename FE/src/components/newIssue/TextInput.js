import styled from 'styled-components';

import { Icon } from '../../assets/Icon';
import { colors } from '../../styles/color';
import { fontType } from '../../styles/font';

const MyTextInput = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  & svg {
    position: absolute;
  }

  & input {
    background: transparent;
    width: 100%;
    height: 100%;
    border: 1px solid ${colors.gray300};
    background-color: none;
    ${fontType.REGULAR}
  }
`;
const defaultTextInput = styled(MyTextInput)`
  width: 912px;
  height: 56px;
  & input {
    background: ${colors.gray200};
    padding: 0px 24px;
    border-radius: 14px;
  }
`;

const sideLabeledTextInput = styled(MyTextInput)`
  width: 472px;
  height: 35px;
  & svg {
    top: 13px;
    left: 5px;
  }

  & input {
    padding: 5px 18px 0px;
    border-radius: 11px;
  }
`;
const topLabeledTextInput = styled(MyTextInput)`
  width: 472px;
  height: 35px;
  & svg {
    top: 0px;
    left: 5px;
  }

  & input {
    padding: 13px 5px 0px;
    border-radius: 11px;
  }
`;
export const TextInput = ({ type, isIcon, iconType, initialText }) => {
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
            <Icon iconType={iconType} fill={colors.gray600} width={11} />
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
