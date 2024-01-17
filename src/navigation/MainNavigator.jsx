import {NavigationContainer} from '@react-navigation/native'
import TabNavigator from './TabNavigator'
import AuthNavigator from './AuthNavigator'
import { useSelector, useDispatch } from "react-redux"
import { useEffect } from 'react'
import { setProfilePicture } from '../features/authSlice'
import { useGetProfilePicture } from '../services/shopService'


const MainNavigator = ( ) => {
    const user = useSelector(state=>state.authReducer.user)
    const localId = useSelector(state=>state.authReducer.localId)

    const {data,error,isLoading} = useGetProfilePicture(localId)

    const dispatch = useDispatch()

    useEffect(()=>{
        if (data){
            dispatch(setProfilePicture(data.image))
        }
    },[data])

    return(
        <NavigationContainer>
            {user && !isLoading ? <TabNavigator/> : <AuthNavigator/>}
        </NavigationContainer>
    )
}

export default MainNavigator