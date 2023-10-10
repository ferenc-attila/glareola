import { ScrollView, StyleSheet, Text } from 'react-native';

import { ABOUT } from '../../../constants';
import i18n from '../../../localization';
import { TEXT_STYLES } from '../../../styles';

export const About = () => {
    return (
        <ScrollView>
            <Text style={styles.sectionTitleText}>{i18n.t('APP_NAME')}</Text>
            <Text style={styles.commonText}>{i18n.t('APP_DESCRIPTION')}</Text>
            <Text style={styles.commonText}>{i18n.t('APP_AUTHOR')}</Text>
            <Text style={styles.commonText}>{ABOUT.APP.VERSION}</Text>
            <Text style={styles.commonText}>{ABOUT.APP.DATE}</Text>
            <Text style={styles.commonText}>{ABOUT.APP.LICENSE.SHORT_NAME}</Text>
            <Text style={styles.sectionTitleText}>{i18n.t('COVER_IMAGE_NAME')}</Text>
            <Text style={styles.commonText}>{i18n.t('COVER_IMAGE_DESCRIPTION')}</Text>
            <Text style={styles.commonText}>{i18n.t('COVER_IMAGE_AUTHOR')}</Text>
            <Text style={styles.commonText}>{i18n.t('COVER_IMAGE_DATE')}</Text>
            <Text style={styles.commonText}>{i18n.t('COVER_IMAGE_LOCATION')}</Text>
            <Text style={styles.commonText}>{ABOUT.COVER_IMAGE.LICENSE.SHORT_NAME}</Text>
            <Text style={styles.sectionTitleText}>{i18n.t('ICON_IMAGE_NAME')}</Text>
            <Text style={styles.commonText}>{i18n.t('ICON_IMAGE_DESCRIPTION')}</Text>
            <Text style={styles.commonText}>{i18n.t('ICON_IMAGE_AUTHOR')}</Text>
            <Text style={styles.commonText}>{i18n.t('ICON_IMAGE_DATE')}</Text>
            <Text style={styles.commonText}>{i18n.t('ICON_IMAGE_LOCATION')}</Text>
            <Text style={styles.commonText}>{ABOUT.ICON_IMAGE.LICENSE.SHORT_NAME}</Text>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    sectionTitleText: {
        ...TEXT_STYLES.SECTION_TITLE,
    },
    commonText: {
        ...TEXT_STYLES.COMMON,
    },
});
