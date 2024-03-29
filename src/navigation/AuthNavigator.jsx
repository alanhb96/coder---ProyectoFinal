import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Signup from "../screens/Signup";
import Login from "../screens/Login";

import Header from '../components/Header'

const Stack = createNativeStackNavigator()

const AuthNavigator = () => {
    
    return(
            <Stack.Navigator
                initialRouteName="Login"
                screenOptions={
                    ({navigation, route}) => ({header: () => <Header title={route.name} navigation={navigation} />})
                }
            >
                <Stack.Screen
                    name = "Signup"
                    component = {Signup}
                />
                <Stack.Screen
                    name = "Login"
                    component = {Login}
                />
            </Stack.Navigator>
    )


}

export default AuthNavigator