import { TextInput , StyleSheet, View } from "react-native"
import Feather from 'react-native-vector-icons/Feather'

const InputSearch = ({iseditable = true ,query, setQuery, searchFilm}) => {
    return(
        <View style={style.wrapSearch}>
            <TextInput placeholder="Search" 
                    placeholderTextColor="#67686D" 
                    style={style.inputSearch} 
                    editable={iseditable} 
                    autoFocus={true}
                    value={query}
                    onChangeText={(e) => setQuery(e) }
                    onSubmitEditing={() => searchFilm()} />
            <Feather name="search" size={22} color="#67686D" />
        </View>
    )
}

const style = StyleSheet.create({
    wrapSearch:{
        backgroundColor: '#3A3F47',
        marginBottom: 25,
        paddingHorizontal: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderRadius: 20,
    },
    inputSearch: {
        paddingVertical: 10,
        color: '#ffffff',
        width: '85%'
    }
})

export default InputSearch