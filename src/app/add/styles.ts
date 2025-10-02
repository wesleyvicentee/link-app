import { StyleSheet } from "react-native";
import { colors } from "@/styles/colors"

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 62,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 24,
        marginBottom: 24,
    },
    title: {
        fontSize: 24,
        color: colors.gray[200],
        fontWeight: 600
    },
    label: {
        paddingHorizontal: 24,
        fontSize: 14,
        color: colors.gray[400],
    },
    form: {
        paddingHorizontal: 24,
        gap: 16
    }
})