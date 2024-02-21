import React, {useEffect, useState} from 'react';
import {Keyboard} from 'react-native';
import Svg, {Path, SvgProps} from 'react-native-svg';

const PlusIcon = ({color, width, height}: SvgProps) => {
  const [isKeyboardVisible, setKeyboardVisible] = useState(false);

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => {
        setKeyboardVisible(true); // or some other action
      },
    );
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        setKeyboardVisible(false); // or some other action
      },
    );

    return () => {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
    };
  }, []);

  return (
    <Svg
      width={width}
      height={height}
      style={{marginTop: isKeyboardVisible ? 24 : 24, marginLeft: 12}}
      viewBox="0 0 32 30"
      fill="none"
      x="http://www.w3.org/2000/svg">
      <Path
        d="M12.0003 0C5.38338 0 0.000242233 5.38309 0.000242233 12.0002C0.000242233 18.6173 5.38338 24 12.0003 24C18.6173 24 24.0002 18.6175 24.0002 12.0002C24.0002 5.3829 18.6173 0 12.0003 0ZM17.6261 12.3805C17.6261 12.5825 17.4741 12.7504 17.2718 12.7504H12.9445C12.8414 12.7504 12.7509 12.8309 12.7509 12.9338V17.2716C12.7509 17.4732 12.5922 17.6265 12.391 17.6265H11.6266C11.4245 17.6265 11.25 17.4732 11.25 17.2716V12.9338C11.25 12.8309 11.1762 12.7504 11.0727 12.7504H6.75377C6.55183 12.7504 6.37421 12.5825 6.37421 12.3805V11.6162C6.37421 11.4148 6.55183 11.25 6.75377 11.25H11.0727C11.1762 11.25 11.25 11.1662 11.25 11.0625V6.75289C11.25 6.55095 11.4243 6.37372 11.6266 6.37372H12.391C12.592 6.37372 12.7509 6.55095 12.7509 6.75289V11.0625C12.7509 11.1662 12.8342 11.25 12.9384 11.25H17.2718C17.4741 11.25 17.6261 11.4148 17.6261 11.6162V12.3805Z"
        fill={color}
      />
    </Svg>
  );
};

export default PlusIcon;
