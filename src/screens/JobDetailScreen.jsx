import {
    Text,
    View,
    Image,
    StyleSheet,
    ScrollView,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { HeadingText } from '../components';

function RequirementItem({ text }) {
    return (
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start', paddingHorizontal: 20, marginTop: 5 }}>
            <View style={styles.bullet} />
            <Text style={{ color: '#000', fontSize: 13, lineHeight: 25, paddingLeft: 10 }}>
                {text}
            </Text>
        </View>
    );
}

export default function JobDetailsScreen({ route }) {
    const { job } = route.params;

    return (
        <>
            <StatusBar translucent backgroundColor='transparent' style='inverted' />
            <View style={{ justifyContent: 'center', height: '100%', width: '100%', paddingBottom: 10, backgroundColor: '#ffffff' }}>
                <ScrollView showsVerticalScrollIndicator={true} style={{ margin: 0, padding: 0 }}>
                    <View style={{ width: '100%' }}>
                        <Image style={{ width: '100%', height: 200, resizeMode: 'cover' }} source={job.banner} />
                        <View style={styles.overlay} />
                        <Image style={{ position: 'absolute', alignSelf: 'center', bottom: -25, width: 50, height: 50, borderRadius: 100 }} source={job.logo} />
                    </View>

                    <View style={{ marginTop: 40, justifyContent: 'center', alignItems: 'center' }} >
                        <Text style={{ color: '#000', fontSize: 25, fontWeight: '600' }}>{job.title}</Text>
                        <Text style={{ color: '#686666', fontSize: 13, paddingVertical: 5 }}>{job.company} - {job.location} - {job.salary}</Text>
                    </View>

                    <View style={{ marginTop: 20, justifyContent: 'flex-start', alignItems: 'flex-start' }} >
                        <HeadingText text="Job Description" />
                        <Text style={{ color: '#000', fontSize: 13, paddingHorizontal: 20, lineHeight: 25 }}>
                            {job.description}
                        </Text>
                    </View>

                    <View style={{ marginTop: 20, justifyContent: 'flex-start', alignItems: 'flex-start' }} >
                        <HeadingText text="Requirements" />
                        {job.requirements.map((requirement, index) => {
                            return (
                                <View key={index} style={{ width: '100%' }}>
                                    <RequirementItem text={requirement} />
                                </View>)
                        })}
                    </View>

                </ScrollView>

                <View style={{ justifyContent: 'center', alignItems: 'center' }} >
                    <View style={{ height: 60, width: 300, flexDirection: 'column', backgroundColor: '#224c6e', marginVertical: 20, borderRadius: 20, paddingVertical: 20, justifyContent: 'center', alignItems: 'center' }} >
                        <Text style={{ color: '#fff', fontSize: 15, fontWeight: '600' }}>Apply Now</Text>
                    </View>
                </View>

            </View>
        </>
    );
}

const styles = StyleSheet.create({
    overlay: {
        position: 'absolute',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        backgroundColor: 'black',
        opacity: 0.5,
    },
    bullet: {
        width: 6,
        height: 6,
        borderRadius: 3,
        backgroundColor: '#000000',
    },
});