import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import { colors } from '../../styles/color';
import { Button } from '../button/Button';

const MyNewIssueFooter = styled.div`
  width: 1280px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 20px;
`;

export const NewIssueFooter = () => {
  const navigate = useNavigate();
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
    <MyNewIssueFooter>
      <Button
        onClick={() => navigate(-1)}
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
    </MyNewIssueFooter>
  );
};
