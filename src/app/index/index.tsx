import { Text, View } from 'react-native'
import { styles } from './styles'

export default function Index(){
    return (
        <View style={ styles.container }>
            <Text style={ styles.textDefault }>Vamo que vamo!</Text>
            <Text style={ styles.textDefault }>wesley</Text>
        </View>
    )
}