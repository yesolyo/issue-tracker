import React, { useEffect, useState } from 'react';

import { Button } from '../components/Button';
import { FilterBar } from '../components/filterBar/FilterBar';
import { IssueListHeader } from '../components/issueList/IssueListHeader';
import { TabButton } from '../components/TabButton';
import { colors } from '../styles/color';

export const IssueList = () => {
  const [data, setData] = useState([]);

  const ListConstant = {
    type: 'containerButton',
    color: colors.gray50,
    backgroundColor: colors.blue,
    hoverColor: colors.gray50,
    text: '이슈 작성',
    iconText: 'plus',
    isLeftPosition: true
  };

  const tabConstant = {
    type: 'ghostButton',
    color: colors.gray700,
    backgroundColor: colors.gray100,
    hoverColor: colors.gray700,
    leftext: `레이블(${data.countInfo?.labelCount})`,
    rightText: `마일스톤(${data.countInfo?.milestoneCount})`,
    labelimg: 'label',
    milestoneImg: 'milestone',
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
        type={ListConstant.type}
        buttonColor={ListConstant.color}
        backgroundColor={ListConstant.backgroundColor}
        hoverColor={ListConstant.hoverColor}
        buttonText={ListConstant.text}
        iconType={ListConstant.iconText}
        isLeftPosition={ListConstant.isLeftPosition}
      />
      <TabButton
        type={tabConstant.type}
        buttonColor={tabConstant.color}
        backgroundColor={tabConstant.backgroundColor}
        leftext={tabConstant.leftext}
        rightText={tabConstant.rightText}
        leftIconType={tabConstant.labelimg}
        rightIconType={tabConstant.milestoneImg}
        isLeftPosition={tabConstant.isLeftPosition}
        hoverColor={tabConstant.hoverColor}
      />
      <FilterBar />
      <IssueListHeader value={data.countInfo} />
    </>
  );
};
