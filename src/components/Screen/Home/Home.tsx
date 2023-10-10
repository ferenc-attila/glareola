import React from 'react';
import { Image, StyleSheet, Text } from 'react-native';

import { ABOUT } from '../../../constants';
import i18n from '../../../localization';
import { COLORS, TEXT_STYLES } from '../../../styles';

export const Home = () => (
    <>
        <Text style={styles.appName}>{i18n.t('APP_NAME')}</Text>
        <Image
            source={require('../../../assets/images/glareola_pratincola.png')}
            style={styles.titleImage}
            accessibilityRole='image'
            accessibilityLabel={i18n.t('COVER_IMAGE_DESCRIPTION')}
        />
        <Text style={styles.commonText}>{i18n.t('APP_DESCRIPTION')}</Text>
        <Text style={styles.smallText}>{ABOUT.APP.VERSION}</Text>
    </>
);

const styles = StyleSheet.create({
    appName: {
        paddingBottom: 25,
        color: COLORS.FONT.NORMAL,
        fontWeight: '900',
        fontSize: 40,
    },
    titleImage: {
        margin: 30,
        maxWidth: '90%',
        maxHeight: '50%',
        resizeMode: 'contain',
    },
    commonText: {
        ...TEXT_STYLES.COMMON,
    },
    smallText: {
        ...TEXT_STYLES.SMALL,
    },
});
