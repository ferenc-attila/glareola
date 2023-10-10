import { StyleSheet, Text, View } from 'react-native';

import { COLORS, TEXT_STYLES } from '../../styles';
import { IScreen } from '../../types/interfaces';

export const Screen = ({ ...props }: IScreen) => {
    return (
        <>
            <View style={styles.screenHeaderContainer}>
                {props.title ? <Text style={styles.screenTitleText}>{props.title}</Text> : null}
            </View>
            <View style={styles.screenContentContainer}>{props.children}</View>
        </>
    );
};

const styles = StyleSheet.create({
    screenHeaderContainer: {
        flex: 1,
    },
    screenContentContainer: {
        flex: 8,
        width: '100%',
        alignItems: 'center',
        alignContent: 'center',
        backgroundColor: COLORS.BACKGROUND.MAIN,
    },
    screenTitleText: {
        ...TEXT_STYLES.SCREEN_TITLE,
    },
});
