import React, { useState } from 'react';
import { Pressable, StatusBar, StyleSheet, Text, View } from 'react-native';
import 'reflect-metadata';
import { FontAwesome5 } from '@expo/vector-icons';
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
                <View style={styles.button}>
                    <Pressable onPress={() => setAppScreen('main')}>
                        <FontAwesome5 name='home' size={24} color='white' />
                    </Pressable>
                </View>
                <View style={styles.button}>
                    <Pressable onPress={() => setAppScreen('observations')}>
                        <FontAwesome5 name='binoculars' size={24} color='white' />
                    </Pressable>
                </View>
                <View style={styles.button}>
                    <Pressable onPress={() => setAppScreen('settings')}>
                        <FontAwesome5 name='tools' size={24} color="white" />
                    </Pressable>
                </View>
                <View style={styles.button}>
                    <Pressable onPress={() => setAppScreen('about')}>
                        <FontAwesome5 name="info-circle" size={24} color="white" />
                    </Pressable>
                </View>
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
        justifyContent: 'space-around',
        alignItems: 'center',
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
