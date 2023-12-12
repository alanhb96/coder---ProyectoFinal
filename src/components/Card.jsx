import { StyleSheet, View } from 'react-native'
import {colors} from '../global/colors'

const Card = ({children,style}) => {
  return (
    <View style={{...styles.container,...style}}>
      {children}
    </View>
  )
}

export default Card

const styles = StyleSheet.create({
    container:{
        shadowColor: colors.gray,
        shadowOffset:{
            width:3,
            height:5,
        },
        elevation:5,
        shadowOpacity:1,
        shadowRadius:1,
    },
})