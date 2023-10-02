import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

import { ABOUT } from '../../../constants';
import i18n from '../../../localization';

export const Home = () => (
    <View style={styles.textContainer}>
        <Text style={styles.heading}>{i18n.t('APP_NAME')}</Text>
        <Image
            source={require('../../../../assets/images/glareola_pratincola.png')}
            style={styles.titleImage}
            accessibilityRole='image'
            accessibilityLabel={i18n.t('COVER_IMAGE_DESCRIPTION')}
        />
        <Text style={styles.title}>{i18n.t('APP_DESCRIPTION')}</Text>
        <Text style={styles.appInfo}>{ABOUT.APP.VERSION}</Text>
    </View>
);

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
        textAlign: 'center',
        width: '90%',
    },
    appInfo: {
        color: '#fff',
        fontSize: 10,
        marginTop: 25,
    },
    titleImage: {
        margin: 30,
        maxWidth: '90%',
        maxHeight: '50%',
        resizeMode: 'contain',
    },
});
