import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Modal, Image } from 'react-native';

import i18n from '../../../../localization';
import { colors, paddingsAndMargins, textStyles } from '../../../../styles';
import { IBirdingHuData } from '../../../../types/interfaces';
import { GlareolaButton } from '../../../Atomic/GlareolaButton';

export const Observation = (observationData: IBirdingHuData) => {
    const [modalVisible, setModalVisible] = useState(false);
    const [modalContent, setModalContent] = useState('none');

    useEffect(() => {
        if (!modalVisible) {
            setModalContent('none');
        }
    }, [modalVisible]);

    useEffect(() => {
        if (modalContent !== 'none') {
            setModalVisible(true);
        }
    }, [modalContent]);

    return (
        <>
            <View style={styles.observationContainer}>
                <Text style={styles.sectionTitleText}>{observationData.speciesHun}</Text>
                <Text style={styles.commonText}>{observationData.locality}</Text>
                <Text style={styles.commonText}>{observationData.county}</Text>
                <Text style={styles.commonText}>{observationData.area}</Text>
                <Text style={styles.commonText}>{observationData.date}</Text>
                <Text style={styles.commonText}>{observationData.individuals}</Text>
                {observationData.notes ? (
                    <>
                        <Text style={styles.commonText}>{observationData.observers.join(', ')}</Text>
                        <Text style={styles.lastCommonText}>{observationData.notes}</Text>
                    </>
                ) : (
                    <Text style={styles.lastCommonText}>{observationData.observers.join(', ')}</Text>
                )}
                {observationData.imageLink ? (
                    <GlareolaButton
                        onPress={() => setModalContent('image')}
                        iconName='camera'
                        size={32}
                        color='white'
                        accessibilityLabel={i18n.t('BUTTON_IMAGE_LABEL')}
                    />
                ) : null}
            </View>
            <Modal
                style={{ padding: paddingsAndMargins.large }}
                animationType='fade'
                transparent
                visible={modalVisible}
            >
                <View style={styles.modal}>
                    {modalContent === 'image' && !!observationData.imageLink ? (
                        <Image
                            style={styles.image}
                            source={{ uri: observationData.imageLink }}
                            accessibilityRole='image'
                            accessibilityLabel={`${i18n.t('OBSERVATION_IMAGE_DESCRIPTION')} ${
                                observationData.speciesSci
                            }`}
                        />
                    ) : null}
                    <GlareolaButton
                        onPress={() => setModalVisible(!modalVisible)}
                        iconName='backward'
                        size={32}
                        color='white'
                        accessibilityLabel={i18n.t('BUTTON_CLOSE_LABEL')}
                    />
                </View>
            </Modal>
        </>
    );
};

const styles = StyleSheet.create({
    observationContainer: {
        borderRadius: paddingsAndMargins.medium,
        backgroundColor: colors.background.data,
        width: '90%',
        alignContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        padding: paddingsAndMargins.medium,
        margin: paddingsAndMargins.medium,
    },
    modal: {
        backgroundColor: colors.background.data,
        padding: paddingsAndMargins.large,
        marginTop: paddingsAndMargins.large,
        width: '90%',
        height: '90%',
        alignItems: 'center',
        justifyContent: 'space-around',
        alignSelf: 'center',
        borderRadius: paddingsAndMargins.small,
    },
    image: {
        margin: paddingsAndMargins.medium,
        width: '100%',
        height: '90%',
        resizeMode: 'contain',
    },
    sectionTitleText: {
        ...textStyles.sectionTitleText,
    },
    commonText: {
        ...textStyles.commonText,
    },
    lastCommonText: {
        ...textStyles.commonText,
        marginBottom: paddingsAndMargins.medium,
    },
});
