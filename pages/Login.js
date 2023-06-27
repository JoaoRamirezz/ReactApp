import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react'
import { StyleSheet, Button, Text, View, Image, TextInput, Touchable, TouchableOpacity } from 'react-native';
import Logo from '.././assets/favicon.png';
import CustomInput from '../components/CustomInput';
import Styles from '../styles/buttonStyle';
import { app } from '../firebaseConfig';
import { getAuth, createUserWithEmailAndPassword , signInWithEmailAndPassword} from '@firebase/auth';
import { useNavigation } from '@react-navigation/native';
import {navigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';


export default function App() {
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const auth = getAuth(app);
  const navigation = useNavigation()


  const GoCadastro = () =>{
    navigation.navigate('Cadastro')
  }

  const setEmailInputValue = (value) => {
    setEmail(value)
  }
  const setPassswordInputValue = (value) => {
    setPassword(value)
  }

  const createUser = () => {
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredentials) => {
      console.log(userCredentials)
    }).catch((err) => {
      console.error(err)
    })
  }
  const signIn = () => {
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredentials) => {
      navigation.navigate('Listagem')
    }).catch((err) => {
      console.error(err)
    })
  }
  return (
    <View style={styles.container}>
      <Image
        source={Logo}
        style={{
          width: 60,
          height: 60,
          marginBottom: 10
        }}
      ></Image>

      <CustomInput
        value={email}
        funcao={setEmailInputValue}
        placeholder='E-mail'
      />

      <CustomInput
        placeholder="Senha"
        value={password}
        funcao={setPassswordInputValue}
        isPassword={true}
      />

      <TouchableOpacity onPress={signIn}>
        <View style={Styles.button}>
          <Text style={{ color: '#FFFFFF' }}>Entrar</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={GoCadastro}>
        <View style={Styles.button}>
          <Text style={{ color: '#FFFFFF' }}>Cadastrar</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#182625'
  },
});
