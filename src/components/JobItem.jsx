import {
    Text,
    View,
    Image,
    TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useState } from 'react';

export default function JobItem({ job }) {
    const [isFavourite, setIsFavourite] = useState(false);

    const handleFavourite = () => {
        setIsFavourite(!isFavourite);
    }

    return (
        <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', padding: 15, marginHorizontal: 5, backgroundColor: 'white', borderRadius: 10 }}>
            <Image style={{ width: 50, height: 50, borderRadius: 50 }} source={job.logo} />
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', borderRadius: 10 }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    <View style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start', padding: 15, }}>
                        <Text style={{ color: '#000', fontSize: 15, paddingVertical: 5, fontWeight: 500 }}>{job.title}</Text>
                        <Text style={{ color: '#686666', fontSize: 13 }}>{job.company} - {job.location}</Text>
                        <Text style={{ color: '#000', fontSize: 15, paddingVertical: 10, fontWeight: 600 }}>{job.salary}</Text>
                    </View>
                </View>

                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start', paddingHorizontal: 10 }}>
                    <TouchableOpacity onPress={() => handleFavourite()}>
                        <Icon name={isFavourite ? 'heart' : 'heart-outline'} size={30} color={isFavourite ? '#dd3838' : '#000000'} />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}