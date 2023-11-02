import { FlatList, StyleSheet, Text, View } from 'react-native';

import { GalleryElement } from './GalleryElement/GalleryElement';
import { useFetchGallery } from '../../../hooks';
import { CONTAINER_STYLES, TEXT_STYLES } from '../../../styles';
import { Loading } from '../../Atomic/Loading';

interface IGalleryProps {
    url: string;
}

export const GalleryList = ({ url }: IGalleryProps) => {
    const { isLoading, error, data } = useFetchGallery(url);

    return (
        <View>
            {isLoading ? (
                <Loading />
            ) : error ? (
                <View style={styles.errorContainer}>
                    <Text style={styles.errorText} accessibilityLabel='error message'>
                        {error}
                    </Text>
                </View>
            ) : (
                data &&
                data?.length > 0 && (
                    <FlatList
                        data={data}
                        renderItem={element => <GalleryElement {...element.item} />}
                        keyExtractor={element => element.id}
                    />
                )
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    errorContainer: {
        ...CONTAINER_STYLES.ERROR,
    },
    errorText: {
        ...TEXT_STYLES.ERROR,
    },
});
