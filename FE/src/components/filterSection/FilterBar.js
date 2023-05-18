import styled from 'styled-components';

import { Icon } from '../../assets/Icon';
import { colors } from '../../styles/color';
import { fontType } from '../../styles/font';
import { Button } from '../button/Button';

const MyfilterBar = styled.div`
  display: flex;
`;

const LeftFilterBar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 128px;
  height: 40px;
  border-radius: 11px 0px 0px 11px;
  border: 1px solid ${colors.gray300};
  border-right: none;
  background: ${colors.gray100};
  &:hover {
    background: ${colors.gray200};
  }
`;

const RightFilterBar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  width: 472px;
  height: 40px;
  background: ${colors.gray200};
  border: 1px solid ${colors.gray300};
  border-radius: 0px 11px 11px 0px;
`;

const InputFilterBar = styled.input`
  background: transparent;
  width: 430px;
  height: 20px;
  border: none;
  background-color: none;
  ${fontType.REGULAR}
`;

export const FilterBar = () => {
  const filterConstant = {
    type: 'ghostButton',
    btnColor: colors.gray600,
    backgroundColor: 'transparent',
    hoverColor: colors.gray600,
    btnText: '필터',
    iconType: 'chevronDown',
    isLeftPosition: false
  };

  return (
    <MyfilterBar>
      <LeftFilterBar>
        <Button
          type={filterConstant.type}
          buttonColor={filterConstant.btnColor}
          backgroundColor={filterConstant.backgroundColor}
          hoverColor={filterConstant.hoverColor}
          buttonText={filterConstant.btnText}
          iconType={filterConstant.iconType}
          isLeftPosition={filterConstant.isLeftPosition}
        />
      </LeftFilterBar>
      <RightFilterBar>
        <Icon iconType={'search'} fill={colors.gray600} width={10} />
        <InputFilterBar placeholder="is:issue is:open" />
      </RightFilterBar>
    </MyfilterBar>
  );
};
