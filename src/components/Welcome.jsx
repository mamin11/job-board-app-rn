import profileImage from '../../assets/profile.jpg';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
} from 'react-native';


export default function Welcome() {
    const navigation = useNavigation();

    return (
        <View style={styles.welcome}>

            <View style={{ flexDirection: 'row', alignItems: 'flex-start', paddingVertical: 10 }}>
                <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
                    <Image style={{ width: 50, height: 50, borderRadius: 50 }} source={profileImage} />
                </TouchableOpacity>
                <View style={{ flexDirection: 'column', alignItems: 'flex-start', paddingHorizontal: 20 }}>
                    <Text style={{ color: 'black', fontSize: 15 }}>Welcome back, </Text>
                    <Text style={{ color: 'black', fontSize: 20, fontWeight: '500' }}>Amin Hussein</Text>
                </View>
            </View>

            <View style={{ flexDirection: 'row', alignItems: 'flex-end' }}>
                <TouchableOpacity onPress={() => navigation.navigate('Job Details')}>
                    <Icon name="notifications-outline" size={30} color="#000" />
                </TouchableOpacity>
                <View style={{
                    position: 'absolute',
                    right: 0,
                    top: 0,
                    backgroundColor: 'red',
                    borderRadius: 5,
                    width: 10,
                    height: 10,
                }} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    welcome: {
        height: '10%', width: '100%',
        flexDirection: 'row',
        backgroundColor: '#fff',
        paddingVertical: 10,
        paddingHorizontal: 20,
        justifyContent: 'space-between',
        alignItems: 'center',
        borderRadius: 20,
    },
});