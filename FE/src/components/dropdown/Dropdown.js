import { useEffect, useRef, useState, useContext } from 'react';

import styled from 'styled-components';

import { DropdownPanel } from './DropdownPanel';
import { Button } from '../button/Button';
export const Dropdown = ({
  tabId,
  tabName,
  type,
  tabOptions,
  buttonOption,
  isLeft,
  setValue
}) => {
  const defaultButtonOption = {
    size: 's',
    color: 'ghostGray',
    iconType: 'chevronDown',
    isIcon: true,
    isLeftPosition: false,
    buttonText: tabName
  };

  const buttonType = buttonOption || defaultButtonOption;
  const [isDropDown, setIsDropDown] = useState(false);
  const [selectedOption, setSelectedOption] = useState('isOpen');
  const [selectedTab, setSelectedTab] = useState('');
  const handleDropdownChange = (selectedOption, selectedTab) => {
    setSelectedOption(selectedOption);
    setSelectedTab(selectedTab);
    setValue(selectedOption);
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
      <Button {...buttonType} />
      {isDropDown && (
        <DropdownPanel
          tabId={tabId}
          tabName={tabName}
          type={type}
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
