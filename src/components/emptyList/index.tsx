import { View, Text } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'
import { router } from "expo-router";

import { styles } from "./styles"
import { colors } from '@/styles/colors'
import { Button } from '../button';

export function EmptyList(){
    return (
        <View>
            <MaterialIcons name="manage-search" size={40} color={colors.gray[200]} />
            <Text style={styles.description}>Nenhum link adicionado nesta categoria. Deseja adicionar?</Text>
            <Button title="Adicionar" pill={true} onPress={() => router.navigate('/add')}/>
        </View>

    )
}