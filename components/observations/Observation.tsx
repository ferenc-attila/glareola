import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, Button, Modal, Image} from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import {IBirdingHuData} from '../../types/types';

export default function Observation(observationData: IBirdingHuData) {
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
                    <Text style={styles.observationHeader}>
                        {observationData.speciesSci}
                    </Text>
                    <Text style={styles.observationBody}>
                        {observationData.county}
                    </Text>
                    <Text style={styles.observationBody}>
                        {observationData.locality}
                    </Text>
                    <Text style={styles.observationBody}>
                        {observationData.area}
                    </Text>
                    <Text style={styles.observationBody}>
                        {observationData.date}
                    </Text>
                    <Text style={styles.observationBody}>
                        {observationData.individuals}
                    </Text>
                        <Button
                        title={'Show on map'}
                        onPress={() => setModalContent('map')}
                    />
                    {observationData.imageLink
                        && <Button
                            title={'Show image'}
                            onPress={() => setModalContent('image')}
                        />}
                </View>
            </View>
            <Modal
                animationType='slide'
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(!modalVisible);
                }}
            >
                <View style={styles.modalContainer}>
                    <View style={styles.modal}>
                        {modalContent == 'map'
                            && <MapView
                                style={styles.map}
                                initialRegion={{
                                    latitude: observationData.latitude,
                                    longitude: observationData.longitude,
                                    latitudeDelta: 0.0922,
                                    longitudeDelta: 0.0421,
                                }}
                            >
                                <Marker
                                    coordinate={{
                                        latitude: observationData.latitude,
                                        longitude: observationData.longitude,
                                    }}
                                    title={observationData.speciesSci}
                                    description={observationData.locality}
                                />
                            </MapView>}
                        {modalContent == 'image'
                            && observationData.imageLink
                            && <Image
                                source={{uri: observationData.imageLink}}
                                style={styles.image}
                            />}
                        <Button
                            title={'Close'}
                            onPress={() => setModalVisible(!modalVisible)}
                        />
                    </View>
                </View>
            </Modal>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#2e3a24',
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        flexDirection: 'row',
    },
    observationContainer: {
        backgroundColor: '#0c2506',
        borderRadius: 10,
        width: '90%',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 10,
        marginBottom: 10,
    },
    observationHeader: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff',
    },
    observationBody: {
        fontSize: 16,
        color: '#fff',
    },
    modalContainer: {
        flex: 1,
        backgroundColor: '#2e3a24',
        alignItems: 'center',
        justifyContent: 'center',
    },
    modal: {
        backgroundColor: '#57596b',
        padding: 10,
        margin: 10,
        width: '90%',
        height: '90%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    map: {
        width: '100%',
        height: '90%',
    },
    image: {
        margin: 10,
        width: '80%',
        height: '40%',
        borderRadius: 10,
        objectFit: 'scale-down',
    },
});
