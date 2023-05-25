import { useEffect, useRef, useState } from 'react';

import styled from 'styled-components';

import { DropdownPanel } from './DropdownPanel';
import { Button } from '../button/Button';

const defaultButtonOption = {
  color: 'ghostGray',
  iconType: 'chevronDown',
  isIcon: true,
  isLeftPosition: false
};

export const Dropdown = ({
  type,
  tabId,
  tabName,
  tabOptions,
  buttonOption,
  isLeft,
  setValue,
  optionalArea
}) => {
  const [isDropDown, setIsDropDown] = useState(false);
  const [selectedOption, setSelectedOption] = useState('isOpen');
  const [selectedTab, setSelectedTab] = useState('');
  const handleDropdownChange = (selectedOption, selectedTab) => {
    setSelectedOption(selectedOption);
    setSelectedTab(selectedTab);
    if (setValue) setValue(selectedOption);
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
      <Button {...defaultButtonOption} buttonText={tabName} {...buttonOption} />
      {isDropDown && (
        <DropdownPanel
          tabId={tabId}
          tabName={tabName}
          type={type}
          options={tabOptions}
          isLeft={isLeft}
          selectedOption={selectedOption}
          handleDropdownChange={handleDropdownChange}
          optionalArea={optionalArea}
        />
      )}
    </MyDropdown>
  );
};

const MyDropdown = styled.div`
  position: relative;
`;
