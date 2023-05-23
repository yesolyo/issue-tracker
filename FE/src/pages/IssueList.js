import React, { useEffect, useState } from 'react';

import styled from 'styled-components';

import { FilterSection } from '../components/filterSection/FiterSection';
import { IssueListContainer } from '../components/issueList/IssueListContainer';
import { fetchData } from '../utils/fetch';

export const IssueListContext = React.createContext();

export const IssueList = () => {
  // TODO : dispatch, useReducer 사용예정
  const [data, dispatch] = useState([]);
  const [isOpen, setIsOpen] = useState(true);
  const initData = async (issueListState) => {
    const response = await fetchData(`/issueList?status=${issueListState}`);
    dispatch(response);
  };

  useEffect(() => {
    initData(isOpen);
  }, []);

  return (
    <IssueListContext.Provider value={data}>
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
