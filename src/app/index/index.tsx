import { View, FlatList, Alert, Text } from 'react-native'
import { useCallback, useState } from 'react'
import { useFocusEffect } from "expo-router";

import { Header } from '@/components/header'
import { Categories } from '@/components/categories'
import { Link } from '@/components/link'
import { LinkModal } from '@/components/link-modal'
import { categories } from '@/utils/categories'

import { linkStorage, LinkProps } from '@/storage/link-storage'

import { styles } from '@/app/index/styles'
import { EmptyList } from '@/components/emptyList';

export default function Index(){
    const [category, setCategory] = useState(categories[0].name)
    const [links, setLinks] = useState<LinkProps[]>([])
    const [emptyCategory, setEmptyCategory] = useState(true)

    async function getLinks() {
        try {
            const response = await linkStorage.get()
            const filtered = response.filter((link) => link.category === category)
            setEmptyCategory(filtered.length === 0)
            setLinks(filtered)
        } catch (error) {
            Alert.alert('Erro', "Não foi possível recuperar os links")
        }
    }

    useFocusEffect(
        useCallback(() => {
            getLinks()
        }, [category])
    )

    return (
        <View style={ styles.container }>
            <Header />
            <Categories selected={category} onChange={setCategory} />

            {!emptyCategory ? (
                <FlatList
                    data={links}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => (
                        <Link
                            name={item.name}
                            url={item.url}
                            onDetails={() => console.log('Details pressed')}
                        />
                    )}
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={styles.linksContent}
                    style={styles.links}
                />
                ) : (
                    <EmptyList />
                )
            }

            <LinkModal />
        </View>
    )
}