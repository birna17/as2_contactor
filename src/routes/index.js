import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Main from '../views/Main';
import Contacts from '../views/Contacts';

const StackNavigator = createStackNavigator({
  Main,
  Contacts,
});

export default createAppContainer(StackNavigator);
