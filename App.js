import { StatusBar } from 'expo-status-bar';
import { useState } from 'react'
import { StyleSheet, Button, Text, View, Image, TextInput, Touchable, TouchableOpacity } from 'react-native';
import Logo from './assets/favicon.png';
import CustomInput from './components/CustomInput';
import Styles from './styles/buttonStyle';


export default function App() {

  const [email, setEmail] = useState()
  const [password, setPassword] = useState()

  const setEmailInputValue = (value) => {
    setEmail(value)
  }
  const setPassswordInputValue = (value) => {
    setPassword(value)
  }
  return (
    <View style={styles.container}>
      <Image
        source={'./assets/favicon.png'}
        style={{
          whidth: 50,
          height: 50
        }}
        />

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

      <TouchableOpacity>
        <View style={Styles.Button}>
          <Text style={{color:'#FFFFFF'}}>Entrar</Text>
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
