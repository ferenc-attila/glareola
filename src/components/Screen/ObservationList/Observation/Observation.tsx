import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Modal, Image, Linking, Platform } from 'react-native';

import { ICON_NAMES } from '../../../../constants';
import i18n from '../../../../localization';
import { COLORS, CONTAINER_STYLES, SPACING, TEXT_STYLES } from '../../../../styles';
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

    const openObservationDetails = async (url: string) => {
        await Linking.openURL(url);
    };

    const openMapApplication = async () => {
        const scheme = Platform.select({ ios: 'maps://0,0?q=', android: 'geo:0,0?q=' });
        const latLng = `${observationData.latitude},${observationData.longitude}`;
        const label = observationData.speciesHun ?? observationData.speciesSci;
        const url = Platform.select({
            ios: `${scheme}${label}@${latLng}`,
            android: `${scheme}${latLng}(${label})`,
        });
        if (typeof url === 'string') {
            await Linking.openURL(url);
        }
    };

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
                <View style={styles.observationButtonContainer}>
                    <GlareolaButton
                        onPress={() => openObservationDetails(observationData.details)}
                        iconName={ICON_NAMES.INFO}
                        accessibilityLabel={i18n.t('BUTTON_OBSERVATION_INFO_LABEL')}
                    />
                    <GlareolaButton
                        onPress={openMapApplication}
                        iconName={ICON_NAMES.MAP}
                        accessibilityLabel={i18n.t('BUTTON_OBSERVATION_MAP_LABEL')}
                    />
                    {observationData.imageLink ? (
                        <GlareolaButton
                            onPress={() => setModalContent('image')}
                            iconName={ICON_NAMES.IMAGE}
                            accessibilityLabel={i18n.t('BUTTON_IMAGE_LABEL')}
                        />
                    ) : null}
                </View>
            </View>
            <Modal style={{ padding: SPACING.LARGE }} animationType='fade' transparent visible={modalVisible}>
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
                        iconName={ICON_NAMES.BACK}
                        accessibilityLabel={i18n.t('BUTTON_CLOSE_LABEL')}
                    />
                </View>
            </Modal>
        </>
    );
};

const styles = StyleSheet.create({
    observationContainer: {
        ...CONTAINER_STYLES.COMMON_CONTAINER,
    },
    observationButtonContainer: {
        ...CONTAINER_STYLES.BUTTON_CONTAINER,
    },
    modal: {
        backgroundColor: COLORS.BACKGROUND.DATA,
        padding: SPACING.LARGE,
        marginTop: SPACING.LARGE,
        width: '90%',
        height: '90%',
        alignItems: 'center',
        justifyContent: 'space-around',
        alignSelf: 'center',
        borderRadius: SPACING.SMALL,
    },
    image: {
        margin: SPACING.MEDIUM,
        width: '100%',
        height: '90%',
        resizeMode: 'contain',
    },
    sectionTitleText: {
        ...TEXT_STYLES.SECTION_TITLE,
    },
    commonText: {
        ...TEXT_STYLES.COMMON,
    },
    lastCommonText: {
        ...TEXT_STYLES.COMMON,
        marginBottom: SPACING.MEDIUM,
    },
});
