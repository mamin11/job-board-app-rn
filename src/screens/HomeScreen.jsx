import {
    View,
    ScrollView,
    Image,
    Text,
    RefreshControl,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useState } from 'react';
import { HeadingText, Welcome, SearchBar, JobItem } from '../components';
import { 
    googleImage, microsoftImage, linkedinImage, 
    appleImage, netlfixImage, facebookImage, amazonImage, spotifyImage 
} from '../../assets';

function SuggestedJobs() {
    const jobs = [
        { title: 'Software Engineer', company: 'Apple', location: 'London', salary: '£95,000/year', logo: appleImage },
        { title: 'UX Designer', company: 'Microsoft', location: 'Manchester', salary: '£78,000/year', logo: microsoftImage },
        { title: 'Staff Engineer', company: 'LinkedIn', location: 'London', salary: '£102,000/year', logo: linkedinImage },
        { title: 'Senior Developer', company: 'Netlfix', location: 'London', salary: '£122,000/year', logo: netlfixImage }
    ];
    return (
        <>
            <HeadingText text="Based on your interests" />
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{ margin: 0, padding: 0, height: 200 }}>
                <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', padding: 10 }}>
                    {jobs.map((job, index) => {
                        return <JobItem key={index} job={job} />
                    })}
                </View>
            </ScrollView>
        </>
    );
}

function AppliedJobs() {
    return (
        <>
            <HeadingText text="Ongoing interviews" />
            <View style={{
                paddingHorizontal: 20, flexDirection: 'row',
                justifyContent: 'center', alignItems: 'center', height: 120, width: '100%'
            }}>
                <View style={{
                    paddingHorizontal: 20, flexDirection: 'row',
                    justifyContent: 'center', alignItems: 'center', backgroundColor: '#224c6e', height: 120, width: '100%', borderRadius: 10
                }}>
                    <Image style={{ width: 50, height: 50, borderRadius: 50 }} source={googleImage} />
                    <View style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start', padding: 10 }}>
                        <Text style={{ color: '#fff', fontSize: 18, fontWeight: '600' }}>Software Engineer</Text>
                        <Text style={{ color: '#fff', fontSize: 13, paddingVertical: 2 }}>Google - Remote</Text>
                    </View>
                    <View style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginBottom: 15, flex: 1, backgroundColor: '#d68039', borderRadius: 10 }}>
                        <Text style={{ color: '#fff', fontSize: 15, padding: 6 }}>awaiting</Text>
                    </View>
                </View>
            </View>
        </>
    );
}

function RecentlyAddedJobs() {
    const jobs = [
        { title: 'UX Designer', company: 'Facebook', location: 'California', salary: '£88,000/year', logo: facebookImage },
        { title: 'Staff Engineer', company: 'Amazon', location: 'London', salary: '£132,000/year', logo: amazonImage },
        { title: 'Senior Developer', company: 'Spotify', location: 'London', salary: '£111,000/year', logo: spotifyImage }
    ];

    return (
        <>
            <HeadingText text="Recently added" />
            <View style={{ flexDirection: 'col', justifyContent: 'center', alignItems: 'flex-start', padding: 10 }}>
                {jobs.map((job, index) => {
                    return (
                        <View key={index} style={{ padding: 10, width: '100%' }}>
                            <JobItem key={index} job={job} />
                        </View>)
                })}
            </View>
        </>
    );
}

export default function HomeScreen() {
    const [refreshing, setRefreshing] = useState(false);

    const onRefresh = () => {
        setRefreshing(true);
        setTimeout(() => {
            setRefreshing(false);
        }, 2000);
    };

    return (
        <SafeAreaView>
            <View style={{ justifyContent: 'flex-start', height: '100%', width: '100%', backgroundColor: '#e9e9e9' }}>
                <Welcome />
                <ScrollView showsVerticalScrollIndicator={false} style={{ margin: 0, padding: 0 }} refreshControl={
                    <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
                }>
                    <SearchBar />
                    <AppliedJobs />
                    <SuggestedJobs />
                    <RecentlyAddedJobs />
                </ScrollView>
            </View >
        </SafeAreaView >
    );
}
