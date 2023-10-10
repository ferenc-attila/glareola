import React, { useState } from 'react';
import { StatusBar, StyleSheet, View } from 'react-native';
import 'reflect-metadata';

import { GlareolaButton } from './src/components/Atomic/GlareolaButton';
import { Screen } from './src/components/Screen';
import { About } from './src/components/Screen/About';
import { Home } from './src/components/Screen/Home';
import { ObservationList } from './src/components/Screen/ObservationList';
import { Settings } from './src/components/Screen/Settings';
import { ICON_NAMES, URLS } from './src/constants';
import i18n from './src/localization';
import { COLORS, SPACING } from './src/styles';

export default function App() {
    const url = URLS.BIRDING_HU_MAIN;
    const [appScreen, setAppScreen] = useState('home');

    function getScreen(appScreen: string) {
        switch (appScreen) {
            case 'home': {
                return (
                    <Screen>
                        <Home />
                    </Screen>
                );
            }
            case 'about': {
                return (
                    <Screen title={i18n.t('SCREEN_ABOUT_TITLE')}>
                        <About />
                    </Screen>
                );
            }
            case 'observations': {
                return (
                    <Screen title={i18n.t('SCREEN_OBSERVATIONS_TITLE')}>
                        <ObservationList url={url} />
                    </Screen>
                );
            }
            case 'settings': {
                return (
                    <Screen title={i18n.t('SCREEN_SETTINGS_TITLE')}>
                        <Settings />
                    </Screen>
                );
            }
        }
    }

    return (
        <>
            <StatusBar />
            <View style={styles.mainContainer}>{getScreen(appScreen)}</View>
            <View style={styles.footerContainer}>
                <View style={styles.buttonContainer}>
                    <GlareolaButton
                        onPress={() => setAppScreen('home')}
                        iconName={ICON_NAMES.HOME}
                        accessibilityLabel={i18n.t('BUTTON_SCREEN_HOME_LABEL')}
                    />
                </View>
                <View style={styles.buttonContainer}>
                    <GlareolaButton
                        onPress={() => setAppScreen('observations')}
                        iconName={ICON_NAMES.OBSERVATIONS}
                        accessibilityLabel={i18n.t('BUTTON_SCREEN_OBSERVATIONS_LABEL')}
                    />
                </View>
                <View style={styles.buttonContainer}>
                    <GlareolaButton
                        onPress={() => setAppScreen('settings')}
                        iconName={ICON_NAMES.SETTINGS}
                        accessibilityLabel={i18n.t('BUTTON_SCREEN_SETTINGS_LABEL')}
                    />
                </View>
                <View style={styles.buttonContainer}>
                    <GlareolaButton
                        onPress={() => setAppScreen('about')}
                        iconName={ICON_NAMES.INFO}
                        accessibilityLabel={i18n.t('BUTTON_SCREEN_ABOUT_LABEL')}
                    />
                </View>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 6,
        backgroundColor: COLORS.BACKGROUND.MAIN,
        // width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: SPACING.MEDIUM,
    },
    footerContainer: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: COLORS.BACKGROUND.FOOTER,
        // width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonContainer: {
        padding: SPACING.MEDIUM,
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
});
