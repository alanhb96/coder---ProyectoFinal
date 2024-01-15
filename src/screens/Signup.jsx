import { StyleSheet, Text, TouchableOpacity, View, KeyboardAvoidingView} from 'react-native'
import Input from '../components/Input'
import { useState, useEffect } from 'react'
import { useSignUpMutation } from '../services/authService'
import { useDispatch } from 'react-redux'
import { setUser } from '../features/authSlice'
import { colors } from '../global/colors'
import { signupSchema } from '../validations/signupSchema'


const Signup = ({navigation}) => {

    const [email,setEmail] = useState("")
    const [password,setPassword] =useState("")
    const [confirmPassword,setConfirmPassword] = useState("")
    const [emailError, setEmailError] = useState("")
    const [passwordError, setPasswordError] = useState("")
    const [confirmPasswordError, setConfirmPasswordError] = useState("")


    const [triggerSignup,result] = useSignUpMutation()

    const onSubmit = () => {
      setEmailError("")
      setPasswordError("")
      setConfirmPasswordError("")
        try{
          signupSchema.validateSync({email,password,confirmPassword},{abortEarly:false})
        }catch(error){
          error.errors.map(e => {
            console.log(Object.keys(e)[0])
            const customError = Object.values(e)[0]
            switch (Object.keys(e)[0]) {
              case "empty_email":
                setEmailError(customError)
              case "invalid_email":
                setEmailError(customError)
              case "empty_password":
                setPasswordError(customError)
              case "invalid_password":
                setPasswordError(customError)
              case "invalid_confirm_password":
                setConfirmPasswordError(customError)
              case "invalid_match_password":
                setConfirmPasswordError(customError)
              default:
                break
            }
          })
        }
        triggerSignup ({email,password})
    }

    const dispatch = useDispatch()

    useEffect(()=>{
        if(result.data){
            dispatch(setUser(result.data))
        }
    }, [result])


  return (
  <KeyboardAvoidingView style={styles.container} behavior='height'>
      <Input
        label="Email:"
        onChange={setEmail}
        error={emailError}
        />
      <Input
        label="Password:"
        onChange={setPassword}
        isSecureEntry={true}
        error={passwordError}
        />
      <Input
        label="Repeat password:"
        onChange={setConfirmPassword}
        isSecureEntry={true}
        error={confirmPasswordError}
        />
      <TouchableOpacity style={styles.btn} onPress={onSubmit}>
        <Text style={styles.btnText}>Register</Text>
      </TouchableOpacity>
      <View style={styles.altContainer}>
        <Text style={styles.subtitle}> Already have an account?</Text>
        <TouchableOpacity onPress={()=>{navigation.navigate("Login")}}>
            <Text style={styles.subtitleLink}>Log in!</Text>
        </TouchableOpacity>
      </View>
  </KeyboardAvoidingView>
  )
}

export default Signup

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