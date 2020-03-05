import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import Main from './pages/Main';
import User from './pages/User';

const MainStack = createBottomTabNavigator(
    {
        Main: {
            screen: Main,
        },
        User: {
            screen: User,
        },
    },
    {
        tabBarOptions: {
            activeTintColor: '#fff',
            labelStyle: {
                fontSize: 12,
            },
            style: {
                backgroundColor: '#7159c1',
            },
        },
    }
);

const App = createBottomTabNavigator({
    Main: {
        screen: MainStack,
    },
});

export default createAppContainer(App);
