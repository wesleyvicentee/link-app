import { View, FlatList } from 'react-native'
import { useState } from 'react'

import { Header } from '@/components/header'
import { Categories } from '@/components/categories'
import { Link } from '@/components/link'
import { LinkModal } from '@/components/link-modal'
import { categories } from '@/utils/categories'

import { router } from "expo-router";

import { styles } from '@/app/index/styles'

export default function Index(){
    const [category, setCategory] = useState(categories[0].name)

    return (
        <View style={ styles.container }>
            <Header />
            <Categories selected={category} onChange={setCategory}/>

            <FlatList
                data={['1', '2', '3']}
                keyExtractor={item => item}
                renderItem={( item ) => (
                    <Link
                        name={'Wesley Vicente'}
                        url={'https://www.linkedin.com/in/wesley-ricardo-vicente-23054b1a4/'}
                        onDetails={() => console.log('Details pressed')}
                    />
                )}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.linksContent}
                style={styles.links}
            />

            <LinkModal />
        </View>
    )
}