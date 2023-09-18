import React, { useState } from 'react';
import { Button, StatusBar, StyleSheet, View } from 'react-native';
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
                <Button
                    title={'Home'}
                    onPress={() => setAppScreen('main')}
                ></Button>
                <Button
                    title={'Observations'}
                    onPress={() => setAppScreen('observations')}
                ></Button>
                <Button
                    title={'Settings'}
                    onPress={() => setAppScreen('settings')}
                ></Button>
                <Button
                    title={'About'}
                    onPress={() => setAppScreen('about')}
                ></Button>
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
        justifyContent: 'space-between',
        alignItems: 'stretch',
        backgroundColor: '#2e3a24'
    },
});
