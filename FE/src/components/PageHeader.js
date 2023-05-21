import styled from 'styled-components';

import { MyHeader } from './Header';

const MyPageHeader = styled(MyHeader)``;

export const PageHeader = ({ leftChild, rigthChild }) => {
  return (
    <MyPageHeader>
      {leftChild && <div>{leftChild}</div>}
      {rigthChild && <div>{rigthChild}</div>}
    </MyPageHeader>
  );
};
