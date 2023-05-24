import { useState } from 'react';

import styled from 'styled-components';

import { Icon } from '../../assets/Icon';
import { colors } from '../../styles/color';
import { fontSize, fontType } from '../../styles/font';
import { Dropdown } from '../dropdown/Dropdown';

const filterTabOptions = [
  { id: 'isOpen', isSelected: true, option: '열린 이슈' },
  { id: 'isWrittenByMe', isSelected: false, option: '내가 작성한 이슈' },
  { id: 'isAssignedToMe', isSelected: false, option: '나에게 할당된 이슈' },
  { id: 'commentedByMe', isSelected: false, option: '내가 댓글을 남긴 이슈' },
  { id: '!isOpen', isSelected: false, option: '닫힌 이슈' }
];

export const FilterBar = () => {
  const [value, setValue] = useState('is:issue is:open');
  const handleChange = (e) => {
    setValue(e.target.value);
  };
  return (
    <MyfilterBar>
      <Dropdown
        isLeft
        title={'필터'}
        tabName={'이슈'}
        tabOptions={filterTabOptions}
      />
      <MyIconTextInput>
        <Icon
          iconType={'search'}
          fill={colors.gray600}
          width={11}
          height={11}
        />
        {/* TODO : 활성화되면 Input text color: gray900 으로 변경 */}
        <input
          type="text"
          value={value}
          onChange={handleChange}
          placeholder="Search all issues"
        />
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

  > div {
    height: 100%;
    padding: 0px 24px;
    gap: 8px;
  }

  > div:first-child {
    border-radius: 11px 0px 0px 11px;
    border-right: 1px solid ${colors.gray300};

    &:hover {
      background: ${colors.gray200};
    }
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
