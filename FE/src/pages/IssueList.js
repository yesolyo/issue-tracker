import React, { useEffect, useReducer } from 'react';

import styled from 'styled-components';

import { FilterSection } from '../components/filterSection/FiterSection';
import { IssueListContainer } from '../components/issueList/IssueListContainer';
import { filterReducer, initialFilterState } from '../stores/reducer';
import { fetchData } from '../utils/fetch';

export const IssueListContext = React.createContext();

export const IssueList = () => {
  const [state, dispatch] = useReducer(filterReducer, initialFilterState);
  const initData = async () => {
    const response = await fetchData(`/issueList`);
    dispatch({ type: 'INIT', payload: response });
  };

  useEffect(() => {
    initData();
  }, []);

  return (
    <IssueListContext.Provider value={{ state, dispatch }}>
      <MyIssueListPage>
        <FilterSection />
        <IssueListContainer />
      </MyIssueListPage>
    </IssueListContext.Provider>
  );
};

const MyIssueListPage = styled.div`
  width: 1280px;
  margin: 0 auto;
`;
