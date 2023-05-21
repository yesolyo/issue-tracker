import styled from 'styled-components';

import { colors } from '../../styles/color';
import { fontSize, fontType } from '../../styles/font';
import { Button } from '../button/Button';
import { TextInput } from '../newIssue/TextInput';

const MyfilterBar = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  border-radius: 11px;
  border: 1px solid ${colors.gray300};
  ${fontSize.M}

  > div {
    height: 100%;
    padding: 0px 24px;
    gap: 8px;
  }

  button {
    ${fontType.BOLD}
  }

  input {
    width: 472px;
    ${fontType.LIGHT}
  }
`;

const LeftFilterBar = styled.div`
  display: flex;
  border-radius: 11px 0px 0px 11px;
  border-right: 1px solid ${colors.gray300};

  &:hover {
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
      <TextInput
        type={filterTextInputConstant.type}
        isIcon={filterConstant.isIcon}
        iconType={filterTextInputConstant.iconType}
        initialText={filterTextInputConstant.initialText}
      />
    </MyfilterBar>
  );
};
