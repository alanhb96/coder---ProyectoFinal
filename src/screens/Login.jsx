import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Input from '../components/Input'
import { useEffect, useState } from 'react'
import { useLogInMutation } from '../services/authService'
import { useDispatch } from 'react-redux'
import { setUser } from '../features/authSlice'
import { colors } from '../global/colors'
import { insertSession } from '../db'

const Login = ({navigation}) => {
    const [email,setEmail] = useState("")
    const [password,setPassword] =useState("")

    const [triggerLogIn,result] = useLogInMutation()

    const onSubmit = () => {
        triggerLogIn ({email,password})
    }

    const dispatch = useDispatch()

    useEffect(()=>{
        if(result.data){
            dispatch(setUser(result.data))
            insertSession({
              localId:result.data.localId,
              email:result.data.email,
              token:result.data.token
        })
        .then(result=>console.log("User inserted correctyl: ",result))
        .catch(error=>console.log("Error while inserting user: ",error))
        }
    }, [result])

  return (
    <View style={styles.container}>
      <Input
        label="Email:"
        onChange={setEmail}
      />
      <Input
        label="Password:"
        onChange={setPassword}
        isSecureEntry={true}
      />
      <TouchableOpacity style={styles.btn} onPress={onSubmit}>
        <Text style={styles.btnText}>Log In</Text>
      </TouchableOpacity>
      <View style={styles.altContainer}>
        <Text style={styles.subtitle}> You don't have an account yet?</Text>
        <TouchableOpacity onPress={()=>{navigation.navigate("Signup")}}>
            <Text style={styles.subtitleLink}>Sign Up!</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Login

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.primary,
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        gap: 10,
    },
    btn: {
        padding: 10,
        backgroundColor: colors.secondary,
        borderRadius: 8,
        margin: 5,

    },
    btnText: {
        color: "#fff",
        fontFamily: "Inter-Bold"
    },
    altContainer: {
        flexDirection: 'row',
        gap: 5,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 50,
    },
    subtitle: {
        color: "#000000",
        fontFamily: "Inter-Bold",
        fontSize: 12,
    },
    subtitleLink: {
        fontFamily: "Inter-Regular",
        color: "#000000",
        fontSize: 11,
        textDecorationLine: 'underline'
    }
})