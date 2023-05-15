import * as icons from './svgs';

export const Icon = ({
  iconType,
  width = 16,
  height = 16,
  stroke = 'none',
  fill = 'none',
  onClick = null
}) => {
  const IconSvg = icons[iconType];
  return (
    <IconSvg
      width={width}
      height={height}
      stroke={stroke}
      fill={fill}
      onClick={onClick}
    />
  );
};
