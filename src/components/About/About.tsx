import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { ABOUT } from '../../content';

const createTextComponents = (text: string, index: number | string, style: object) => {
            return <Text
                key={index}
                style={style}
            >
                {text}
            </Text>
}

export const About = () => {
    return (
        <View style={styles.textContainer}>
            <ScrollView>
                <View style={styles.textContainer}>
                    <Text style={styles.title}>
                        {ABOUT.APP.TITLE}
                    </Text>
                    {Object.values(ABOUT.APP).map((value, index) => {
                        if (typeof value === 'string' && value !== ABOUT.APP.TITLE) {
                            return createTextComponents(value, index, styles.description);
                            }
                        }
                    )}
                    <Text style={styles.description}>
                        {ABOUT.APP.LICENSE.SHORT_NAME}
                    </Text>
                    <Text style={styles.title}>
                        {ABOUT.COVER_IMAGE.TITLE}
                    </Text>
                    {Object.values(ABOUT.COVER_IMAGE).map((value, index) => {
                        if (typeof value === 'string' && value !== ABOUT.COVER_IMAGE.TITLE) {
                            return createTextComponents(value, index, styles.description);
                            }
                        }
                    )}
                    <Text style={styles.description}>
                        {ABOUT.COVER_IMAGE.LICENSE.SHORT_NAME}
                    </Text>
                    <Text style={styles.title}>
                        {ABOUT.ICON_IMAGE.TITLE}
                    </Text>
                    {Object.values(ABOUT.ICON_IMAGE).map((value, index) => {
                        if (typeof value === 'string' && value !== ABOUT.ICON_IMAGE.TITLE) {
                            return createTextComponents(value, index, styles.description);
                            }
                        }
                    )}
                    <Text style={styles.description}>
                        {ABOUT.ICON_IMAGE.LICENSE.SHORT_NAME}
                    </Text>
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    textContainer: {
        flex: 1,
        backgroundColor: '#2e3a24',
        alignItems: 'center',
    },
    title: {
        marginTop: 25,
        color: '#fff',
        fontWeight: '900',
        fontSize: 22,
        padding: 10,
    },
    description: {
        color: '#fff',
        fontSize: 16,
        padding: 5,
        textAlign: 'center',
    },
});
