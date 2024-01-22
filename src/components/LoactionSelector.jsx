import { ActivityIndicator, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import {useState,useEffect} from 'react'
import * as Location from 'expo-location'
import { maps_api_key } from '../apis/googleCloud'
import { setUserLocation } from '../features/authSlice'
import { useDispatch, useSelector } from 'react-redux'
import { usePutUserLocationMutation } from '../services/shopService'
import {colors} from '../global/colors'

const LoactionSelector = () => {

    const [location,setLocation] = useState("")
    const [error,setError]= useState("")
    const [address,setAddress]=useState("")
    const localId = useSelector (state=>state.authReducer.localId)
    const [triggerPutUserLocation, result] = usePutUserLocationMutation()


    useEffect(()=>{
        (async ()=>{
            let {status} = await Location.requestForegroundPermissionsAsync()
            if(status!=="granted"){
                setError("No se han ortorgado los permisos para obtener la ubicación")
                return
            }
            let location = await Location.getCurrentPositionAsync()
            setLocation({latitude: location.coords.latitude, longitude: location.coords.longitude})
        })()
    },[])
    console.log(location)

    useEffect(()=>{
        (async ()=>{
            try{
                if(location.latitude){
                    const urlReverseGeocode = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${location.latitude},${location.longitude}&key=${maps_api_key}`
                    const response = await fetch(urlReverseGeocode)
                    const data = await response.json()
                    const formattedAddress = await data.results[0].formatted_address
                    setAddress(formattedAddress)
                }
            }catch(error){
                setError(error.message)
            }
        })()
    },[location])

    const dispatch = useDispatch()

    const onConfirmAddress = () =>{
        const locationFormatted = {
            latitude: location.latitude,
            longitude: location.longitude,
            address: address
        }
        dispatch(setUserLocation(locationFormatted))
        triggerPutUserLocation({location:locationFormatted, localId})
    }

  return (
    <View style={styles.container}>
      <Text style={styles.textTitle}>Actual Loctaion: </Text>
      {
        location.latitude
        ?
        <>
            <Text style={styles.textAddress}>
                {address}
            </Text>
            <Text style={styles.textLocation}>
                (Lat: {location.latitude}, Long:{location.longitude})
            </Text>
            <TouchableOpacity style={styles.btn} onPress={onConfirmAddress}>
                <Text style={styles.textBtn}>Upate Location</Text>
            </TouchableOpacity>
            <MapPreview location={location}/>
        </>
        :
        <ActivityIndicator/>  
    }
    </View>
  )
}

export default LoactionSelector

const styles = StyleSheet.create({
    container: {
        marginTop:20,
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: 130,
        gap:5,
    },
    noLocationContainer: {
        width: 200,
        height: 200,
        borderWidth: 2,
        border: colors.success,
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    btn:{
      padding: 10,
      backgroundColor: colors.success,
      borderRadius:5,
      paddingHorizontal: 15,   
      marginVertical:15,   
    },
    textBtn: {
        fontFamily: 'Inter-Regular',
        color:"#fff"
    },textTitle:{
        fontFamily: "Inter-Bold",
        fontSize:16,
    },
    textAddress: {
        fontFamily:'Inter-Regular'
    },
    textLocation: {
        fontFamily: 'Inter-Regular',
        fontSize:12
    }
})