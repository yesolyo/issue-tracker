import { useEffect, useRef, useState } from 'react';

import styled from 'styled-components';

import { DropdownPanel } from './DropdownPanel';
import { Button } from '../button/Button';
import { tabButtonOption } from '../button/buttonConstant';

export const Dropdown = ({ isLeft, title, tabName, tabOptions }) => {
  const [isOpen, setIsOpen] = useState(false);
  // const [target, setTarget] = useState('');
  // const selectTarget = (target) => {
  //   setTarget(target);
  // };

  const panelRef = useRef(null);
  useEffect(() => {
    const handleClick = (e) => {
      if (panelRef.current && !panelRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    window.addEventListener('mousedown', handleClick);
    return () => window.removeEventListener('mousedown', handleClick);
  }, [panelRef]);

  return (
    <MyDropdown
      ref={panelRef}
      onClick={() => {
        setIsOpen(!isOpen);
      }}
    >
      <Button {...tabButtonOption} buttonText={title} />
      {isOpen && (
        <DropdownPanel title={tabName} options={tabOptions} isLeft={isLeft} />
      )}
    </MyDropdown>
  );
};

const MyDropdown = styled.div`
  position: relative;
`;
