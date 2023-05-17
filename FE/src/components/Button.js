import styled from 'styled-components';

import { Icon } from '../assets/Icon';
import { colors } from '../styles/color';
import { fontType } from '../styles/font';

const MyButton = styled.button`
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  padding: 0px 16px;
  width: 120px;
  height: 40px;
  display: flex;
  border-radius: 11px;
  ${fontType.BOLD};
  color: ${(props) => props.buttonColor || colors.gray50};
  &:hover {
    color: ${(props) => props.hoverColor || colors.gray50};
  }
`;

const containerButton = styled(MyButton)`
  border: none;
  background: ${(props) => props.backgroundColor || colors.gray50};
`;

const outlineButton = styled(MyButton)`
  background-color: transparent;
  border-color: ${colors.blue};
`;
const ghostButton = styled(MyButton)`
  background-color: transparent;
  border: none;
`;

export const Button = ({
  type,
  buttonColor,
  buttonText,
  iconType,
  isLeftPosition,
  backgroundColor,
  hoverColor
}) => {
  const buttonType = {
    containerButton,
    outlineButton,
    ghostButton
  };

  const MyButton = buttonType[type];

  return (
    <MyButton
      buttonColor={buttonColor}
      backgroundColor={backgroundColor}
      hoverColor={hoverColor}
    >
      {isLeftPosition
        ? (
          <>
            <Icon iconType={iconType} fill={buttonColor} width={10} />
            {buttonText}
          </>
        )
        : (
          <>
            {buttonText}
            <Icon iconType={iconType} fill={buttonColor} width={10} />
          </>
        )}
    </MyButton>
  );
};
