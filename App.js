import { StatusBar } from 'expo-status-bar';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
  RefreshControl
} from 'react-native';
import { useState } from 'react';
import profileImage from './assets/profile.jpg';
import googleImage from './assets/google.jpg';
import microsoftImage from './assets/microsoft.jpg';
import linkedinImage from './assets/linkedin.jpg';
import appleImage from './assets/apple.jpg';
import netlfixImage from './assets/netflix.jpg';
import Icon from 'react-native-vector-icons/Ionicons';

function HeadingText({ text }) {
  return (
    <Text style={{ paddingVertical: 15, paddingHorizontal: 20, fontSize: 18, fontWeight: '600' }} >{text}</Text>
  );
}

function Welcome() {
  return (
    <View style={styles.welcome}>

      <View style={{ flexDirection: 'row', alignItems: 'flex-start', paddingVertical: 10 }}>
        <Image style={{ width: 50, height: 50, borderRadius: 50 }} source={profileImage} />
        <View style={{ flexDirection: 'column', alignItems: 'flex-start', paddingHorizontal: 20 }}>
          <Text style={{ color: 'black', fontSize: 15 }}>Welcome back, </Text>
          <Text style={{ color: 'black', fontSize: 20, fontWeight: '500' }}>Amin Hussein</Text>
        </View>
      </View>

      <View style={{ flexDirection: 'row', alignItems: 'flex-end' }}>
        <Icon name="notifications-outline" size={30} color="#000" />
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

function SearchBar() {
  return (
    <View style={{ height: '10%', width: '100%', flexDirection: 'row', marginTop: 10, paddingHorizontal: 20, alignItems: 'center' }}>
      <View style={styles.searchBar}>
        <Icon name="search" size={25} color="#000" />
        <TextInput
          style={{ marginLeft: 10, flex: 1, fontSize: 15, color: '#424242' }}
          placeholder="Search job by name"
        />
        <TouchableOpacity onPress={() => alert('hello there')}>
          <Icon name="filter" size={25} color="#000" />
        </TouchableOpacity>
      </View>
    </View>
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
          <View style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center', flex: 1, backgroundColor: '#d68039', borderRadius: 10 }}>
            <Text style={{ color: '#fff', fontSize: 15, padding: 6 }}>awaiting</Text>
          </View>
        </View>
      </View>
    </>
  );
}

function JobItem({ job }) {
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
        <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', padding: 10, height: 150 }}>
          {jobs.map((job, index) => {
            return <JobItem key={index} job={job} />
          })}
        </View>
      </ScrollView>
    </>
  );
}

export default function App() {
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = () => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ justifyContent: 'flex-start', height: '100%', width: '100%', backgroundColor: '#e9e9e9' }}>
        <StatusBar style="auto" />
        <Welcome />
        <ScrollView style={{ margin: 0, padding: 0 }} refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }>
          <SearchBar />
          <AppliedJobs />
          <SuggestedJobs />
        </ScrollView>
      </View >
    </SafeAreaView >
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
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  searchBar: {
    height: 50,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 10
  }
});
