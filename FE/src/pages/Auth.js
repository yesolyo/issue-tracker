import { useEffect } from 'react';

import { useNavigate } from 'react-router-dom';

export const Auth = () => {
  const navigate = useNavigate();
  const AUTH_URI = 'http://13.209.232.172:8080/githublogin';
  const url = new URL(window.location.href);
  const queryCode = url.searchParams.get('code');

  useEffect(() => {
    const getToken = async () => {
      try {
        const response = await fetch(`${AUTH_URI}?code=${queryCode}`);
        const data = await response.json();
        console.log('data', data);

        localStorage.getItem('loginToken', data.jwt);

        // navigate('/issues');
      } catch (error) {
        console.log(error);
      }
    };
    getToken();
  }, [location, AUTH_URI]);

  return <></>;
};
