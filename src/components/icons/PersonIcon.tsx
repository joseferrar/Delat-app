import React from 'react';
import Svg, {Path, SvgProps} from 'react-native-svg';

const BMarkIcon = ({color, width, height}: SvgProps) => {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 22 22"
      fill="none"
      x="http://www.w3.org/2000/svg">
      <Path
        d="M11 10.065C13.1149 10.065 14.8294 8.35053 14.8294 6.23562C14.8294 4.12072 13.1149 2.40625 11 2.40625C8.88509 2.40625 7.17062 4.12072 7.17062 6.23562C7.17062 8.35053 8.88509 10.065 11 10.065Z"
        stroke={color}
      />
      <Path
        d="M18.7516 19.5422C18.7516 17.4864 17.9349 15.5147 16.4812 14.061C15.0275 12.6073 13.0558 11.7906 11 11.7906C8.94416 11.7906 6.97252 12.6073 5.51882 14.061C4.06512 15.5147 3.24844 17.4864 3.24844 19.5422H18.7516Z"
        stroke={color}
      />
    </Svg>
  );
};

export default BMarkIcon;
