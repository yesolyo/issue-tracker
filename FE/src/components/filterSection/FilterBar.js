import React, { useState } from 'react';

import styled from 'styled-components';

import { Icon } from '../../assets/Icon';
import { colors } from '../../styles/color';
import { fontSize, fontType } from '../../styles/font';
import { Dropdown } from '../dropdown/Dropdown';

const filterTabOptions = [
  { id: 'isOpen', option: '열린 이슈', isSelected: true },
  { id: 'isWrittenByMe', option: '내가 작성한 이슈', isSelected: false },
  { id: 'isAssignedToMe', option: '나에게 할당된 이슈', isSelected: false },
  { id: 'commentedByMe', option: '내가 댓글을 남긴 이슈', isSelected: false },
  { id: '!isOpen', option: '닫힌 이슈', isSelected: false }
];

// TODO : uncontrolled component, forwardRef
export const FilterBar = () => {
  const [isFilterTextFocus, setIsFilterTextFocus] = useState(false);
  const [value, setValue] = useState('is:issue is:open');
  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const dropdownInfo = {
    tabId: 'filter',
    tabName: '필터',
    tabOptions: filterTabOptions,
    buttonOption: { size: 's' },
    isLeft: true
  };

  const iconInfo = {
    iconType: 'search',
    fill: colors.gray600,
    width: 11
  };

  const filterInput = {
    type: 'text',
    value,
    onChange: handleChange,
    placeholder: 'Search all issues'
  };

  return (
    <MyfilterBar>
      <Dropdown {...dropdownInfo} />
      <MyIconTextInput
        isFocus={isFilterTextFocus}
        onMouseUp={() => setIsFilterTextFocus(true)}
        onBlur={() => setIsFilterTextFocus(false)}
      >
        <Icon {...iconInfo} />
        <input {...filterInput} />
      </MyIconTextInput>
    </MyfilterBar>
  );
};

const MyfilterBar = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  border-radius: 11px;
  border: 1px solid ${colors.gray300};
  ${fontSize.M}

  > div:first-child {
    border-radius: 11px 0px 0px 11px;
    border-right: 1px solid ${colors.gray300};

    &:hover {
      background: ${colors.gray200};
    }
  }

  > div:last-child {
    height: 100%;
    padding: 0 24px;
  }

  button {
    ${fontType.BOLD}
  }
`;

const MyIconTextInput = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  border-radius: 0px 11px 11px 0px;
  width: 472px;
  gap: 10px;
  ${fontType.LIGHT}
  background: ${({ isFocus }) =>
    isFocus ? `${colors.gray50}` : `${colors.gray200}`};
  box-shadow: ${({ isFocus }) => (isFocus ? `0 0 0 1px #79b1ff` : null)};

  & input {
    width: 100%;
    height: 100%;
    background: transparent;
    border: none;
    outline: none;
    font-size: 15px;
    ${fontType.REGULAR}
    color: ${colors.gray600};
    transition: 200ms cubic-bezier(0, 0, 0.2, 1) 0ms;

    &::placeholder {
      color: ${colors.gray700};
    }
  }
`;
