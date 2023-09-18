import {StyleSheet, Text, View} from "react-native";

export const Settings = () => {
    return (
        <View style={styles.textContainer}>
            <Text style={styles.title}>
                Settings
            </Text>
            <Text style={styles.description}>
                Coming soon...
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    textContainer: {
        flex: 1,
        backgroundColor: '#2e3a24',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        color: '#fff',
        fontWeight: '900',
        fontSize: 22,
        padding: 10,
    },
    description: {
        color: '#fff',
        fontWeight: '400',
        fontSize: 16,
    },
});
