import React, { useEffect, useState } from 'react';

import { Button } from '../components/Button';
import { colors } from '../styles/color';

export const IssueList = () => {
  const [data, setData] = useState([]);
  const buttonStyle = 'ghostButton';
  const buttonColor = colors.navy;

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
      <Button type={buttonStyle} buttonColor={buttonColor} />
    </>
  );
};
