import { StyleSheet, Text } from 'react-native';

import i18n from '../../../localization';
import { TEXT_STYLES } from '../../../styles';

export const Settings = () => {
    return <Text style={styles.description}>{i18n.t('SCREEN_SETTINGS_DESCRIPTION')}</Text>;
};

const styles = StyleSheet.create({
    description: {
        ...TEXT_STYLES.COMMON,
    },
});
