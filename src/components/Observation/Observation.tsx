import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Modal, Image, Pressable } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { IBirdingHuData } from '../../types/types';

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
                    <Text style={styles.observationHeader}>
                        {observationData.speciesHun}
                    </Text>
                    <Text style={styles.observationBody}>
                        {observationData.locality}
                    </Text>
                    <Text style={styles.observationBody}>
                        {observationData.county}
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
                    <Text style={styles.observationBody}>
                        {observationData.observers.join(', ')}
                    </Text>
                    {observationData.notes
                        && <Text style={styles.observationBody}>
                        {observationData.notes}
                    </Text>}
                    <Pressable onPress={() => setModalContent('map')}>
                        <Text style={styles.button}> Show on map </Text>
                    </Pressable>
                    {observationData.imageLink
                        && <Pressable onPress={() => setModalContent('image')}>
                            <Text style={styles.button}> Show image </Text>
                        </Pressable>}
                </View>
            </View>
            <Modal
                animationType="slide"
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
                                style={styles.image}
                                source={{uri: observationData.imageLink}}
                            />}
                        <Pressable onPress={() => setModalVisible(!modalVisible)}>
                            <Text style={styles.button}>Close</Text>
                        </Pressable>
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
    button: {
        padding: 10,
        margin: 10,
        borderRadius: 5,
        backgroundColor: '#4d9460',
        color: '#ffffff',
        fontSize: 15,
        fontWeight: 'bold'
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
    map: {
        width: '100%',
        height: '90%',
        margin: 10,
    },
    image: {
        margin: 10,
        width: '100%',
        height: '90%',
        resizeMode: 'contain',
    },
});
