import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

import Header from '../components/Header'
import Cart from '../screens/Cart'

const Stack = createNativeStackNavigator()

const CartNavigator = () => {
    
    return(
            <Stack.Navigator
                initialRouteName="Categories"
                screenOptions={
                    ({navigation, route}) => ({header: () => <Header title={route.name} navigation={navigation} />})
                }
            >
                <Stack.Screen
                    name = "Cart"
                    component = {Cart}
                    options={{
                        title: 'Cart',
                    }}
                />
            </Stack.Navigator>
    )


}

export default CartNavigator