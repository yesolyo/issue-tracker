import styled from 'styled-components';

import { TextArea } from './TextArea';
import { TextInput } from './TextInput';
import { colors } from '../../styles/color';
import { fontSize, fontType } from '../../styles/font';

const MyNewIssueContent = styled.div`
  gap: 10px;
  display: flex;
  flex-direction: column;
  width: 912px;

  & textarea {
    background: ${colors.gray200};
    height: 435px;
    padding: 24px;
    border-radius: 11px;
    border: 1px solid ${colors.gray300};
    ${fontSize.M}
    ${fontType.REGULAR}
  }
`;

export const NewIssueContent = () => {
  const titleInputConstant = {
    type: 'defaultTextInput',
    isIcon: false,
    initialText: '제목'
  };

  return (
    <MyNewIssueContent>
      <TextInput {...titleInputConstant} />
      <TextArea initialText={'코멘트를 입력하세요'}></TextArea>
    </MyNewIssueContent>
  );
};
