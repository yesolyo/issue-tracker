import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

import { defaultColor } from './color';
import { fontSize, fontType } from './font';

export const GlobalStyle = createGlobalStyle`
${reset}
body {
  width: 100%;
  background-color: ${defaultColor.body};
  font: inherit;
  color: ${defaultColor.textDefault};
  font-family: 'Pretendard', sans-serif;
  ${fontSize.M};
  ${fontType.REGULAR};
}
`;
