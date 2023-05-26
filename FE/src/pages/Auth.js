import { useEffect } from 'react';

import { useNavigate } from 'react-router-dom';

export const Auth = () => {
  const navigate = useNavigate();
  const url = new URL(window.location.href);
  const queryCode = url.searchParams.get('code');

  useEffect(() => {
    navigate('/IssueList');
  });
};
