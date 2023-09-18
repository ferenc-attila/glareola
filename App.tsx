import React, { useState } from 'react';
import { Pressable, StatusBar, StyleSheet, Text, View } from 'react-native';
import 'reflect-metadata';
import { Main } from './src/components/Main';
import { About } from './src/components/About';
import { ObservationList } from './src/components/ObservationList';
import { Settings } from './src/components/Settings';

export default function App() {

    const [appScreen, setAppScreen] = useState('main')

    function getScreen(appScreen: string) {
        switch (appScreen) {
            case ('main'): {
                return <Main></Main>
            }
            case ('about'): {
                return <About></About>
            }
            case ('observations'): {
                return <ObservationList></ObservationList>
            }
            case ('settings'): {
                return <Settings></Settings>
            }
        }
    }

    return (
        <>
            <StatusBar/>
            <View style={styles.buttonContainer}>
                <Pressable onPress={() => setAppScreen('main')}>
                    <Text style={styles.button}>Home</Text>
                </Pressable>
                <Pressable onPress={() => setAppScreen('observations')}>
                    <Text style={styles.button}>Observations</Text>
                </Pressable>
                <Pressable onPress={() => setAppScreen('settings')}>
                    <Text style={styles.button}>Settings</Text>
                </Pressable>
                <Pressable onPress={() => setAppScreen('about')}>
                    <Text style={styles.button}>About</Text>
                </Pressable>
            </View>
            {getScreen(appScreen)}
        </>
    );
}

const styles = StyleSheet.create({
    buttonContainer: {
        padding: 25,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-evenly',
        alignItems: 'stretch',
        backgroundColor: '#2e3a24'
    },
    button: {
        padding: 10,
        borderRadius: 5,
        backgroundColor: '#4d9460',
        color: '#ffffff',
        fontSize: 15,
        fontWeight: 'bold'
    }
});
