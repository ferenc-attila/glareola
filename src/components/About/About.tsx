import { StyleSheet, Text, View } from "react-native";
import { ABOUT } from "./constants";

const createTextComponents = (text: string, index: number | string, style: object) => {
            return <Text
                key={index}
                style={style}
            >
                {text}
            </Text>
}

// TODO: Mapping with sectionlist instead of custom function
export const About = () => {
    return (
        <>
            <View style={styles.textContainer}>
                <Text style={styles.title}>
                    {ABOUT.app.title}
                </Text>
                    {ABOUT.app.description.map((value, index) => createTextComponents(value, index, styles.description))}
            </View>
        </>
    );
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
    },
    description: {
        color: '#fff',
        fontSize: 16,
        marginTop: 5,
    },
});
