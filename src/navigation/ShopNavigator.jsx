import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

import Categories from '../screens/Categories'
import ProductByCategory from '../screens/ProductByCategory'
import ProductDetail from '../screens/ProductDetail'
import Header from '../components/Header'

const Stack = createNativeStackNavigator()

const ShopNavigator = () => {
    
    return(
            <Stack.Navigator
                initialRouteName="Categories"
                screenOptions={
                    ({navigation, route}) => ({header: () => <Header title={route.name} navigation={navigation} />})
                }
            >
                <Stack.Screen
                    name = "Categories"
                    component = {Categories}
                    options={{
                        title: 'Categories',
                    }}
                />
                <Stack.Screen
                    name = "Products"
                    component = {ProductByCategory}
                    options={{
                        title: 'Products',
                    }}
                />
                <Stack.Screen
                    name = "Detail"
                    component = {ProductDetail}
                    options={{
                        title: 'Detail',
                    }}
                />
            </Stack.Navigator>
    )


}

export default ShopNavigator