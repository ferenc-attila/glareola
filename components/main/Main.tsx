import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

export default function Main() {
    return (
        <>
            <View style={styles.textContainer}>
                <Text style={styles.heading}>Glareola</Text>
                <Image
                    source={require('../../assets/glareola_pratincola.jpg')}
                    style={styles.titleImage}
                ></Image>
                <Text style={styles.title}>A crawler for rarity observations</Text>
                <Text style={styles.appInfo}>0.0.1</Text>
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
    heading: {
        paddingBottom: 25,
        color: '#fff',
        fontWeight: '900',
        fontSize: 40,
    },
    title: {
        color: '#fff',
        fontWeight: '500',
        fontSize: 22,
    },
    appInfo: {
        color: '#fff',
        fontSize: 10,
        marginTop: 25,
    },
    titleImage: {
        margin: 30,
        width: '80%',
        height: '40%',
        borderRadius: 10,
        objectFit: 'scale-down',
    },
});
