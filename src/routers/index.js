import { createStackNavigator, createAppContainer } from 'react-navigation';
import Login from './login/Login';
export default createAppContainer(
  createStackNavigator(
    {
      Login: {
        screen: Login
      }
    },
    {
      headerMode: 'none',
      mode: 'card',
      navigationOptions: {
        headerTitle: null,
        header: null
      }
    }
  )
);
