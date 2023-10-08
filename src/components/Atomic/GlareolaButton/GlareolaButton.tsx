import { FontAwesome5 } from '@expo/vector-icons';
import React from 'react';
import { View, Pressable, StyleSheet } from 'react-native';

import { colors, paddingsAndMargins } from '../../../styles';
import { IGlareolaButton } from '../../../types/interfaces';

export const GlareolaButton = (props: IGlareolaButton) => {
    return (
        <View style={styles.button}>
            <Pressable accessibilityRole='button' accessibilityLabel={props.accessibilityLabel} onPress={props.onPress}>
                <FontAwesome5 name={props.iconName} size={props.size} color={props.color} />
            </Pressable>
        </View>
    );
};

const styles = StyleSheet.create({
    button: {
        margin: paddingsAndMargins.small,
        padding: paddingsAndMargins.medium,
        borderRadius: paddingsAndMargins.small,
        backgroundColor: colors.background.button,
        color: colors.font.normal,
    },
});
