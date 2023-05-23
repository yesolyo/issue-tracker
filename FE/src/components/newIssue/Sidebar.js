import styled from 'styled-components';

import { colors } from '../../styles/color';
import { fontSize } from '../../styles/font';
import { Button } from '../button/Button';

export const Sidebar = () => {
  return (
    <MySidebar>
      <MyTopSidebar>
        <Button
          disabled={false}
          size={'s'}
          color={'ghostGray'}
          iconType={'chevronDown'}
          isIcon
          buttonText={'담당자'}
          isLeftPosition={false}
        />
      </MyTopSidebar>
      <MyMiddleSidebar>
        <Button
          disabled={false}
          size={'s'}
          color={'ghostGray'}
          iconType={'chevronDown'}
          isIcon
          buttonText={'레이블'}
          isLeftPosition={false}
        />
      </MyMiddleSidebar>
      <MyDownSidebar>
        <Button
          disabled={false}
          size={'s'}
          color={'ghostGray'}
          iconType={'chevronDown'}
          isIcon
          buttonText={'마일스톤'}
          isLeftPosition={false}
        />
      </MyDownSidebar>
    </MySidebar>
  );
};

const MySidebar = styled.div`
  & button {
    justify-content: space-between;
    ${fontSize.M}
    width:250px
  }
`;

const MyTopSidebar = styled.div`
  width: 288px;
  height: 96px;
  display: flex;
  border: 1px solid ${colors.gray300};
  border-radius: 16px 16px 0px 0px;
  background: ${colors.gray50};
  align-items: center;
  justify-content: center;
  border-bottom: none;
`;

const MyMiddleSidebar = styled.div`
  border: 1px solid ${colors.gray300};
  display: flex;
  width: 288px;
  height: 96px;
  background: ${colors.gray50};
  justify-content: center;
  align-items: center;
  border-bottom: none;
`;

const MyDownSidebar = styled.div`
  display: flex;
  width: 288px;
  height: 96px;
  border: 1px solid ${colors.gray300};
  background: ${colors.gray50};
  justify-content: center;
  align-items: center;
  border-radius: 0px 0px 16px 16px;
`;
