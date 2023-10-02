import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Modal, Image } from 'react-native';

import i18n from '../../../localization';
import { IBirdingHuData } from '../../../types/interfaces';
import { GlareolaButton } from '../../Atomic/GlareolaButton';

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
            <View style={styles.container}>
                <View style={styles.observationContainer}>
                    <Text style={styles.observationHeader}>{observationData.speciesHun}</Text>
                    <Text style={styles.observationBody}>{observationData.locality}</Text>
                    <Text style={styles.observationBody}>{observationData.county}</Text>
                    <Text style={styles.observationBody}>{observationData.area}</Text>
                    <Text style={styles.observationBody}>{observationData.date}</Text>
                    <Text style={styles.observationBody}>{observationData.individuals}</Text>
                    <Text style={styles.observationBody}>{observationData.observers.join(', ')}</Text>
                    {observationData.notes && <Text style={styles.observationBody}>{observationData.notes}</Text>}
                    {observationData.imageLink && (
                        <GlareolaButton
                            onPress={() => setModalContent('image')}
                            iconName='camera'
                            size={24}
                            color='white'
                            accessibilityLabel={i18n.t('BUTTON_IMAGE_LABEL')}
                        />
                    )}
                </View>
            </View>
            <Modal
                animationType='slide'
                transparent
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(!modalVisible);
                }}
            >
                <View style={styles.modalContainer}>
                    <View style={styles.modal}>
                        {modalContent === 'image' && observationData.imageLink && (
                            <Image
                                style={styles.image}
                                source={{ uri: observationData.imageLink }}
                                accessibilityRole='image'
                                accessibilityLabel={`${i18n.t('OBSERVATION_IMAGE_DESCRIPTION')} ${
                                    observationData.speciesSci
                                }`}
                            />
                        )}
                        <GlareolaButton
                            onPress={() => setModalVisible(!modalVisible)}
                            iconName='backward'
                            size={24}
                            color='white'
                            accessibilityLabel={i18n.t('BUTTON_CLOSE_LABEL')}
                        />
                    </View>
                </View>
            </Modal>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#2e3a24',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    observationContainer: {
        borderRadius: 10,
        backgroundColor: '#595947',
        width: '90%',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        margin: 10,
    },
    observationHeader: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff',
        padding: 5,
    },
    observationBody: {
        fontSize: 16,
        color: '#fff',
        textAlign: 'center',
    },
    modalContainer: {
        flex: 1,
        backgroundColor: '#2e3a24',
        alignItems: 'center',
        justifyContent: 'center',
    },
    modal: {
        backgroundColor: '#a9a996',
        padding: 10,
        margin: 10,
        width: '90%',
        height: '90%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        margin: 10,
        width: '100%',
        height: '90%',
        resizeMode: 'contain',
    },
});
