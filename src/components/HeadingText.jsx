import {
    Text,
} from 'react-native';

export default function HeadingText({ text }) {
    return (
        <Text style={{ paddingVertical: 15, paddingHorizontal: 20, fontSize: 18, fontWeight: '600' }} >{text}</Text>
    );
}