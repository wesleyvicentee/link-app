import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native";
import { styles } from "./styles";

type Props = TouchableOpacityProps & {
    title: string
    pill?: boolean
}

export function Button({ title, pill = false, ...rest }: Props) {
    return(
        <TouchableOpacity style={ !pill ? styles.container : styles.containerPill } { ...rest } activeOpacity={ 0.7 }>
            <Text style={ !pill ? styles.title : styles.titlePill }>
                { title }
            </Text>
        </TouchableOpacity>
    )
}