import { StyleSheet } from "react-native"
import { colors } from "@/styles/colors"

export const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 4,
        fontSize: 14,
    },
    primaryTitle: {
        fontSize: 16,
        color: colors.green[300],
        fontWeight: 600,
    },
    secondaryTitle: {
        fontSize: 16,
        color: colors.gray[400]
    }
})