import { useEffect, useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import i18n from '../../localization/localization'
import BirdingHuExtractor from '../../utils/crawler/birding/birdingHuExtractor';
import { Observation } from '../Observation';
import { IBirdingHuData, IErrorMessage } from "../../types/types";

export const ObservationList = () => {
    const url = 'http://birding.hu/index.php?page=&cid=az_elmult_14_nap_ritkasagai&per_page=100';

    const [data, setData] = useState([] as IBirdingHuData[]);
    const [isError, setIsError] = useState(false);
    const [error, setError] = useState({} as IErrorMessage);

    useEffect(() => {
        const crawler = new BirdingHuExtractor(url);
        let ignore = false;
        setData([]);
        crawler.getData().then((result) => {
            if (!ignore && Array.isArray(result)) {
                setData(result);
            }
            if (!ignore && Array.isArray(result) && result.length === 0) {
                setError({message: 'No data found'});
                setIsError(true);
            }
            if (!ignore && result.hasOwnProperty('message')) {
                setError(result as IErrorMessage);
                setIsError(true);
            }
        });
        return () => {
            ignore = true;
        }
    }, [url]);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{i18n.t('OBSERVATIONS_SCREEN_TITLE')}</Text>
            <ScrollView>
                {isError
                    ? <>
                        <Text>{error.message}</Text>
                        <Text>More details</Text>
                        <Text>{error.error?.name}</Text>
                        <Text>{error.error?.message}</Text>
                    </>
                    : <>
                        {data.map((observation) => {
                            return <Observation
                                key={observation.webId}
                                {...observation}
                            />
                            })
                        }
                    </>}
            </ScrollView>
        </View>
    );
}

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
