import React, { useEffect, useState } from 'react';

import styled from 'styled-components';

import { Header } from '../components/Header';
import { NewIssueContainer } from '../components/newIssue/NewIssueContainer';
import { NewIssueFooter } from '../components/newIssue/NewIssueFooter';
import { PageHeader } from '../components/PageHeader';

export const NewIssueContext = React.createContext();

export const NewIssue = () => {
  const [data, dispatch] = useState([]);
  const [title, setTitle] = useState('');
  const [comment, setComment] = useState('');
  const [assignee, setAssignee] = useState('');
  const [label, setlabel] = useState('');
  const [milestone, setMilestone] = useState('');
  const [newIssue, setNewIssue] = useState({});
  // TODO : Fetch -> user 정보 필요
  const initData = async () => {
    const response = await fetch('/issues');
    const resData = await response.json();
    dispatch(resData);
  };
  useEffect(() => {
    initData();
    setNewIssue({ assignee, label, milestone });
  }, []);

  return (
    <NewIssueContext.Provider value={data}>
      <MyNewIssuePage>
        <Header />
        <PageHeader leftChild={'새로운 이슈 작성'} />
        <NewIssueContainer
          titleValue={title}
          titleSetValue={setTitle}
          commentValue={comment}
          commentSetValue={setComment}
          assigneeSetValue={setAssignee}
          labelSetValue={setlabel}
          milestoneSetValue={setMilestone}
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
