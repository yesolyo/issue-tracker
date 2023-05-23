import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import { FilterBar } from './FilterBar';
import { TabButton } from './TabButton';
import { Button } from '../button/Button';

export const FilterSection = () => {
  const navigate = useNavigate();
  return (
    <MyFilterSection>
      <FilterBar />
      <MyTabButtons>
        <TabButton />
        <Button
          size={'s'}
          color={'containerBlue'}
          iconType={'plus'}
          isIcon
          buttonText={'이슈작성'}
          isLeftPosition
          onClick={() => navigate('/newIssue')}
        />
      </MyTabButtons>
    </MyFilterSection>
  );
};

const MyFilterSection = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px 0;
`;

const MyTabButtons = styled.div`
  display: flex;
  gap: 15px;
  align-items: center;
`;
