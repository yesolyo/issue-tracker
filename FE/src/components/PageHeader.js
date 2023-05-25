import styled from 'styled-components';

import { MyHeader } from './Header';
import { colors } from '../styles/color';

export const PageHeader = ({ leftChild, middleChild, rigthChild }) => {
  return (
    <MyPageHeader>
      {middleChild
        ? (
          <LeftPageHeader>
            {leftChild && <div>{leftChild}</div>}
            {middleChild && <div>{middleChild}</div>}
          </LeftPageHeader>
        )
        : (
          <>{leftChild && <div>{leftChild}</div>}</>
        )}
      {rigthChild && <div>{rigthChild}</div>}
    </MyPageHeader>
  );
};

const MyPageHeader = styled(MyHeader)``;
const LeftPageHeader = styled.div`
  display: flex;
  gap: 10px;
  >div: last-child {
    color: ${colors.gray600};
  }
`;
