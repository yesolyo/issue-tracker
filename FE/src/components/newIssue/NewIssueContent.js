import styled from 'styled-components';

import { colors } from '../../styles/color';
import { fontSize, fontType } from '../../styles/font';
import { TextArea } from '../textForm/TextArea';
import { TextInput } from '../textForm/TextInput';

export const NewIssueContent = () => {
  const titleInputConstant = {
    type: 'defaultTextInput',
    isIcon: false,
    initialText: '제목'
  };

  return (
    <MyNewIssueContent>
      <form>
        <TextInput label={'제목'} size={'lg'} />
      </form>
    </MyNewIssueContent>
  );
};

const MyNewIssueContent = styled.div`
  gap: 10px;
  display: flex;
  flex-direction: column;
  width: 912px;
`;
