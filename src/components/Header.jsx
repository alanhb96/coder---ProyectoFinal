import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import {colors} from '../global/colors'
import { AntDesign } from '@expo/vector-icons'; 

const Header = ({title, navigation}) => {
  return (
    <View style={styles.headerContainer}>
      {
        navigation.canGoBack()
          ?
          <TouchableOpacity onPress={navigation.goBack} style={styles.leftButton}>
              <AntDesign name="leftcircleo" size={22} color={colors.contrast} />
          </TouchableOpacity>
          :
          <View></View>
      }
      <Text style={styles.headerTitle}>{title}</Text>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    headerContainer: {
      height: 100,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: colors.primary,
      paddingHorizontal: 16,
    },
    leftButton:{
      marginRight: 16,
    },
    headerTitle:{
        flex: 1,
        textAlign: 'center',
        color: colors.contrast,
        fontFamily: 'Inter-Bold',
        fontSize:22, 
    }
})