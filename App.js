import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import Octicons from 'react-native-vector-icons/Octicons'
import DetailFilm from "./src/screens/DetailFilm"
import Home from "./src/screens/Home"
import Search from "./src/screens/Search"
import WatchList from "./src/screens/WatchList"
import { useFonts } from 'expo-font';

const Stack = createNativeStackNavigator()
const Tabs = createBottomTabNavigator()

const App = () => {
  const [fontsLoaded] = useFonts({
    'Poppins-SemiBold': require('./assets/fonts/Poppins-SemiBold.ttf'),
    'Poppins-Regular': require('./assets/fonts/Poppins-Regular.ttf'),
    'Poppins-Medium': require('./assets/fonts/Poppins-Medium.ttf'),
    'Roboto-Medium': require('./assets/fonts/Roboto-Medium.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  }
  
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }} >
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="DetailFilm" component={DetailFilm} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App

const HomeScreen = () => {
  return (
    <Tabs.Navigator screenOptions={{ 
      headerShown: false,
      tabBarStyle:{
        backgroundColor: '#242A32',
        borderTopColor: '#0296E5',
        height: 60,
        paddingVertical: 5
      },
      tabBarInactiveTintColor: '#000000'
    }} >
      <Tabs.Screen name="Home" component={Home} options={{ 
        tabBarIcon: ({focused}) => {
          return(
            <Octicons name="home" size={25} color={focused ? '#0296E5' : '#67686D'} />
          )
        },
        tabBarLabelStyle:{
          marginBottom: 5,
          fontFamily: 'Roboto-Medium',
          fontSize: 11
        },
        tabBarInactiveTintColor: '#67686D',
        tabBarActiveTintColor: '#0296E5'
       }} />
      <Tabs.Screen name="Search" component={Search} options={{ 
        tabBarIcon: ({focused}) => {
            return(
               <Octicons name="search" size={25} color={focused ? '#0296E5' : '#67686D'} />
            )
          },  
        tabBarLabelStyle:{
          marginBottom: 5,
          fontFamily: 'Roboto-Medium',
          fontSize: 11
        },
        tabBarInactiveTintColor: '#67686D',
        tabBarActiveTintColor: '#0296E5'
       }} />
      <Tabs.Screen name="WatchList" component={WatchList} options={{ 
        tabBarIcon: ({focused}) => {
            return(
               <Octicons name="bookmark" size={25} color={focused ? '#0296E5' : '#67686D'} />
            )
          },
          
        tabBarLabelStyle:{
          marginBottom: 5,
          fontFamily: 'Roboto-Medium',
          fontSize: 11
        },
        tabBarInactiveTintColor: '#67686D',
        tabBarActiveTintColor: '#0296E5'
       }} />
    </Tabs.Navigator>
  )
}