import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import { IssueDetailContent } from './IssueDetailContent';
import { Button } from '../button/Button';
import { SideBar } from '../newIssue/Sidebar';

export const IssueDetailSidebar = () => {
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
    <SidebarSection>
      <SideBar />
      <Button {...btnInfo} />
    </SidebarSection>
  );
};

const SidebarSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 20px;
  > button {
    margin-right: 25px;
  }
`;
