import { useState } from 'react';

import styled from 'styled-components';

import { Icon } from '../assets/Icon';
import { Button } from '../components/button/Button';
import { TextInput } from '../components/textForm/TextInput';
import { fontSize, fontType } from '../styles/font';

export const Login = () => {
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');

  const logoInfo = {
    iconType: 'logotypeLarge',
    width: 342,
    height: 72
  };
  const loginUri =
    'https://github.com/login/oauth/authorize?client_id=3b1dfca72b24afb9ebb2&redirect_uri=http://localhost:3000/auth&scope=user';
  const loginHandler = () => {
    window.location.href = loginUri;
  };
  return (
    <MyLogin>
      <Icon {...logoInfo} />
      <Button
        size={'l'}
        color={'containerBlack'}
        isIcon={false}
        buttonText={'GitHub 계정으로 로그인'}
        isLeftPosition
        onClick={loginHandler}
      />

      <span>or</span>
      <TextInput label={'아이디'} size={'sm'} value={id} setValue={setId} />
      <TextInput label={'비밀번호'} size={'sm'} value={pw} setValue={setPw} />
      <Button
        size={'l'}
        color={'containerBlue'}
        isIcon={false}
        buttonText={'아이디로 로그인'}
        disabled={id.length < 1 || pw.length < 1}
        isLeftPosition
      />
      <Button
        size={'s'}
        iconType={'plus'}
        color={'ghostBlack'}
        isIcon
        buttonText={'회원가입'}
        isLeftPosition
      />
    </MyLogin>
  );
};

const MyLogin = styled.form`
  gap: 25px;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  align-items: center;
  width: 1280px;

  > svg {
      margin: 50px;
    }

    &:not(:last-child) {
      ${fontSize.L};
      ${fontType.BOLD};
    }
  }
`;
