import { View, Text, TouchableOpacity, Modal } from "react-native";
import { Option } from "@/components/option"
import { MaterialIcons } from "@expo/vector-icons";
import { linkStorage, LinkProps } from "@/storage/link-storage";

import { colors } from "@/styles/colors";

import { styles } from "./styles";

type ModalAction = {
    label: string,
    icon: keyof typeof MaterialIcons.glyphMap
    variant?: 'primary' | 'secondary'
    onPress: () => void
}

type Props = {
    visible: boolean,
    data?: {
        category: string,
        name: string,
        url: string,
        id: string
    },
    onClose: () => void,
    actions?: ModalAction[]
}

export function LinkModal({ visible, data, actions, onClose }: Props) {

    return (
        <Modal transparent visible={visible} animationType="slide">
            <View style={ styles.modal }>
                <View style={ styles.modalContainer }>
                    <View style={ styles.modalHeader }>
                        <Text style={ styles.modalCategory } >{data?.category}</Text>
                        <TouchableOpacity activeOpacity={ 0.7 } onPress={onClose}>
                            <MaterialIcons name="close" size={20} color={ colors.gray[400] }></MaterialIcons>
                        </TouchableOpacity>
                    </View>
                    <View style={ styles.modalContent }>
                        <Text style={ styles.modalLinkName }>{data?.name}</Text>
                        <Text style={ styles.modalUrl }>{data?.url}</Text>
                    </View>
                    <View style={styles.modalFooter}>
                        {actions?.map((action, index) => (
                            <Option
                                key={index}
                                name={action.label}
                                icon={action.icon}
                                variant={action.variant}
                                onPress={action.onPress}
                            />
                        ))}
                    </View>
                </View>
            </View>
        </Modal>
    )
}