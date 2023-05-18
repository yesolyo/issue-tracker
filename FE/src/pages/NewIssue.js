import styled from 'styled-components';

import { Header } from '../components/Header';

const NewIssuePage = styled.div`
  width: 1280px;
  margin: 0px auto;
`;

export const NewIssue = () => {
  // TODO : Fetch -> user 정보 필요
  return (
    <NewIssuePage>
      {/* TODO : Header 고정으로 빼기  */}
      <Header />
      <Header text={'새로운 이슈 작성'} />
    </NewIssuePage>
  );
};
