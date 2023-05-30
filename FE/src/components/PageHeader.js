import styled from 'styled-components';

import { MyHeader } from './Header';
import { colors } from '../styles/color';
import { fontType } from '../styles/font';

export const PageHeader = ({
  leftChild,
  middleChild,
  rigthChild,
  value,
  inputValue,
  inputSetValue
}) => {
  return (
    <MyPageHeader>
      {middleChild
        ? (
          <MyLeftPageHeader>
            {value
              ? (
                <>
                  {leftChild && (
                    <input
                      type="text"
                      value={inputValue}
                      onChange={(e) => {
                        inputSetValue(e.target.value);
                      }}
                    />
                  )}
                </>
              )
              : (
                <>
                  {leftChild && <div>{leftChild}</div>}
                  {middleChild && <div>{middleChild}</div>}
                </>
              )}
          </MyLeftPageHeader>
        )
        : (
          <>{leftChild && <div>{leftChild}</div>}</>
        )}
      {rigthChild && <MyrightPageHeader>{rigthChild}</MyrightPageHeader>}
    </MyPageHeader>
  );
};

const MyPageHeader = styled(MyHeader)``;
const MyLeftPageHeader = styled.div`
  display: flex;
  gap: 10px;
  >div: last-child {
    color: ${colors.gray600};
  }

  > input {
    width: 1008px;
    height: 40px;
    background: transparent;
    border: none;
    outline: none;
    font-size: 15px;
    ${fontType.REGULAR}
    color: ${colors.gray600};
    transition: 200ms cubic-bezier(0, 0, 0.2, 1) 0ms;

    &::placeholder {
      color: ${colors.gray700};
    }
  }
`;
const MyrightPageHeader = styled.div`
  display: flex;
  gap: 10px;
`;
