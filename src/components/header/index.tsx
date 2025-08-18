import { Image, View, TouchableOpacity } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'

import { styles } from './styles'
import { colors } from '@/styles/colors'

export function Header(){
    return (
        <View style={ styles.header }>
            <Image source={require('@/assets/logo.png')} style={ styles.logo }/>    
            <TouchableOpacity activeOpacity={ 0.7 }>
                <MaterialIcons name="add" size={32} color={ colors.green[300] } ></MaterialIcons>  
            </TouchableOpacity>   
        </View>
    )
}