import { useEffect, useRef, useState } from 'react';

import styled from 'styled-components';

import { DropdownPanel } from './DropdownPanel';
import { Button } from '../button/Button';

export const Dropdown = ({
  type,
  title,
  tabName,
  tabOptions,
  size,
  buttonOption,
  isLeft
}) => {
  const defaultButtonOption = {
    size: 's',
    color: title === '필터' ? 'ghostBlack' : 'ghostGray',
    iconType: 'chevronDown',
    isIcon: true,
    isLeftPosition: false,
    buttonText: title
  };

  const buttonType = buttonOption || defaultButtonOption;
  const [isDropDown, setIsDropDown] = useState(false);
  const [selectedOption, setSelectedOption] = useState('isOpen');
  const handleDropdownChange = (selectedOption) => {
    setSelectedOption(selectedOption);
  };
  const panelRef = useRef(null);
  useEffect(() => {
    const handleClick = (e) => {
      if (panelRef.current && !panelRef.current.contains(e.target)) {
        setIsDropDown(false);
      }
    };
    window.addEventListener('mousedown', handleClick);
    return () => window.removeEventListener('mousedown', handleClick);
  }, [panelRef]);

  return (
    <MyDropdown
      ref={panelRef}
      onClick={() => {
        setIsDropDown(!isDropDown);
      }}
    >
      <Button
        size={size || 's'}
        color={title === '필터' ? 'ghostBlack' : 'ghostGray'}
        iconType={'chevronDown'}
        isIcon
        isLeftPosition={false}
        buttonText={tabName}
      />
      {isDropDown && (
        <DropdownPanel
          type={type}
          title={tabName}
          options={tabOptions}
          isLeft={isLeft}
          selectedOption={selectedOption}
          handleDropdownChange={handleDropdownChange}
        />
      )}
    </MyDropdown>
  );
};

const MyDropdown = styled.div`
  position: relative;
`;
