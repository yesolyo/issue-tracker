import styled from 'styled-components';

import { Button } from './Button';
import { colors } from '../styles/color';

export const TabButton = ({
  type,
  buttonColor,
  backgroundColor,
  hoverColor,
  leftext,
  rightText,
  leftIconType,
  rightIconType,
  isLeftPosition
}) => {
  return (
    <MyTabButton>
      <LeftTabButton>
        <Button
          type={type}
          buttonColor={buttonColor}
          backgroundColor={backgroundColor}
          hoverColor={hoverColor}
          buttonText={leftext}
          iconType={leftIconType}
          isLeftPosition={isLeftPosition}
        />
      </LeftTabButton>
      <RightTabButton>
        <Button
          type={type}
          buttonColor={buttonColor}
          backgroundColor={backgroundColor}
          hoverColor={hoverColor}
          buttonText={rightText}
          iconType={rightIconType}
          isLeftPosition={isLeftPosition}
        />
      </RightTabButton>
    </MyTabButton>
  );
};

const MyTabButton = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 240px;
  height: 40px;
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
  &:hover {
    background: ${colors.gray200};
  }
  border: 1px solid ${colors.gray300};
  background: ${colors.gray100};
  border-radius: 0px 11px 11px 0px;
`;
