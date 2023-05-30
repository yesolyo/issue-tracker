import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import { IssueDetailContent } from './IssueDetailContent';
import { IssueDetailSidebar } from './IssueDetailSidebar';
import { Button } from '../button/Button';
import { SideBar } from '../newIssue/SideBar';

export const IssueDetailContainer = () => {
  const navigate = useNavigate();
  const btnInfo = {
    size: 'xs',
    color: 'ghostRed',
    iconType: 'trash',
    isIcon: true,
    buttonText: '이슈 삭제',
    isLeftPosition: true,
    onClick: () => navigate('/issues')
  };
  return (
    <MysIssueDetailContainer>
      <IssueDetailContent />
      <IssueDetailSidebar />
    </MysIssueDetailContainer>
  );
};

const MysIssueDetailContainer = styled.div`
  display: flex;
  width: 1220px;
  margin: 0px auto;
  gap: 35px;
`;
