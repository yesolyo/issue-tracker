import styled from 'styled-components';

import { TextArea } from '../textForm/TextArea';
import { TextInput } from '../textForm/TextInput';

export const NewIssueContent = () => {
  return (
    <MyNewIssueContent>
      <TextInput label={'제목'} size={'lg'} />
      <TextArea label={'코멘트를 입력하세요'} size={'l'} />
    </MyNewIssueContent>
  );
};

const MyNewIssueContent = styled.form`
  gap: 10px;
  display: flex;
  flex-direction: column;
  width: 912px;
`;
