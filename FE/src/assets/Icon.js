import * as icons from './svgs';
import { colors } from '../styles/color';

export const Icon = ({
  iconType,
  width = 16,
  height = 16,
  fill = colors.gray50
}) => {
  const IconSvg = icons[iconType];
  return <IconSvg width={width} height={height} fill={fill} />;
};
