import React from 'react';
import Svg, {Path, SvgProps} from 'react-native-svg';

const HomeIcon = ({color, width, height}: SvgProps) => {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 32 30"
      fill="none"
      x="http://www.w3.org/2000/svg">
      <Path
        d="M16 2.505L10.669 7.50282V5.50313H6.404V11.5013L2.649 15.0216L3.403 15.7284L16 3.91875L28.597 15.7284L29.351 15.0216L16 2.505ZM7.47 6.50344H9.602V8.50219L7.469 10.5019V6.50344H7.47Z"
        fill={color}
      />
      <Path
        d="M6.404 15.4997V27.495H13.868V20.4975H18.133V27.495H25.597V15.4997L16.001 6.50342L6.405 15.4997H6.404ZM24.53 26.4956H19.199V19.4981H12.801V26.4956H7.47V15.914L16 7.91717L24.53 15.914V26.4956Z"
        fill={color}
      />
    </Svg>
  );
};

export default HomeIcon;
