import React, { useEffect, useState } from 'react';

import { Button } from '../components/Button';
import { FilterBar } from '../components/filterBar/FilterBar';
import { IssueListHeader } from '../components/issueList/IssueListHeader';
import { Sidebar } from '../components/newIssue/Sidebar';
import { TabButton } from '../components/TabButton';
import { colors } from '../styles/color';

export const IssueList = () => {
  const [data, setData] = useState([]);

  const addBtnConstant = {
    type: 'containerButton',
    btnColor: colors.gray50,
    backgroundColor: colors.blue,
    hoverColor: colors.gray50,
    btnText: '이슈 작성',
    isIcon: true,
    iconType: 'plus',
    isLeftPosition: true
  };

  const issueTabConstant = {
    type: 'ghostButton',
    btnColor: colors.gray700,
    backgroundColor: colors.gray100,
    hoverColor: colors.gray700,
    lefBtnText: `레이블(${data.countInfo?.labelCount})`,
    rightBtnText: `마일스톤(${data.countInfo?.milestoneCount})`,
    isIcon: true,
    leftIconType: 'label',
    rightIconType: 'milestone',
    isLeftPosition: true,
    isRightPositin: false
  };

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch('/issueList');
      const resData = await response.json();
      setData(resData);
    };
    fetchPosts();
  }, []);

  return (
    <>
      <Button
        type={addBtnConstant.type}
        buttonColor={addBtnConstant.btnColor}
        hoverColor={addBtnConstant.hoverColor}
        backgroundColor={addBtnConstant.backgroundColor}
        buttonText={addBtnConstant.btnText}
        isIcon={addBtnConstant.isIcon}
        iconType={addBtnConstant.iconType}
        isLeftPosition={addBtnConstant.isLeftPosition}
      />
      <TabButton
        type={issueTabConstant.type}
        buttonColor={issueTabConstant.btnColor}
        hoverColor={issueTabConstant.hoverColor}
        backgroundColor={issueTabConstant.backgroundColor}
        leftext={issueTabConstant.lefBtnText}
        rightText={issueTabConstant.rightBtnText}
        isIcon={issueTabConstant.isIcon}
        leftIconType={issueTabConstant.leftIconType}
        rightIconType={issueTabConstant.rightIconType}
        isLeftPosition={issueTabConstant.isLeftPosition}
      />
      <FilterBar />
      <IssueListHeader value={data.countInfo} />
    </>
  );
};
