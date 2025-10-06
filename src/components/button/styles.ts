import { StyleSheet } from "react-native"
import { colors } from "@/styles/colors"

export const styles = StyleSheet.create({
    container: {
        height: 52,
        width: '100%',
        borderRadius: 8,
        backgroundColor: colors.green[300],
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 16,
        fontWeight: '600',
        color: colors.green[900],
    }
})