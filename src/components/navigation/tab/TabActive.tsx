import React from 'react';
import HomeIcon from '../../icons/HomeIcon';
import useTheme from '../../../hooks/useTheme';
import AlermIcon from '../../icons/AlermIcon';
import BMarkIcon from '../../icons/PersonIcon';
import MarkIcon from '../../icons/MarkIcon';
import PlusIcon from '../../icons/PlusIcon';
import SettingIcon from '../../icons/SettingIcon';

const TabActive = (route: any, focused: any) => {
  const theme = useTheme();
  if (route.name === 'Home') {
    return (
      <HomeIcon
        color={focused ? theme.colors.primary : theme.colors.text}
        width={35}
        height={35}
      />
    );
  } else if (route.name === 'Remainder') {
    return (
      <AlermIcon
        color={focused ? theme.colors.primary : theme.colors.text}
        width={30}
        height={30}
      />
    );
  } else if (route.name === 'Accounts') {
    return (
      <SettingIcon
        color={focused ? theme.colors.primary : theme.colors.text}
        width={30}
        height={30}
      />
    );
  } else if (route.name === 'Bookmark') {
    return (
      <MarkIcon
        color={focused ? theme.colors.primary : theme.colors.text}
        width={40}
        height={38}
      />
    );
  } else if (route.name === 'Add') {
    return (
      <PlusIcon
        color={focused ? theme.colors.primary : theme.colors.text}
        width={68}
        height={68}
      />
    );
  }
};

export default TabActive;
