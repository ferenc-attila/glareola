import {useEffect, useState} from "react";
import {ScrollView, StyleSheet, Text, View} from "react-native";
import BirdingHuExtractor from '../../utils/crawler/birding/birdingHuExtractor'
import Observation from "./Observation";
import {IBirdingHuData} from "../../types/types";
import {getUrls} from "./Observations.utils";

export default function Observations() {
    const baseUrl = 'http://birding.hu/index.php?page=megfigyelesek&cid=regionalis_fajok_adatai_az_elmult_14_napban';
    const [urls, setUrls] = useState([] as string[]);
    const [data, setData] = useState([] as IBirdingHuData[]);

    useEffect(() => {
        getUrls(baseUrl).then((urls) => {
            setUrls(urls);
        });
    }, []);

    useEffect(() => {
        const crawler = new BirdingHuExtractor(urls);
        setData([]);
        crawler.getData().then((result: IBirdingHuData[]) => {
                setData(result);
        });
    }, [urls]);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Observations</Text>
            <Text style={styles.title}>{`${urls}`}</Text>
            {urls
            ? <ScrollView>
                <>
                    {data.map((observation) => {
                        return <Observation
                            key={observation.webId}
                            {...observation}
                        />
                    })
                    }
                </>
            </ScrollView>
            : <Text>Loading...</Text>}
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
    },
});
