import { Text, View } from 'react-native';
import styles from '../styles/buttonStyle';
import { auth } from '../firebaseConfig';

export default function Listagem() {
    return (
        <View style={styles.container}>
            <Text>
    { auth.currentUser.displayName }</Text>
        </View>
    );
}

