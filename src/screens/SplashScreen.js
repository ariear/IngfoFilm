import { StackActions } from "@react-navigation/native";
import { useEffect } from "react"
import { View , StyleSheet, StatusBar } from "react-native"
import PopCorn from '../assets/icon/popcorn.svg'

const SplashScreen = ({navigation}) => {

    useEffect(() => {
        setTimeout(() => {
            navigation.dispatch(StackActions.replace('Home'))
        }, 1000);
    }, []);

  return (
    <View style={style.container} >
      <StatusBar barStyle="light-content" backgroundColor="#242A32" />
      <PopCorn width="40%" height="30%" />
    </View>
  )
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#242A32'
  }
})

export default SplashScreen