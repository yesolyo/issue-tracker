import { Button } from '../components/Button';
import { colors } from '../styles/color';

export const newIssue = () => {
  const cancelBtnConstant = {
    type: 'ghostButton',
    btnColor: colors.gray700,
    backgroundColor: 'transparent',
    hoverColor: colors.gray700,
    btnText: '작성 취소',
    iconType: 'xSquare',
    isLeftPosition: true
  };
  return (
    <Button
      type={cancelBtnConstant.type}
      buttonColor={cancelBtnConstant.btnColor}
      hoverColor={cancelBtnConstant.hoverColor}
      backgroundColor={cancelBtnConstant.backgroundColor}
      buttonText={cancelBtnConstant.btnText}
      iconType={cancelBtnConstant.iconType}
      isLeftPosition={cancelBtnConstant.isLeftPosition}
    />
  );
};
