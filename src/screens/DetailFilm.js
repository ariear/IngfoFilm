import { useState } from "react"
import { View , Text, StyleSheet, ImageBackground, Image, TouchableWithoutFeedback } from "react-native"
import Ionicon from 'react-native-vector-icons/Ionicons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

const DetailFilm = () => {
    const [content, setContent] = useState({
        aboutMovie: true,
        reviews: false,
        cast: false
    })

    return (
        <View style={style.container}>
            <View style={style.topBar}>
                <Ionicon name="chevron-back-outline" size={25} color="#ffff" />
                <Text style={{ 
                    color: '#ffffff',
                    fontWeight: '500',
                    letterSpacing: 1,
                    fontSize: 17
                 }}>Detail</Text>
                <Ionicon name="bookmark-outline" size={25} color="#ffff" />
            </View>

            <ImageBackground source={require('../assets/backdoor.png')} resizeMode="cover" style={style.backdrop}>
                 <View style={style.inBackdrop}>
                    <Image source={require('../assets/sampul.png')} style={style.sampul} />
                    <Text style={style.rating}><Ionicon name="star-outline" size={16} color="#FF8700" />  9.5</Text>
                 </View>
            </ImageBackground>

                <Text style={style.title}>Spiderman No Way Home</Text>

                <View style={style.detail}>
                    <Text style={style.textDetail}><MaterialCommunityIcons name="calendar-blank-outline" color="#92929D" size={16} />  2021</Text>
                    <View style={style.lineDetail}></View>
                    <Text style={style.textDetail}><MaterialCommunityIcons name="clock-time-three-outline" color="#92929D" size={16} />  148 minutes</Text>
                    <View style={style.lineDetail}></View>
                    <Text style={style.textDetail}><MaterialCommunityIcons name="ticket-confirmation-outline" color="#92929D" size={16} />  Action</Text>
                </View>

                <View style={style.listDetail}>
                    <TouchableWithoutFeedback onPress={() => {
                        setContent({
                            aboutMovie: true,
                            reviews: false,
                            cast: false
                        })
                    }} >
                    <Text style={[style.listDetailText,
                         {
                            borderBottomWidth: content.aboutMovie ? 2 : 0 , 
                            borderColor: '#3A3F47' 
                        }]}>About Movie</Text>
                    </TouchableWithoutFeedback>
                    <TouchableWithoutFeedback onPress={() => {
                        setContent({
                            aboutMovie: false,
                            reviews: true,
                            cast: false
                        })
                    }} >
                    <Text style={[style.listDetailText,
                         {
                            borderBottomWidth: content.reviews ? 2 : 0 , 
                            borderColor: '#3A3F47' 
                        }]}>About Movie</Text>
                    </TouchableWithoutFeedback>
                    <TouchableWithoutFeedback onPress={() => {
                        setContent({
                            aboutMovie: false,
                            reviews: false,
                            cast: true
                        })
                    }} >
                    <Text style={[style.listDetailText,
                         {
                            borderBottomWidth: content.cast ? 2 : 0 , 
                            borderColor: '#3A3F47' 
                        }]}>Cast</Text>
                    </TouchableWithoutFeedback>
                </View>

                <View style={style.contentDetail}>
                    {
                        content.aboutMovie &&
                    <Text style={{ color: '#ffffff' }}>From DC Comics comes the Suicide Squad, an antihero team of incarcerated supervillains who act as deniable assets for the United States government, undertaking high-risk black ops missions in exchange for commuted prison sentences.</Text>
                    }
                </View>
        </View>
    )
}

const style = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#242A32'
    },
    topBar:{
        paddingVertical: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 15
    },
    backdrop:{
        height: 200,
        justifyContent: 'flex-end'
    },
    inBackdrop:{
        paddingHorizontal: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end'
    },
    sampul:{
        borderRadius: 10,
        transform: [{translateY: 60}]
    },
    title:{
        fontSize: 18,
        color: '#ffffff',
        fontWeight: '500',
        marginLeft: 125,
        paddingTop: 10
    },
    rating:{
        color: '#FF8700',
        backgroundColor: '#ffff',
        marginBottom: 10,
        paddingHorizontal: 7,
        paddingVertical: 4,
        borderRadius: 10
    },
    detail:{
        paddingTop: 50,
        flexDirection: 'row',
        justifyContent: 'center'
    },
    textDetail:{
        color: '#92929D'
    },
    lineDetail:{
        borderWidth: 1,
        borderColor: '#92929D',
        marginHorizontal: 10
    },
    listDetail:{
        paddingTop: 30,
        paddingHorizontal: 15,
        flexDirection: 'row',
        marginBottom: 20
    },
    listDetailText:{
        color: '#ffff',
        marginRight: 20,
        paddingBottom: 10
    },
    contentDetail:{
        paddingHorizontal: 15
    }
})

export default DetailFilm