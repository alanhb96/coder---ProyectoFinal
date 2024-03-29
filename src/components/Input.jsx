import { StyleSheet, Text, View, TextInput, Keyboard } from 'react-native'
import { useState } from 'react'
import { colors } from '../global/colors'

const Input = ({ label, isSecureEntry = false, error = "", onChange}) => {
    const [input, setInput] = useState()

    const onHandleChangeText = (text) => {
        setInput(text)
        onChange(text)
    }

  return (
    <View style={styles.inputContainer}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={styles.input}
        onChangeText={onHandleChangeText}
        secureTextEntry={isSecureEntry}
        value={input}
      />
      {error && <Text style={styles.error}>{error}</Text>}
    </View>
  )
}

export default Input

const styles = StyleSheet.create({
    inputContainer:{
        justifyContent:'center',
        width: '70%'
    },
    input:{
        borderWidth:1,
        borderColor: colors.primary,
        borderRadius:10,
        width:'90%',
        backgroundColor: colors.contrastSecond,
        color:'#fff',
        padding: 8
    },
    label:{
        fontFamily: 'Inter-Regular',
        color: "#000000",
        paddingLeft: 5,
        marginBottom:4,
    },
    error:{
        padding:10,
        color: '#000000',
    }
})