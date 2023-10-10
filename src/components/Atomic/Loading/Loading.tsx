import { ActivityIndicator, StyleSheet } from 'react-native';

import i18n from '../../../localization';
import { COLORS } from '../../../styles';

export const Loading = () => {
    return (
        <ActivityIndicator
            style={styles.loading}
            size='large'
            color={COLORS.BACKGROUND.BUTTON}
            accessibilityLabel={i18n.t('LOADING')}
        />
    );
};

const styles = StyleSheet.create({
    loading: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
    },
});
