import React, { useState } from 'react';
import {Button, StatusBar, StyleSheet, View} from 'react-native';
import Main from "./components/main/Main";
import About from "./components/about/About";
import Observations from "./components/observations/Observations";

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
                return <Observations></Observations>
            }
        }
    }

    return (
        <>
            <StatusBar barStyle='dark-content' />
            <View style={styles.buttonContainer}>
                <Button
                    title={'Home'}
                    onPress={() => setAppScreen('main')}
                ></Button>
                <Button
                    title={'Settings'}
                    color={'#57596b'}
                ></Button>
                <Button
                    title={'Observations'}
                    onPress={() => setAppScreen('observations')}
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
