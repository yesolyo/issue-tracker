import React, { useEffect, useReducer, useState } from 'react';

import styled from 'styled-components';

import { FilterSection } from '../components/filterSection/FiterSection';
import { Header } from '../components/Header';
import { IssueListContainer } from '../components/issueList/IssueListContainer';
import { filterReducer, initialFilterState } from '../stores/reducer';
import { fetchData } from '../utils/fetch';

export const FilterStateContext = React.createContext();
export const IssueListContext = React.createContext();

export const IssueList = () => {
  const [issues, setIssues] = useState([]);
  const initData = async () => {
    const response = await fetchData('/issues');
    setIssues(response);
  };

  useEffect(() => {
    initData();
  }, []);

  const [state, stateDispatch] = useReducer(filterReducer, initialFilterState);

  return (
    <FilterStateContext.Provider value={{ state, stateDispatch }}>
      <IssueListContext.Provider value={issues}>
        <MyIssueListPage>
          <Header />
          <FilterSection />
          <IssueListContainer />
        </MyIssueListPage>
      </IssueListContext.Provider>
    </FilterStateContext.Provider>
  );
};

const MyIssueListPage = styled.div`
  width: 1280px;
  margin: 0 auto;
`;
