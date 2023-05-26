import * as icons from './svgs';
import { colors } from '../styles/color';

export const Icon = ({
  iconType,
  width = 16,
  height,
  fill = colors.gray50,
  onClick
}) => {
  const IconSvg = icons[iconType];
  return (
    <IconSvg
      width={width}
      height={height || width}
      fill={fill}
      onClick={onClick}
    />
  );
};
