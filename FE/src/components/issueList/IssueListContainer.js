import React, { useReducer } from 'react';

import styled from 'styled-components';

import { IssueListContent } from './IssueListContent';
import { IssueListHeader } from './IssueListHeader';
import {
  checkBoxReducer,
  initialCheckState
} from '../../stores/checkBoxReducer';

export const CheckboxStateContext = React.createContext();

export const IssueListContainer = () => {
  const [checkState, checkDispatch] = useReducer(
    checkBoxReducer,
    initialCheckState
  );

  return (
    <CheckboxStateContext.Provider value={{ checkState, checkDispatch }}>
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
