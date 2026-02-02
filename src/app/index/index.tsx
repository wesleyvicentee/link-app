import { View, FlatList, Alert, Linking } from 'react-native'
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
    const [link, setLink] = useState<LinkProps>({} as LinkProps)
    const [emptyCategory, setEmptyCategory] = useState(true)
    const [showModal, setShowModal] = useState(false)

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

    function handleModal(selected: LinkProps) {
        setShowModal(true)
        setLink(selected)
    }

    async function linkRemove() {
        try {
            await linkStorage.remove(link.id)
            getLinks()
            setShowModal(false)
        } catch (error) {
            Alert.alert("Erro", "Não foi possível excluir este link.")
        }
    }

    function handleDeleteLink() {
        Alert.alert("Excluir", "Deseja excluir esse link?", [
            { style: "cancel", text: "Não" },
            {text: "Sim", onPress: linkRemove}
        ])
    }

    async function handleOpenLink(url: string) {
        try {
            await Linking.openURL(url)
        } catch (error) {
            Alert.alert('Link', 'Não foi possível abrir seu link.')
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
                            onDetails={() => handleModal(item)}
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

            <LinkModal
                visible={showModal}
                data={link}
                onClose={() => setShowModal(false)}
                actions={[
                    {
                        label: 'Excluir',
                        icon: 'delete',
                        variant: 'secondary',
                        onPress: handleDeleteLink
                    },
                    {
                        label: 'Abrir',
                        icon: 'language',
                        variant: 'primary',
                        onPress: () => handleOpenLink(link.url)
                    }
                ]}
            />
        </View>
    )
}