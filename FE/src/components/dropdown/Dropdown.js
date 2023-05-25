import { useEffect, useRef, useState } from 'react';

import styled from 'styled-components';

import { DropdownPanel } from './DropdownPanel';
import { fetchData } from '../../utils/fetch';
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
  filterOptions,
  buttonOption,
  isLeft,
  setValue,
  optionalArea
}) => {
  const [isDropDown, setIsDropDown] = useState(false);
  const [selectedOption, setSelectedOption] = useState('isOpen');
  const [selectedTab, setSelectedTab] = useState('');
  const [tabOptionsInfo, setTabOptionsInfo] = useState(null);

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

  const fetchSelectedTab = async (selectedTab, filterOptions) => {
    const selectedTabApi =
      selectedTab === 'assignees' || selectedTab === 'author'
        ? 'user'
        : selectedTab;
    const response = await fetchData(`/${selectedTabApi}`);
    const tabData = await getFilteredOptions(filterOptions, response);
    setTabOptionsInfo(tabData);
  };

  const getFilteredOptions = (filterOptions, tabOptionsInfo) => {
    return tabOptionsInfo?.map((option) => filterOptions(option));
  };

  const handleDropdownTabMouseDown = () => {
    setIsDropDown(!isDropDown);
    setSelectedTab(tabId);
    if (tabId === 'filter') return;
    !isDropDown && fetchSelectedTab(tabId, filterOptions);
  };

  return (
    <MyDropdown ref={panelRef} onMouseDown={handleDropdownTabMouseDown}>
      <Button {...defaultButtonOption} buttonText={tabName} {...buttonOption} />
      {isDropDown && (
        <DropdownPanel
          tabId={tabId}
          tabName={tabName}
          type={type}
          options={tabOptions || tabOptionsInfo}
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
