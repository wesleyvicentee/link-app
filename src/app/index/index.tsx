import { View } from 'react-native'
import { Header } from '@/components/header'
import { Categories } from '@/components/categories'

import { styles } from '@/app/index/styles'

export default function Index(){
    return (
        <View style={ styles.container }>
            <Header />
            <Categories />
        </View>
    )
}