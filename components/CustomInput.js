import { StyleSheet, TextInput } from "react-native"

const CustomInput = (props) => {
    return (
        <TextInput
            style = {styles.inputWrapper}
            placeholder={props.placeholder}
            value={props.value}
            onChangeText={props.funcao}
            secureTextEntry={props.isPassword ? true : false}
        ></TextInput>
    )
}

const styles = StyleSheet.create({
    inputWrapper: {
        width: 305,
        height: 45,
        backgroundColor: '#455559',
        borderRadius: 5,
        color: '#FFFFFF',
        marginTop:10,
        paddingLeft:10
    }
})
export default CustomInput