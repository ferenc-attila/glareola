import React, { useState } from 'react';
import { Image, Modal, StyleSheet, Text, View } from 'react-native';

import { ICON_NAMES } from '../../../../constants';
import i18n from '../../../../localization';
import { COLORS, CONTAINER_STYLES, SPACING, TEXT_STYLES } from '../../../../styles';
import { IBirdingHuGalleryElement } from '../../../../types/interfaces';
import { GlareolaButton } from '../../../Atomic/GlareolaButton';

export const GalleryElement = (data: IBirdingHuGalleryElement) => {
    const [modalVisible, setModalVisible] = useState(false);
    return (
        <>
            <View style={styles.galleryContainer}>
                <Text style={styles.sectionTitleText}>{data.speciesHun}</Text>
                <View>
                    <Image
                        style={styles.listImage}
                        source={{ uri: data.smallImageLink }}
                        accessibilityRole='image'
                        accessibilityLabel={`${i18n.t('GALLERY_INDEX_IMAGE_DESCRIPTION')} ${data.speciesSci}`}
                    />
                </View>
                {data.locality && <Text style={styles.firstCommonText}>{data.locality}</Text>}
                {data.area && <Text style={styles.commonText}>{data.area}</Text>}
                <Text style={styles.commonText}>{data.date}</Text>
                {data.notes && <Text style={styles.commonText}>{data.notes}</Text>}
                {data.cameraType && <Text style={styles.commonText}>{data.cameraType}</Text>}
                {data.cameraSettings && data.cameraSettings.some(setting => setting !== '') && (
                    <Text style={styles.commonText}>{data.cameraSettings.join(', ')}</Text>
                )}
                <Text style={styles.lastCommonText}>{data.author}</Text>
                <View style={styles.galleryButtonContainer}>
                    <GlareolaButton
                        iconName={ICON_NAMES.IMAGE}
                        onPress={() => {
                            setModalVisible(!modalVisible);
                        }}
                        accessibilityLabel={i18n.t('BUTTON_IMAGE_LABEL')}
                    />
                </View>
            </View>
            <Modal style={{ padding: SPACING.LARGE }} animationType='fade' transparent visible={modalVisible}>
                <View style={styles.modal}>
                    <Image
                        style={styles.image}
                        source={{ uri: data.imageLink }}
                        accessibilityRole='image'
                        accessibilityLabel={`${i18n.t('GALLERY_IMAGE_DESCRIPTION')} ${data.speciesSci}`}
                    />
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
    galleryContainer: {
        ...CONTAINER_STYLES.COMMON_CONTAINER,
    },
    galleryButtonContainer: {
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
    listImage: {
        width: 150,
        height: 75,
        resizeMode: 'contain',
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
    firstCommonText: {
        ...TEXT_STYLES.COMMON,
        marginTop: SPACING.MEDIUM,
    },
    lastCommonText: {
        ...TEXT_STYLES.COMMON,
        marginBottom: SPACING.MEDIUM,
    },
});
