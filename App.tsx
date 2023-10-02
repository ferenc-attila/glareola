import React, { useState } from 'react';
import { StatusBar, StyleSheet, View } from 'react-native';
import 'reflect-metadata';

import { GlareolaButton } from './src/components/Atomic/GlareolaButton';
import { About } from './src/components/Screen/About';
import { Home } from './src/components/Screen/Home';
import { ObservationList } from './src/components/Screen/ObservationList';
import { Settings } from './src/components/Screen/Settings';
import { URLS } from './src/constants';
import i18n from './src/localization';

export default function App() {
    const url = URLS.BIRDING_HU_MAIN;
    const [appScreen, setAppScreen] = useState('home');

    function getScreen(appScreen: string) {
        switch (appScreen) {
            case 'home': {
                return <Home />;
            }
            case 'about': {
                return <About />;
            }
            case 'observations': {
                return <ObservationList url={url} />;
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
                <GlareolaButton
                    onPress={() => setAppScreen('home')}
                    iconName='home'
                    size={24}
                    color='white'
                    accessibilityLabel={i18n.t('BUTTON_SCREEN_HOME_LABEL')}
                />
                <GlareolaButton
                    onPress={() => setAppScreen('observations')}
                    iconName='binoculars'
                    size={24}
                    color='white'
                    accessibilityLabel={i18n.t('BUTTON_SCREEN_OBSERVATIONS_LABEL')}
                />
                <GlareolaButton
                    onPress={() => setAppScreen('settings')}
                    iconName='tools'
                    size={24}
                    color='white'
                    accessibilityLabel={i18n.t('BUTTON_SCREEN_SETTINGS_LABEL')}
                />
                <GlareolaButton
                    onPress={() => setAppScreen('about')}
                    iconName='info-circle'
                    size={24}
                    color='white'
                    accessibilityLabel={i18n.t('BUTTON_SCREEN_ABOUT_LABEL')}
                />
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
