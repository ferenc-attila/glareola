import { FlatList, StyleSheet, Text, View } from 'react-native';

import { Observation } from './Observation';
import { useFetchData } from '../../../hooks';
import { COLORS, SPACING, TEXT_STYLES } from '../../../styles';
import { IObservationListProps } from '../../../types/interfaces';
import { Loading } from '../../Atomic/Loading';

export const ObservationList = ({ url }: IObservationListProps) => {
    const { isLoading, error, data } = useFetchData(url);

    return (
        <View style={styles.scrollView}>
            {isLoading ? (
                <Loading />
            ) : error ? (
                <View style={styles.errorContainer}>
                    <Text style={styles.errorText} accessibilityLabel='error message'>
                        {error}
                    </Text>
                </View>
            ) : (
                <FlatList
                    data={data}
                    renderItem={observation => <Observation {...observation.item} />}
                    keyExtractor={observation => observation.webId.toString()}
                />
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    scrollView: {
        padding: SPACING.MEDIUM,
    },
    errorContainer: {
        width: '90%',
        alignItems: 'center',
        alignContent: 'center',
        alignSelf: 'center',
        backgroundColor: COLORS.BACKGROUND.ERROR,
        borderRadius: SPACING.SMALL,
    },
    errorText: {
        ...TEXT_STYLES.ERROR,
    },
});
