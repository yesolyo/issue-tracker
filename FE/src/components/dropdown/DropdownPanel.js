import styled from 'styled-components';

import { DropdownPanelItem } from './DropdownPanelItem';
import { Icon } from '../../assets/Icon';
import { colors } from '../../styles/color';
import { fontSize, fontType } from '../../styles/font';

export const DropdownPanel = ({ title, options, isLeft }) => {
  const isSelected = false;
  return (
    // TODO : 로직 정리, select 적용
    <MyDropdownPanel isLeft={isLeft}>
      <h3>{title} 필터</h3>
      <ul>
        {title === '이슈' || (
          <li>
            {title}
            {title === '담당자' || title === '작성자' ? `가` : `이`} 없는 이슈
            <Icon
              iconType={isSelected ? 'checkOnCircle' : 'checkOffCircle'}
              fill={colors.gray700}
            />
          </li>
        )}
        {options &&
          options.map((option) => (
            <DropdownPanelItem key={option.id || option.option} {...option} />
          ))}
      </ul>
    </MyDropdownPanel>
  );
};

const MyDropdownPanel = styled.div`
  position: absolute;
  top: 45px;
  right: ${({ isLeft }) => isLeft || 0};
  left: ${({ isLeft }) => isLeft && '-2px'};
  width: 240px;
  border: 1px solid ${colors.gray300};
  box-shadow: 0px 0px 8px rgba(20, 20, 43, 0.04);
  border-radius: 16px;

  h3 {
    height: 36px;
    padding: 8px 16px;
    background-color: ${colors.gray100};
    border-radius: 16px 16px 0px 0px;
    border-bottom: 1px solid ${colors.gray300};
    display: flex;
    align-items: center;
    ${fontSize.S};
    ${fontType.REGULAR};
    color: ${colors.gray900};
  }

  div {
    width: 160px;
  }

  li {
    cursor: pointer;
    height: 45px;
    padding: 8px 16px;
    background-color: ${colors.gray50};
    display: flex;
    align-items: center;
    justify-content: space-between;
    ${fontSize.M};
    ${fontType.LIGHT};
    color: ${colors.gray700};
    gap: 8px;

    &:last-child {
      border-radius: 0px 0px 16px 16px;
    }

    &:not(:last-child) {
      border-bottom: 1px solid ${colors.gray300};
    }

    &:hover {
      font-weight: 500;
    }
  }
`;
