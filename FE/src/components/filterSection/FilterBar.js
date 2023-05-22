import styled from 'styled-components';

import { colors } from '../../styles/color';
import { fontSize, fontType } from '../../styles/font';
import { Dropdown } from '../dropdown/Dropdown';
import { TextInput } from '../textForm/TextInput';

const filterTabOptions = [
  { isSelected: true, option: '열린 이슈' },
  { isSelected: false, option: '내가 작성한 이슈' },
  { isSelected: false, option: '나에게 할당된 이슈' },
  { isSelected: false, option: '내가 댓글을 남긴 이슈' },
  { isSelected: false, option: '닫힌 이슈' }
];

export const FilterBar = () => {
  const filterTextInputOptions = {
    type: 'sideLabeledTextInput',
    isIcon: true,
    iconType: 'search',
    initialText: 'is:issue is:open'
  };

  return (
    <MyfilterBar>
      <Dropdown
        isLeft
        title={'필터'}
        tabName={'이슈'}
        tabOptions={filterTabOptions}
      />
      <TextInput {...filterTextInputOptions} />
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

  input {
    width: 472px;
    ${fontType.LIGHT}
  }
`;
