import { View, Text, TouchableOpacity, Alert } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { useState } from "react";

import { Categories } from "@/components/categories";
import { Input } from "@/components/input";

import { router } from "expo-router";

import { styles } from "./styles"
import { colors } from "@/styles/colors"
import { Button } from "@/components/button";

import { linkStorage, LinkProps } from "@/storage/link-storage";

export default function() {
    const [category, setCategory] = useState('')
    const [name, setName] = useState('')
    const [url, setUrl] = useState('')

    async function handleAdd() {
        try {
            const errors = [];
    
            if (!category) errors.push('Categoria');
            if (!name.trim()) errors.push('Nome');
            if (!url.trim()) errors.push('URL');
          
            if (errors.length) {
                return Alert.alert('Verifique os campos', errors.join('\n'));
            }
    
            await linkStorage.save({
                id: new Date().getTime().toString(),
                category,
                name,
                url
            })

            Alert.alert('Sucesso', 'Novo link adicionado.', [
                {
                    text: 'OK',
                    onPress: () => router.back()
                }
            ])

        } catch (error) {
            Alert.alert('Erro', 'Não foi possível salvar o link.')
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity activeOpacity={0.7} onPress={() => router.back()}>
                    <MaterialIcons name="arrow-back" size={32} color={colors.gray[200]} />
                </TouchableOpacity>
                <Text style={ styles.title }>Novo</Text>
            </View>
            <Text style={styles.label}>Selecione uma categoria</Text>

            <Categories selected={category} onChange={setCategory}/>

            <View style={styles.form}>
                <Input placeholder="Nome"
                       onChangeText={setName}
                       autoCorrect={false} />
                <Input placeholder="Url"
                       onChangeText={setUrl}
                       autoCorrect={false}
                       autoCapitalize="none" />
                <Button title="Adicionar" onPress={handleAdd}/>
            </View>
        </View>
    )
}