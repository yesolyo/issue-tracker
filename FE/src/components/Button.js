import styled from 'styled-components';

import { Icon } from '../assets/Icon';
import { colors } from '../styles/color';

export const Button = ({ type, buttonColor }) => {
  const buttonType = {
    containerButton,
    outlineButton,
    ghostButton
  };

  const MyButton = buttonType[type];

  return (
    <MyButton>
      <Icon iconType={'plus'} fill={buttonColor} width={10} />
      이슈 속성
    </MyButton>
  );
};

const MyButton = styled.button`
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  padding: 0px 16px;
  width: 120px;
  height: 40px;
  display: flex;
  border-radius: 11px;
`;

const containerButton = styled(MyButton)`
  border: none;
  color: ${colors.gray50};
  background: ${colors.blue};
`;

const outlineButton = styled(MyButton)`
  background-color: transparent;
  border-color: ${colors.blue};
  color: ${colors.blue};
`;
const ghostButton = styled(MyButton)`
  background-color: transparent;
  border: none;
`;
