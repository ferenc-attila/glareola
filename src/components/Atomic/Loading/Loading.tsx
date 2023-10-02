import { ActivityIndicator, StyleSheet } from 'react-native';

import i18n from '../../../localization';

export const Loading = () => {
    return (
        <ActivityIndicator style={styles.loading} size='large' color='#4d9460' accessibilityLabel={i18n.t('LOADING')} />
    );
};

const styles = StyleSheet.create({
    loading: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 50,
    },
});
