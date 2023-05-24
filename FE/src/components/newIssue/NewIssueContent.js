import { useState } from 'react';

import styled from 'styled-components';

import { colors } from '../../styles/color';
import { fontSize, fontType } from '../../styles/font';
import { TextArea } from '../textForm/TextArea';
import { TextInput } from '../textForm/TextInput';

export const NewIssueContent = ({
  titleValue,
  titleSetValue,
  commentValue,
  commentSetValue
}) => {
  const titleInputConstant = {
    type: 'defaultTextInput',
    isIcon: false,
    initialText: '제목'
  };

  return (
    <MyNewIssueContent>
      <TextInput
        label={'제목'}
        size={'lg'}
        value={titleValue}
        setValue={titleSetValue}
      />
      <TextArea
        label={'코멘트를 입력하세요'}
        size={'l'}
        value={commentValue}
        setValue={commentSetValue}
      />
    </MyNewIssueContent>
  );
};

const MyNewIssueContent = styled.form`
  gap: 10px;
  display: flex;
  flex-direction: column;
  width: 912px;
`;
