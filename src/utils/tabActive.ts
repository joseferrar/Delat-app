export const tabActive = (route: any, focused: any): any => {
  if (route.name === 'Home') {
    return focused
      ? require('../assets/images/home_active.png')
      : require('../assets/images/Home.png');
  } else if (route.name === 'Search') {
    return focused
      ? require('../assets/images/search_active.png')
      : require('../assets/images/search.png');
  } else if (route.name === 'Accounts') {
    return focused
      ? require('../assets/images/person_active.png')
      : require('../assets/images/person.png');
  } else if (route.name === 'Bookmark') {
    return focused
      ? require('../assets/images/bookmark_active.png')
      : require('../assets/images/bookmark.png');
  } else if (route.name === 'Remainder') {
    return focused
      ? require('../assets/images/alarm_active.png')
      : require('../assets/images/alarm.png');
  } else if (route.name === 'Add') {
    return focused
      ? require('../assets/images/plus_active.png')
      : require('../assets/images/plus.png');
  }
};
