import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Header from '../components/Header'
import Profile from '../screens/Profile'
import ImageSelector from '../screens/ImageSelector'

const Stack = createNativeStackNavigator()

const ProfileNavigator = () => {
    
    return(
            <Stack.Navigator
                initialRouteName="Profile"
                screenOptions={
                    ({navigation, route}) => ({header: () => <Header title={route.name} navigation={navigation} />})
                }
            >
                <Stack.Screen
                    name = "Profile"
                    component = {Profile}
                    options={{
                        title: 'Profile',
                    }}
                />
                <Stack.Screen
                    name = "Select image"
                    component = {ImageSelector}
                    options={{
                        title: 'Profile',
                    }}
                />
            </Stack.Navigator>
    )


}

export default ProfileNavigator