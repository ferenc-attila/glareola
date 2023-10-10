import { FontAwesome5 } from '@expo/vector-icons';
import React from 'react';
import { View, Pressable, StyleSheet } from 'react-native';

import { BUTTON_PROPS } from '../../../constants';
import { COLORS, SPACING } from '../../../styles';
import { IGlareolaButton } from '../../../types/interfaces';

export const GlareolaButton = (props: IGlareolaButton) => {
    return (
        <View style={styles.button}>
            <Pressable accessibilityRole='button' accessibilityLabel={props.accessibilityLabel} onPress={props.onPress}>
                <FontAwesome5
                    name={props.iconName}
                    size={props.size ?? BUTTON_PROPS.SIZE}
                    color={props.color ?? BUTTON_PROPS.COLOR}
                />
            </Pressable>
        </View>
    );
};

const styles = StyleSheet.create({
    button: {
        margin: SPACING.SMALL,
        padding: SPACING.MEDIUM,
        borderRadius: SPACING.SMALL,
        backgroundColor: COLORS.BACKGROUND.BUTTON,
        color: COLORS.FONT.NORMAL,
    },
});
