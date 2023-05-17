import React, { useEffect, useState } from 'react';

import styled from 'styled-components';

import { Button } from '../components/button/Button';
import { FilterBar } from '../components/filterBar/FilterBar';
import { Header } from '../components/Header';
import { IssueListContainer } from '../components/issueList/IssueListContainer';
import { colors } from '../styles/color';

export const IssueListContext = React.createContext();

const IssueListPage = styled.div`
  width: 1280px;
  height: 95px;
  margin: 0 auto;
`;

const addIssueConstant = {
  type: 'containerButton',
  btnColor: colors.gray50,
  backgroundColor: colors.blue,
  hoverColor: colors.gray50,
  btnText: '이슈 작성',
  iconType: 'plus',
  isLeftPosition: true
};

export const IssueList = () => {
  // dispatch, useReducer 사용예정
  const [data, dispatch] = useState([]);
  const initData = async () => {
    const response = await fetch('/issueList');
    const resData = await response.json();
    dispatch(resData);
  };

  useEffect(() => {
    initData();
  }, []);

  return (
    <IssueListContext.Provider value={data}>
      <IssueListPage>
        <Header />
        <FilterBar />
        <Button
          type={addIssueConstant.type}
          buttonColor={addIssueConstant.btnColor}
          hoverColor={addIssueConstant.hoverColor}
          backgroundColor={addIssueConstant.backgroundColor}
          buttonText={addIssueConstant.btnText}
          iconType={addIssueConstant.iconType}
          isLeftPosition={addIssueConstant.isLeftPosition}
        />
        <IssueListContainer />
      </IssueListPage>
    </IssueListContext.Provider>
  );
};
