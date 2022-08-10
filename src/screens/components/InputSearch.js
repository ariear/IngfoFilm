import { TextInput , StyleSheet } from "react-native"

const InputSearch = () => {
    return(
        <TextInput placeholder="Search" style={style.inputSearch} />
    )
}

const style = StyleSheet.create({
    inputSearch: {
        backgroundColor: '#3A3F47',
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderRadius: 20,
        color: '#ffffff',
        marginBottom: 25
    }
})

export default InputSearch