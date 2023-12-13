import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Dashboard from '../../../screens/Dashboard';
import Add from '../../../screens/Add';

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Dashboard} />
      <Tab.Screen name="Settings" component={Add} />
    </Tab.Navigator>
  );
}

export default MyTabs;