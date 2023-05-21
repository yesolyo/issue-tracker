import { useState, useRef } from 'react';

import styled from 'styled-components';

import { DropdownPanel } from './DropdownPanel';
import { Button } from '../button/Button';
import { tabButtonOption } from '../button/buttonConstant';

const MyDropdown = styled.div`
  position: relative;
`;

export const Dropdown = ({ tabName, tabOptions }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [target, setTarget] = useState('');

  // TODO : 팝업 외 다른 영역 클릭시 닫히게 구현
  const selectTarget = (target) => {
    setTarget(target);
  };
  const panelRef = useRef(null);
  return (
    <MyDropdown>
      <Button
        {...tabButtonOption}
        buttonText={tabName}
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      />
      {isOpen && (
        <DropdownPanel
          panelRef={panelRef}
          title={tabName}
          options={tabOptions}
          target={target}
          selectedTarget={selectTarget}
        />
      )}
    </MyDropdown>
  );
};
