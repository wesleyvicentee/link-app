import { StyleSheet } from "react-native";
import { colors } from "@/styles/colors";

export const styles = StyleSheet.create({
    modal: {
        flex: 1,
        justifyContent: 'flex-end',
    },
    modalContainer: {
        padding: 24,
        paddingBottom: 32,
        backgroundColor: colors.gray[900],
        borderTopColor: colors.gray[800],
        borderTopWidth: 1,
    },
    modalHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 24
    },
    modalContent: {
        marginBottom: 24,
    },
    modalCategory: {
        flex: 1,
        fontSize: 16,
        fontWeight: 500,
        color: colors.gray[400]
    },
    modalLinkName: {
        marginBottom: 4,
        fontSize: 18,
        fontWeight: 600,
        color: colors.gray[200]
    },
    modalUrl: {
        fontSize: 14,
        color: colors.gray[400]
    },
    modalFooter: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 24,
        borderTopWidth: 1,
        borderTopColor: colors.gray[600],
    }
})