import { useState } from 'react';

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

export const FilterBar = () => {
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
      <MyIconTextInput>
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
  background: ${colors.gray200};
  border-radius: 0px 11px 11px 0px;
  width: 472px;
  gap: 10px;
  ${fontType.LIGHT}

  & input {
    width: 100%;
    height: 100%;
    background: transparent;
    border: none;
    outline: none;
    ${fontType.REGULAR}
    color: ${colors.gray600};

    &::placeholder {
      color: ${colors.gray700};
    }
  }

  &: hover {
    background: ${colors.gray50};
    border: 1px solid ${colors.gray400};
  }
`;
