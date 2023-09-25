import { ScrollView, StyleSheet, Text, View } from 'react-native';

import { ABOUT } from '../../../constants';
import i18n from '../../../utils/localization/localization';

export const About = () => {
    return (
        <View style={styles.textContainer}>
            <ScrollView>
                <View style={styles.textContainer}>
                    <Text style={styles.title}>{i18n.t('APP_NAME')}</Text>
                    <Text style={styles.description}>{i18n.t('APP_DESCRIPTION')}</Text>
                    <Text style={styles.description}>{i18n.t('APP_AUTHOR')}</Text>
                    <Text style={styles.description}>{ABOUT.APP.VERSION}</Text>
                    <Text style={styles.description}>{ABOUT.APP.DATE}</Text>
                    <Text style={styles.description}>{ABOUT.APP.LICENSE.SHORT_NAME}</Text>
                    <Text style={styles.title}>{i18n.t('COVER_IMAGE_NAME')}</Text>
                    <Text style={styles.description}>{i18n.t('COVER_IMAGE_DESCRIPTION')}</Text>
                    <Text style={styles.description}>{i18n.t('COVER_IMAGE_AUTHOR')}</Text>
                    <Text style={styles.description}>{i18n.t('COVER_IMAGE_DATE')}</Text>
                    <Text style={styles.description}>{i18n.t('COVER_IMAGE_LOCATION')}</Text>
                    <Text style={styles.description}>{ABOUT.COVER_IMAGE.LICENSE.SHORT_NAME}</Text>
                    <Text style={styles.title}>{i18n.t('ICON_IMAGE_NAME')}</Text>
                    <Text style={styles.description}>{i18n.t('ICON_IMAGE_DESCRIPTION')}</Text>
                    <Text style={styles.description}>{i18n.t('ICON_IMAGE_AUTHOR')}</Text>
                    <Text style={styles.description}>{i18n.t('ICON_IMAGE_DATE')}</Text>
                    <Text style={styles.description}>{i18n.t('ICON_IMAGE_LOCATION')}</Text>
                    <Text style={styles.description}>{ABOUT.ICON_IMAGE.LICENSE.SHORT_NAME}</Text>
                </View>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    textContainer: {
        flex: 1,
        backgroundColor: '#2e3a24',
        alignItems: 'center',
    },
    title: {
        marginTop: 25,
        color: '#fff',
        fontWeight: '900',
        fontSize: 22,
        padding: 10,
    },
    description: {
        color: '#fff',
        fontSize: 16,
        padding: 5,
        textAlign: 'center',
    },
});
