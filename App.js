import { StatusBar } from 'expo-status-bar';
import { Button, SafeAreaView, StyleSheet, Text, View, Image, TextInput } from 'react-native';
import profileImage from './assets/profile.jpg';
import Icon from 'react-native-vector-icons/Ionicons';

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
      </View>
    </View>
  );
}

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={{ justifyContent: 'flex-start', height: '100%', width: '100%', backgroundColor: '#e9e9e9' }}>
        <StatusBar style="auto" />
        <Welcome />
        <SearchBar />

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
