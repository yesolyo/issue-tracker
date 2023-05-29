import styled from 'styled-components';

import { IssueDetailContent } from './IssueDetailContent';
import { Button } from '../button/Button';
import { SideBar } from '../newIssue/SideBar';
export const IssueDetailContainer = () => {
  const btnInfo = {
    size: 'xs',
    color: 'ghostRed',
    iconType: 'trash',
    isIcon: true,
    buttonText: '이슈 삭제',
    isLeftPosition: true
  };
  return (
    <MysIssueDetailContainer>
      <IssueDetailContent />
      <SidebarSection>
        <SideBar />
        <Button {...btnInfo} />
      </SidebarSection>
    </MysIssueDetailContainer>
  );
};

const MysIssueDetailContainer = styled.div`
  display: flex;
  width: 1220px;
  margin: 0px auto;
  gap: 35px;
`;

const SidebarSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 20px;
  > button {
    margin-right: 25px;
  }
`;
