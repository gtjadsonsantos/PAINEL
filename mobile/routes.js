import { createAppContainer  } from 'react-navigation'
import { createStackNavigator  } from 'react-navigation-stack'

import Init from './src/pages/Init'
import Login from './src/pages/Login'

const Routes = createAppContainer(
    createStackNavigator({
        Init:{
            screen: Init,
            navigationOptions:{
                headerShown: false
            }
        },
        Login:{
            screen: Login,
            navigationOptions:{
                headerShown: false
            }
        }
    },{
        defaultNavigationOptions:{
            headerBackTitleVisible: false,
            header: 'none',
            headerTintColor: '#fff',
            headerStyle:{
                backgroundColor: '#7d40e7'
            }
        },
        initialRouteName: 'Init'
    })
)

export default Routes;