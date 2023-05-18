import styled from 'styled-components';

import { Icon } from '../../assets/Icon';
import { colors } from '../../styles/color';
import { fontType } from '../../styles/font';
import { Button } from '../button/Button';
import { TextInput } from '../newIssue/TextInput';

const MyfilterBar = styled.div`
  display: flex;
  align-items: center;
  & button {
    justify-content: space-around;
  }
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
  & input {
    border-radius: 0px 11px 11px 0px;
    background: ${colors.gray200};
  }
`;

export const FilterBar = () => {
  const filterConstant = {
    type: 'ghostButton',
    btnColor: colors.gray600,
    backgroundColor: 'transparent',
    hoverColor: colors.gray600,
    btnText: '필터',
    isIcon: true,
    iconType: 'chevronDown',
    isLeftPosition: false
  };

  const filterTextInputConstant = {
    type: 'sideLabeledTextInput',
    iconType: 'search',
    initialText: 'is:issue is:open'
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
          isIcon={filterConstant.isIcon}
          iconType={filterConstant.iconType}
          isLeftPosition={filterConstant.isLeftPosition}
        />
      </LeftFilterBar>
      <RightFilterBar>
        <TextInput
          type={filterTextInputConstant.type}
          isIcon={filterConstant.isIcon}
          iconType={filterTextInputConstant.iconType}
          initialText={filterTextInputConstant.initialText}
        />
      </RightFilterBar>
    </MyfilterBar>
  );
};
