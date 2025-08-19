import { View } from 'react-native'
import { Header } from '@/components/header'
import { Category } from '@/components/category'

import { styles } from '@/app/index/styles'

export default function Index(){
    return (
        <View style={ styles.container }>
            <Header />
            <Category name="Projeto" icon="code" isSelected />
            <Category name="Vídeo" icon="movie" isSelected={false} />
            <Category name="Site" icon="language" isSelected={false} />
        </View>
    )
}