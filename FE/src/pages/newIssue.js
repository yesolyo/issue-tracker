import { Button } from '../components/Button';
import { FilterBar } from '../components/filterBar/FilterBar';
import { Sidebar } from '../components/newIssue/Sidebar';
import { colors } from '../styles/color';

export const NewIssue = () => {
  const cancelBtnConstant = {
    type: 'ghostButton',
    btnColor: colors.gray700,
    backgroundColor: 'transparent',
    hoverColor: colors.gray700,
    btnText: '작성 취소',
    isIcon: true,
    iconType: 'xSquare',
    isLeftPosition: true
  };

  const saveBtnConstant = {
    type: 'containerButton',
    btnColor: colors.gray50,
    backgroundColor: colors.blue,
    hoverColor: colors.gray50,
    btnText: '완료',
    btnWidth: '240px',
    btnHeight: '56px',
    isIcon: false,
    iconType: 'plus',
    isLeftPosition: true
  };

  return (
    <>
      <Button
        type={cancelBtnConstant.type}
        buttonColor={cancelBtnConstant.btnColor}
        hoverColor={cancelBtnConstant.hoverColor}
        backgroundColor={cancelBtnConstant.backgroundColor}
        buttonText={cancelBtnConstant.btnText}
        isIcon={cancelBtnConstant.isIcon}
        iconType={cancelBtnConstant.iconType}
        isLeftPosition={cancelBtnConstant.isLeftPosition}
      />
      <Button
        type={saveBtnConstant.type}
        buttonColor={saveBtnConstant.btnColor}
        hoverColor={saveBtnConstant.hoverColor}
        backgroundColor={saveBtnConstant.backgroundColor}
        buttonText={saveBtnConstant.btnText}
        buttonWidth={saveBtnConstant.btnWidth}
        buttonHeight={saveBtnConstant.btnHeight}
        isIcon={saveBtnConstant.isIcon}
        iconType={saveBtnConstant.iconType}
        isLeftPosition={saveBtnConstant.isLeftPosition}
      />
      <Sidebar />
      <FilterBar />
    </>
  );
};
