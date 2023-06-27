import { Text, View } from 'react-native';
import styles from '../styles/buttonStyle';
import { auth } from '../firebaseConfig';
import { useEffect, useState } from 'react';
import axios from "axios"; 

export default function Listagem() {
    const [transactions, setTransactions] = useState([])
    useEffect(() => {
        const getTransactions = async () => {
            try {
                const response = await axios.get('http://localhost:3000/transactions')
                if (response.status === 200)
                    setTransactions(response.data)
            } catch (err) {
                console.log(err);
            }
        }
        getTransactions()
    }, [])
    return (
        <View style={styles.container}>
            <Text>
                {auth.currentUser.displayName}</Text>
            <Text>{transactions.map((transactions, index) => {
                return (
                    <View>
                        <Text></Text>
                        <Text></Text>
                        <Text></Text>
                    </View>
                )
            })}</Text>
        </View>
    );
}

