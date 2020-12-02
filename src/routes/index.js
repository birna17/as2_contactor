import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Main from '../views/Main';
import Contacts from '../views/Contacts';
import Details from '../views/Details';

const StackNavigator = createStackNavigator({
  Main,
  Contacts,
  Details,
});

export default createAppContainer(StackNavigator);
