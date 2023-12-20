import { ActivityIndicator } from 'react-native';
import {useFonts} from 'expo-font'
import TabNavigator from './src/navigation/TabNavigator';

export default function App() {

  const [fontLoaded] = useFonts({
    'Inter-Bold': require('./assets/fonts/Inter-Bold.ttf'),
    'Inter-Regular': require('./assets/fonts/Inter-Regular.ttf'),
  })

  if(!fontLoaded) return <ActivityIndicator/>

  return (
    <>
      <TabNavigator/>
    </>
  );
}

