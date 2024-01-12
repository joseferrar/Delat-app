import React from 'react';
import Svg, {Path, SvgProps} from 'react-native-svg';

const MarkIcon = ({color, width, height}: SvgProps) => {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 24 36"
      fill="none"
      x="http://www.w3.org/2000/svg">
      <Path
        d="M21 7.5H9C7.89542 7.5 7 8.50737 7 9.75V31.5L15 25.5L23 31.5V9.75C23 8.50737 22.1046 7.5 21 7.5Z"
        stroke={color}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};

export default MarkIcon;
