import {
    StyleSheet,
    View,
    TextInput,
    TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default function SearchBar() {
    return (
        <View style={{ height: '10%', width: '100%', flexDirection: 'row', marginTop: 10, paddingHorizontal: 20, alignItems: 'center' }}>
            <View style={styles.searchBar}>
                <Icon name="search" size={25} color="#000" />
                <TextInput
                    style={{ marginLeft: 10, flex: 1, fontSize: 15, color: '#424242', paddingVertical: 10 }}
                    placeholder="Search job by name"
                />
                <TouchableOpacity onPress={() => alert('hello there')}>
                    <Icon name="filter" size={25} color="#000" />
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
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