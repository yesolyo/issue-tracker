import styled from 'styled-components';

import { Icon } from '../../assets/Icon';
import { colors } from '../../styles/color';
import { fontType } from '../../styles/font';

const MyButton = styled.button`
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  height: 40px;
  display: flex;
  padding: 0;
  width: ${(props) => props.buttonWidth || '120px'};
  height: ${(props) => props.buttonHeight || '40px'};
  border-radius: 11px;
  ${fontType.BOLD};
  color: ${(props) => props.buttonColor || colors.gray50};

  > svg {
    margin: 5px;
  }

  &:hover {
    color: ${(props) => props.hoverColor || colors.gray50};
    > svg {
      fill: ${(props) => props.hoverColor || colors.gray50};
    }
  }
`;

const containerButton = styled(MyButton)`
  padding: 0px 16px;
  border: none;
  background: ${(props) => props.backgroundColor || colors.gray50};
`;

const outlineButton = styled(MyButton)`
  padding: 0px 16px;
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
  hoverColor,
  backgroundColor,
  buttonText,
  buttonWidth,
  buttonHeight,
  iconType,
  isIcon,
  isLeftPosition,
  onClick
}) => {
  const buttonTypes = {
    containerButton,
    outlineButton,
    ghostButton
  };

  const MyButton = buttonTypes[type];

  return (
    <MyButton
      buttonColor={buttonColor}
      hoverColor={hoverColor}
      backgroundColor={backgroundColor}
      buttonWidth={buttonWidth}
      buttonHeight={buttonHeight}
      onClick={onClick}
    >
      {isIcon
        ? (
          isLeftPosition
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
            )
        )
        : (
          <>{buttonText}</>
        )}
    </MyButton>
  );
};
