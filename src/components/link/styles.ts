import { StyleSheet } from "react-native";
import { colors } from "@/styles/colors";

export const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        gap: 12,
        width: "100%",
    },
    details: {
        flex: 1
    },
    name: {
        fontSize: 16,
        color: colors.gray[100],
        fontWeight: "600",
    },
    url: {
        fontSize: 14,
        color: colors.gray[100],
    }
})