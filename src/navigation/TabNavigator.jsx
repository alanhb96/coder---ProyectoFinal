import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import {StyleSheet} from 'react-native'
import { Entypo , Feather} from '@expo/vector-icons'; 
import { colors } from '../global/colors'
import ShopNavigator from "./ShopNavigator";
import CartNavigator from "./CartNavigator";
import OrdersNavigator from "./OrdersNavigator";

const Tab = createBottomTabNavigator()

const TabNavigator = () => {
    
    return(
            <Tab.Navigator
                screenOptions={{
                    headerShown: false,
                    tabBarShowLabel: false,
                    tabBarStyle:styles.tabBar,                   
                }
                }
            >
                <Tab.Screen 
                    name="ShopStack" 
                    component={ShopNavigator}
                    options = {{
                        tabBarIcon:({focused})=>(
                            <Entypo name="shop" size={24} color={focused?colors.contrastSecond:colors.contrast} />
                        )
                    }}
                />
                <Tab.Screen 
                    name="CartStack" 
                    component={CartNavigator}
                    options = {{
                        tabBarIcon:({focused})=>(
                            <Feather name="shopping-cart" size={24} color={focused?colors.contrastSecond:colors.contrast} />
                        )
                    }}
                />
                <Tab.Screen 
                    name="OrdersStack" 
                    component={OrdersNavigator}
                    options = {{
                        tabBarIcon:({focused})=>(
                            <Entypo name="shopping-bag" size={24} color={focused?colors.contrastSecond:colors.contrast} />
                        )
                    }}
                />
            </Tab.Navigator>

    )

}

export default TabNavigator

const styles = StyleSheet.create({
    tabBar:{
        backgroundColor: colors.primary,
        shadowColor: colors.gray,
        elevation:1,
        position: 'absolute',
        left: 25,
        right:25,
        botom:25,
        height: 60,
        borderRadius: 15,
    }
})
