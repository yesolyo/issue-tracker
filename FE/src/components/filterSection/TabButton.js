import styled from 'styled-components';

import { colors } from '../../styles/color';
import { Button } from '../button/Button';

const MyTabButton = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 40px;

  button {
    margin: 0 auto;
  }
`;

const LeftTabButton = styled.div`
  border: 1px solid ${colors.gray300};
  border-right: none;
  background: ${colors.gray100};
  border-radius: 11px 0px 0px 11px;

  &: hover {
    background: ${colors.gray200};
  }
`;

const RightTabButton = styled.div`
  border: 1px solid ${colors.gray300};
  background: ${colors.gray100};
  border-radius: 0px 11px 11px 0px;

  &:hover {
    background: ${colors.gray200};
  }
`;

export const TabButton = ({
  type,
  buttonColor,
  hoverColor,
  backgroundColor,
  leftext,
  rightText,
  leftIconType,
  rightIconType,
  isIcon,
  isLeftPosition
}) => {
  return (
    <MyTabButton>
      <LeftTabButton>
        <Button
          type={type}
          buttonColor={buttonColor}
          hoverColor={hoverColor}
          backgroundColor={backgroundColor}
          buttonText={leftext}
          iconType={leftIconType}
          isIcon={isIcon}
          isLeftPosition={isLeftPosition}
        />
      </LeftTabButton>
      <RightTabButton>
        <Button
          type={type}
          buttonColor={buttonColor}
          hoverColor={hoverColor}
          backgroundColor={backgroundColor}
          buttonText={rightText}
          iconType={rightIconType}
          isIcon={isIcon}
          isLeftPosition={isLeftPosition}
        />
      </RightTabButton>
    </MyTabButton>
  );
};
