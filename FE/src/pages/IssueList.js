// import React, { useEffect, useState } from 'react';

// import { Button } from '../components/Button';
// import { FilterBar } from '../components/filterBar/FilterBar';
// import { IssueListHeader } from '../components/issueList/IssueListHeader';
// import { TabButton } from '../components/TabButton';
// import { colors } from '../styles/color';

// export const IssueList = () => {
//   const [data, setData] = useState([]);

//   const addIssueConstant = {
//     type: 'containerButton',
//     btnColor: colors.gray50,
//     backgroundColor: colors.blue,
//     hoverColor: colors.gray50,
//     btnText: '이슈 작성',
//     iconType: 'plus',
//     isLeftPosition: true
//   };

//   const issueTabConstant = {
//     type: 'ghostButton',
//     btnColor: colors.gray700,
//     backgroundColor: colors.gray100,
//     hoverColor: colors.gray700,
//     lefBtnText: `레이블(${data.countInfo?.labelCount})`,
//     rightBtnText: `마일스톤(${data.countInfo?.milestoneCount})`,
//     leftIconType: 'label',
//     rightIconType: 'milestone',
//     isLeftPosition: true,
//     isRightPositin: false
//   };

//   useEffect(() => {
//     const fetchPosts = async () => {
//       const response = await fetch('/issueList');
//       const resData = await response.json();
//       setData(resData);
//     };
//     fetchPosts();
//   }, []);

//   return (
//     <>
//       <Button
//         type={addIssueConstant.type}
//         buttonColor={addIssueConstant.btnColor}
//         hoverColor={addIssueConstant.hoverColor}
//         backgroundColor={addIssueConstant.backgroundColor}
//         buttonText={addIssueConstant.btnText}
//         iconType={addIssueConstant.iconType}
//         isLeftPosition={addIssueConstant.isLeftPosition}
//       />
//       <TabButton
//         type={issueTabConstant.type}
//         buttonColor={issueTabConstant.btnColor}
//         hoverColor={issueTabConstant.hoverColor}
//         backgroundColor={issueTabConstant.backgroundColor}
//         leftext={issueTabConstant.lefBtnText}
//         rightText={issueTabConstant.rightBtnText}
//         leftIconType={issueTabConstant.leftIconType}
//         rightIconType={issueTabConstant.rightIconType}
//         isLeftPosition={issueTabConstant.isLeftPosition}
//       />
//       <FilterBar />
//       <IssueListHeader value={data.countInfo} />
//     </>
//   );
// };

import React, { useEffect, useState } from 'react';

import styled from 'styled-components';

import { Header } from '../components/Header';
import { IssueListContainer } from '../components/IssueListContainer';

export const IssueListContext = React.createContext();

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
        <IssueListContainer />
      </IssueListPage>
    </IssueListContext.Provider>
  );
};

const IssueListPage = styled.div`
  width: 1280px;
  height: 95px;
  margin: 0 auto;
`;
