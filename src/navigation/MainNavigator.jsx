import {NavigationContainer} from '@react-navigation/native'
import TabNavigator from './TabNavigator'
import AuthNavigator from './AuthNavigator'
import { useSelector, useDispatch } from "react-redux"
import { useEffect } from 'react'
import { setProfilePicture, setUserLocation } from '../features/authSlice'
import { useGetProfilePictureQuery, useGetUserLocationQuery } from '../services/shopService'
import { fetchSession } from "../db"


const MainNavigator = () => {
    const user = useSelector(state=>state.authReducer.user)
    const localId = useSelector(state=>state.authReducer.localId)

    const {data, error, isLoading} = useGetProfilePictureQuery(localId)
    const {data: locationData, error: locationError, isLoading: isLocationLoading} = useGetUserLocationQuery(localId)

    const dispatch = useDispatch()

    useEffect(()=>{
        if (data){
            dispatch(setProfilePicture(data.image))
        }
        if (locationData){
            dispatch(setUserLocation(locationData))
        }
    },[data,locationData])

    useEffect(()=>{
        (async () =>{
            try{
                const session = await fetchSession()
                if(session?.rows.length){
                    console.log("User created")
                    const user = session.rows._array[0]
                    dispatch(setUser(user))
                }
            }catch(error){
                console.log("Error fetching data from local user: ",error.message)
            }
        })()
    },[])

    return(
        <NavigationContainer>
            {user && !isLoading ? <TabNavigator/> : <AuthNavigator/>}
        </NavigationContainer>
    )
}

export default MainNavigator