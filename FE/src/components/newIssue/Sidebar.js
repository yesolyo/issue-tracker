import styled from 'styled-components';

import { colors } from '../../styles/color';
import { fontSize } from '../../styles/font';
import { Button } from '../Button';
const MySidebar = styled.div`
  & button {
    justify-content: space-between;
    ${fontSize.M}
    width:280px
  }
`;
const TopSidebar = styled.div`
  width: 288px;
  height: 96px;
  display: flex;
  border: 1px solid ${colors.gray300};
  border-radius: 16px 16px 0px 0px;
  background: ${colors.gray50};
  align-items: center;
  border-bottom: none;
`;
const MiddleSidebar = styled.div`
  border: 1px solid ${colors.gray300};
  display: flex;
  width: 288px;
  height: 96px;
  align-items: center;
  border-bottom: none;
`;
const DownSidebar = styled.div`
  display: flex;
  width: 288px;
  height: 96px;
  border: 1px solid ${colors.gray300};
  align-items: center;
  border-radius: 0px 0px 16px 16px;
`;

export const Sidebar = () => {
  const sidebarConstant = {
    type: 'ghostButton',
    btnColor: colors.gray600,
    hoverColor: colors.blue,
    backgroundColor: colors.gray50,
    topBtnText: '담당자',
    middleBtnText: '레이블',
    downBtnText: '마일스톤',
    isIcon: true,
    iconType: 'chevronDown',
    isLeftPosition: false
  };

  return (
    <MySidebar>
      <TopSidebar>
        <Button
          type={sidebarConstant.type}
          buttonColor={sidebarConstant.btnColor}
          hoverColor={sidebarConstant.hoverColor}
          backgroundColor={sidebarConstant.backgroundColor}
          buttonText={sidebarConstant.topBtnText}
          isIcon={sidebarConstant.isIcon}
          iconType={sidebarConstant.iconType}
          isLeftPosition={sidebarConstant.isLeftPosition}
        />
      </TopSidebar>
      <MiddleSidebar>
        <Button
          type={sidebarConstant.type}
          buttonColor={sidebarConstant.btnColor}
          hoverColor={sidebarConstant.hoverColor}
          backgroundColor={sidebarConstant.backgroundColor}
          buttonText={sidebarConstant.middleBtnText}
          isIcon={sidebarConstant.isIcon}
          iconType={sidebarConstant.iconType}
          isLeftPosition={sidebarConstant.isLeftPosition}
        />
      </MiddleSidebar>
      <DownSidebar>
        <Button
          type={sidebarConstant.type}
          buttonColor={sidebarConstant.btnColor}
          hoverColor={sidebarConstant.hoverColor}
          backgroundColor={sidebarConstant.backgroundColor}
          buttonText={sidebarConstant.downBtnText}
          isIcon={sidebarConstant.isIcon}
          iconType={sidebarConstant.iconType}
          isLeftPosition={sidebarConstant.isLeftPosition}
        />
      </DownSidebar>
    </MySidebar>
  );
};
