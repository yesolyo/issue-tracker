import { useEffect, useRef, useState, useContext } from 'react';

import styled from 'styled-components';

import { DropdownPanel } from './DropdownPanel';
import { NewIssueContext } from '../../pages/NewIssue';
import { Button } from '../button/Button';
import { Sidebar } from '../newIssue/Sidebar';
export const Dropdown = ({
  tabId,
  type,
  title,
  tabName,
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
    buttonText: title
  };

  const buttonType = buttonOption || defaultButtonOption;
  const [isDropDown, setIsDropDown] = useState(false);
  const [selectedOption, setSelectedOption] = useState('isOpen');
  const [selectedTab, setSelectedTab] = useState('');
  const [selectedAssignee, setSelectedAssignee] = useState('');
  const [selectedLabel, setSelectedLabel] = useState('');
  const [selectedMilestone, setSelectedMilestone] = useState('');

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
      <div>그래</div>
      {isDropDown && (
        <DropdownPanel
          tabId={tabId}
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
