export const tabActive = (route: any, focused: any): any => {
  if (route.name === 'Home') {
    return focused
      ? require('../assets/images/home_active.png')
      : require('../assets/images/Home.png');
  } else if (route.name === 'Add') {
    return focused
      ? require('../assets/images/search_active.png')
      : require('../assets/images/search.png');
  }
};
