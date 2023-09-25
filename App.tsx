import React, { useState } from 'react';
import { StatusBar, StyleSheet, View } from 'react-native';

import 'reflect-metadata';
import { GlareolaButton } from './src/components/Atomic/GlareolaButton';
import { About } from './src/components/Screen/About';
import { Main } from './src/components/Screen/Main';
import { ObservationList } from './src/components/Screen/ObservationList';
import { Settings } from './src/components/Screen/Settings';

export default function App() {
    const [appScreen, setAppScreen] = useState('main');

    function getScreen(appScreen: string) {
        switch (appScreen) {
            case 'main': {
                return <Main />;
            }
            case 'about': {
                return <About />;
            }
            case 'observations': {
                return <ObservationList />;
            }
            case 'settings': {
                return <Settings />;
            }
        }
    }

    return (
        <>
            <StatusBar />
            <View style={styles.buttonContainer}>
                <GlareolaButton onPress={() => setAppScreen('main')} iconName='home' size={24} color='white' />
                <GlareolaButton
                    onPress={() => setAppScreen('observations')}
                    iconName='binoculars'
                    size={24}
                    color='white'
                />
                <GlareolaButton onPress={() => setAppScreen('settings')} iconName='tools' size={24} color='white' />
                <GlareolaButton onPress={() => setAppScreen('about')} iconName='info-circle' size={24} color='white' />
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
        backgroundColor: '#2e3a24',
    },
    button: {
        padding: 10,
        borderRadius: 5,
        backgroundColor: '#4d9460',
        color: '#ffffff',
        fontSize: 15,
        fontWeight: 'bold',
    },
});
