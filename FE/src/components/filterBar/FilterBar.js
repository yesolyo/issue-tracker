import styled from 'styled-components';

import { Icon } from '../../assets/Icon';
import { search } from '../../assets/svgs';
import { colors } from '../../styles/color';
import { fontType } from '../../styles/font';
import { Button } from '../Button';

const MyfilterBar = styled.div`
  display: flex;
`;

const MyLeftFilterBar = styled.div`
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

const MyRightFilterBar = styled.div`
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

const MyInputFilterBar = styled.input`
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
    color: colors.gray600,
    backgroundColor: 'transparent',
    hoverColor: colors.gray600,
    text: '필터',
    img: 'chevronDown',
    isLeftPosition: false
  };

  return (
    <MyfilterBar>
      <MyLeftFilterBar>
        <Button
          type={filterConstant.type}
          buttonColor={filterConstant.color}
          backgroundColor={filterConstant.backgroundColor}
          hoverColor={filterConstant.hoverColor}
          buttonText={filterConstant.text}
          iconType={filterConstant.img}
          isLeftPosition={filterConstant.isLeftPosition}
        />
      </MyLeftFilterBar>
      <MyRightFilterBar>
        <Icon iconType={'search'} fill={colors.gray600} width={10} />
        <MyInputFilterBar placeholder="is:issue is:open" />
      </MyRightFilterBar>
    </MyfilterBar>
  );
};
