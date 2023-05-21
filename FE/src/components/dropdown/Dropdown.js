import { useEffect, useRef, useState } from 'react';

import styled from 'styled-components';

import { DropdownPanel } from './DropdownPanel';
import { Button } from '../button/Button';
import { tabButtonOption } from '../button/buttonConstant';

const MyDropdown = styled.div`
  position: relative;
`;

export const Dropdown = ({ isLeft, title, tabName, tabOptions }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [target, setTarget] = useState('');
  const panelRef = useRef(null);
  const selectTarget = (target) => {
    setTarget(target);
  };

  useEffect(() => {
    const handleClick = ({ target }) => {
      if (panelRef.current && !panelRef.current.contains(target)) {
        setIsOpen(false);
      }
    };
    window.addEventListener('mousedown', handleClick);
    return () => window.removeEventListener('mousedown', handleClick);
  }, [panelRef]);

  return (
    <MyDropdown>
      <Button
        {...tabButtonOption}
        buttonText={title}
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      />
      {isOpen && (
        <DropdownPanel
          title={tabName}
          options={tabOptions}
          isLeft={isLeft}
          panelRef={panelRef}
        />
      )}
    </MyDropdown>
  );
};
