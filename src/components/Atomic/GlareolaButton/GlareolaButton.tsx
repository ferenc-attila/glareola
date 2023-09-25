import { FontAwesome5 } from '@expo/vector-icons';
import React from 'react';
import { View, Pressable, StyleSheet } from 'react-native';

import { IGlareolaButton } from '../../../types/types';

export const GlareolaButton = (props: IGlareolaButton) => {
    return (
        <View style={styles.button}>
            <Pressable onPress={props.onPress}>
                <FontAwesome5 name={props.iconName} size={props.size} color={props.color} />
            </Pressable>
        </View>
    );
};

const styles = StyleSheet.create({
    buttonContainer: {
        padding: 25,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#2e3a24',
    },
    button: {
        padding: 10,
        borderRadius: 5,
        backgroundColor: '#4d9460',
        color: '#ffffff',
        fontSize: 15,
        fontWeight: 'bold',
    },
});
