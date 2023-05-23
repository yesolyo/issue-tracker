import { useEffect, useRef, useState } from 'react';

import styled from 'styled-components';

import { DropdownPanel } from './DropdownPanel';
import { Button } from '../button/Button';

export const Dropdown = ({
  isLeft,
  title,
  tabName,
  tabOptions,
  size,
  isNotIssue
}) => {
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
      <Button
        size={size || 's'}
        color={title === '필터' ? 'ghostBlack' : 'ghostGray'}
        iconType={'chevronDown'}
        isIcon
        isLeftPosition={false}
        buttonText={title}
      />
      {isOpen && (
        <DropdownPanel
          title={tabName}
          options={tabOptions}
          isLeft={isLeft}
          isNotIssue={isNotIssue}
        />
      )}
    </MyDropdown>
  );
};

const MyDropdown = styled.div`
  position: relative;
`;
