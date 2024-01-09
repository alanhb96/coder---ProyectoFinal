import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Header from "../components/Header";
import Orders from "../screens/Orders";

const Stack = createNativeStackNavigator();

const OrdersNavigator = () => {
    return (
            <Stack.Navigator
                initialRouteName="Order"
                screenOptions={
                    ({ navigation, route }) => ({
                        header: () => <Header title={route.name} navigation={navigation}/>,                     
                    })
                }
            >
                <Stack.Screen
                    name="Orders"
                    component={Orders}
                />
            </Stack.Navigator>
    )
}

export default OrdersNavigator