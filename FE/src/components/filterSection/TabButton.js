import styled from 'styled-components';

import { colors } from '../../styles/color';
import { Button } from '../button/Button';

const MyTabButton = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 40px;
  width: 320px;
  background: ${colors.gray100};
  border: 1px solid ${colors.gray300};
  border-radius: 11px;

  button {
    margin: 0 auto;
  }

  div {
    width: 100%;

    &: hover {
      background: ${colors.gray200};
    }
  }
`;

const LeftTabButton = styled.div`
  border-radius: 11px 0px 0px 11px;
`;

const RightTabButton = styled.div`
  border-left: 1px solid ${colors.gray300};
  border-radius: 0px 11px 11px 0px;
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
