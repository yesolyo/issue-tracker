import { TextInput } from './TextInput';
export const NewIssueContent = () => {
  const titleInputConstant = {
    type: 'defaultTextInput',
    isIcon: false,
    initialText: '제목',
    inputWidth: '912px',
    inputHeight: '56px'
  };
  return (
    <>
      <TextInput
        type={titleInputConstant.type}
        isIcon={titleInputConstant.isIcon}
        initialText={titleInputConstant.initialText}
        inputWidth={titleInputConstant.inputWidth}
        inputHeight={titleInputConstant.inputHeight}
      />
    </>
  );
};
