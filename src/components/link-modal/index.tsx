import { View, Text, TouchableOpacity, Modal } from "react-native";
import { Option } from "@/components/option"
import { MaterialIcons } from "@expo/vector-icons";

import { colors } from "@/styles/colors";

import { styles } from "./styles";

type Props = {
    name: string,
    url: string,
    onDetails: () => void
}

export function LinkModal() {
    return (
        <Modal transparent visible={ true }>
            <View style={ styles.modal }>
                <View style={ styles.modalContainer }>
                    <View style={ styles.modalHeader }>
                        <Text style={ styles.modalCategory } >Rede Social</Text>
                        <TouchableOpacity activeOpacity={ 0.7 }>
                            <MaterialIcons name="close" size={20} color={ colors.gray[400] }></MaterialIcons>
                        </TouchableOpacity>
                    </View>
                    <View style={ styles.modalContent }>
                        <Text style={ styles.modalLinkName }>Instagram</Text>
                        <Text style={ styles.modalUrl }>www.instagram.com.br</Text>
                    </View>
                    <View style={ styles.modalFooter }>
                        <Option name="Abrir" icon="language"/>
                        <Option name="Excluir" icon="delete" variant="secondary"/>
                    </View>
                </View>
            </View>
        </Modal>
    )
}