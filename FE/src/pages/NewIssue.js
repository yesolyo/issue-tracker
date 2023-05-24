import React, { useEffect, useState } from 'react';

import styled from 'styled-components';

import { NewIssueContainer } from '../components/newIssue/NewIssueContainer';
import { NewIssueFooter } from '../components/newIssue/NewIssueFooter';
import { PageHeader } from '../components/PageHeader';

export const NewIssueContext = React.createContext();

export const NewIssue = () => {
  const [data, dispatch] = useState([]);
  const [title, setTitle] = useState('');
  const [comment, setComment] = useState('');
  // TODO : Fetch -> user 정보 필요
  const initData = async () => {
    const response = await fetch('/issueList');
    const resData = await response.json();
    dispatch(resData);
  };

  useEffect(() => {
    initData();
  }, []);

  return (
    <NewIssueContext.Provider value={data}>
      <MyNewIssuePage>
        <PageHeader leftChild={'새로운 이슈 작성'} />
        <NewIssueContainer
          titleValue={title}
          titleSetValue={setTitle}
          commentValue={comment}
          commentSetValue={setComment}
        />
        <NewIssueFooter titleValue={title} commentValue={comment} />
      </MyNewIssuePage>
    </NewIssueContext.Provider>
  );
};

const MyNewIssuePage = styled.div`
  width: 1280px;
  margin: 0px auto;
`;
