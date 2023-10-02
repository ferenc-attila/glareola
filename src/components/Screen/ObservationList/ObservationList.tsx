import { ScrollView, StyleSheet, Text, View } from 'react-native';

import { useFetchData } from '../../../hooks';
import i18n from '../../../localization';
import { IObservationListProps } from '../../../types/interfaces';
import { Loading } from '../../Atomic/Loading';
import { Observation } from '../../Molecula/Observation';

export const ObservationList = ({ url }: IObservationListProps) => {
    const { isLoading, error, data } = useFetchData(url);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{i18n.t('OBSERVATIONS_SCREEN_TITLE')}</Text>
            <ScrollView>
                {isLoading ? (
                    <Loading />
                ) : error ? (
                    <>
                        <Text accessibilityLabel='error message'>{error}</Text>
                    </>
                ) : (
                    <>
                        {data?.map(observation => {
                            return <Observation key={observation.webId} {...observation} />;
                        })}
                    </>
                )}
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#2e3a24',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 1,
    },
    title: {
        color: '#fff',
        fontWeight: '900',
        fontSize: 22,
        padding: 10,
    },
});
