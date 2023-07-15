import {useEffect, useState} from "react";
import {ScrollView, StyleSheet, Text, View} from "react-native";
import DropDownPicker from 'react-native-dropdown-picker'
import BirdingHuExtractor from '../../utils/crawler/birding/birdingHuExtractor'
import Observation from "./Observation";
import {IBirdingHuData} from "../../types/types";

export default function Observations() {
    const urls = [
        {
            value: 'http://birding.hu/index.php?page=megfigyelesek&cid=regionalis_fajok_adatai_az_elmult_14_napban',
            label: 'First page'
        },
        {
            value: 'http://birding.hu/index.php?page=megfigyelesek&cid=regionalis_fajok_adatai_az_elmult_14_napban&lap=100',
            label: 'Second page'
        },
    ]

    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(urls[0].value);
    const [data, setData] = useState([] as IBirdingHuData[]);

    useEffect(() => {
        const crawler = new BirdingHuExtractor(value);
        let ignore = false;
        setData([]);
        crawler.getData().then((result: IBirdingHuData[]) => {
            if (!ignore) {
                setData(result);
            }
        });
        return () => {
            ignore = true;
        }
    }, [value]);

    return (
        <View style={styles.container}>
            <View>
                <DropDownPicker
                    open={open}
                    value={value}
                    items={urls}
                    setOpen={setOpen}
                    setValue={setValue}
                    maxHeight={3000}
                />
            </View>
            <Text style={styles.title}>Observations</Text>
            <ScrollView>
                <>
                    {data.map((observation) => {
                        return <Observation
                            key={observation.id}
                            {...observation}
                        />
                    })
                    }
                </>
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
    },
});
