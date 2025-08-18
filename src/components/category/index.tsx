import { Text, Pressable } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'

import { styles } from './styles'
import { colors } from '@/styles/colors'

export function Category(){
    return (
        <Pressable style={ styles.container }>
            <MaterialIcons name='code' size={32} color={ colors.gray[400] }></MaterialIcons>
            <Text style={ styles.name }>Botão</Text>
        </Pressable>
    )
}