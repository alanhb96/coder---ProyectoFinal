import { ActivityIndicator } from 'react-native';
import {useFonts} from 'expo-font'
import MainNavigator from './src/navigation/MainNavigator';
import {Provider} from 'react-redux'
import store from './src/store';
import {init} from './src/db'

export default function App() {

  init()
  .then(()=>console.log("DataBase Init"))
  .catch((error)=>console.log(error.message))

  const [fontLoaded] = useFonts({
    'Inter-Bold': require('./assets/fonts/Inter-Bold.ttf'),
    'Inter-Regular': require('./assets/fonts/Inter-Regular.ttf'),
  })

  if(!fontLoaded) return <ActivityIndicator/>

  return (
    <>
    <Provider store={store}>
      <MainNavigator/>
    </Provider>
    </>
  );
}

