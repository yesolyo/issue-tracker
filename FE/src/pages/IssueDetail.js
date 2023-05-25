import React, { useEffect, useState } from 'react';

import { useParams } from 'react-router-dom';

import { IssueDetailHeader } from '../components/issueDetail/IssueDetailHeader';
import { fetchAll } from '../utils/fetch';
export const IssueDetailContext = React.createContext();
export const IssueDetail = () => {
  const [issueDetail, setIssueDetail] = useState([]);
  const { id } = useParams();
  const initData = async () => {
    const response = await fetchAll('/issueDetail', '/issueDetail/comment');
    setIssueDetail(response);
  };
  useEffect(() => {
    initData();
  }, []);
  return (
    <IssueDetailContext.Provider value={issueDetail}>
      <IssueDetailHeader />
    </IssueDetailContext.Provider>
  );
};
