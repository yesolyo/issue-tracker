import React, { useReducer } from 'react';

import styled from 'styled-components';

import { IssueListContent } from './IssueListContent';
import { IssueListHeader } from './IssueListHeader';
import { checkReducer, initialCheckState } from '../../stores/reducer';

export const CheckboxStateContext = React.createContext();

export const IssueListContainer = () => {
  const [check, checkDispatch] = useReducer(checkReducer, initialCheckState);

  return (
    <CheckboxStateContext.Provider value={{ check, checkDispatch }}>
      <MyIssueListContainer>
        <IssueListHeader />
        <IssueListContent />
      </MyIssueListContainer>
    </CheckboxStateContext.Provider>
  );
};

const MyIssueListContainer = styled.div`
  border: 1px solid #d9dbe9;
  border-radius: 16px;
`;
