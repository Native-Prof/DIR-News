// import React from 'react'
// import { View, Text, SafeAreaView, StyleSheet, Image, FlatList, Platform } from 'react-native';
// import Feather from 'react-native-vector-icons/Fontisto';

// Feather.loadFont();

// export default function Main() {
//     return (
//         <View style={styles.container} >

//             <View style={styles.titleWrapper}>
//                 <Text style={styles.title}>Stories</Text>
//                 <View style={styles.slideWrapper}>
//                     <Image source={{ uri: 'https://img.pixers.pics/pho_wat(s3:700/FO/19/38/88/41/8/700_FO193888418_498d6a07ca8a75b4d6881e7c1eb76aec,700,467,cms:2018/10/5bd1b6b8d04b8_220x50-watermark.png,over,480,417,jpg)/pillow-covers-andes-region-bolivia-lama-closeup.jpg.jpg' }} style={styles.titleImage} />
//                     <View style={styles.imageAbsoluteWrapper}>
//                     <Feather name='bookmark' size={24} style={styles.featherImage}></Feather>
//                     <Text style={styles.imageDis}>See what happen to this lama before dina take it </Text>

//                     </View>
        
//                 </View>
//             </View>
//             <View>
//                 <Text>HI</Text>
//                 <FlatList
//                     data=''
//                     renderItem=''
//                     keyExtractor={item => item.id}
//                 />
//             </View>
//         </View>
//     );
// }


// const styles = StyleSheet.create({
//     container: {
//         flex: 1
//     },
//     titleWrapper: {
//         marginTop: 40,
//         paddingHorizontal: 20

//     },

//     title: {
//         fontFamily: 'Montserrat-Regular',
//         fontSize: 30,
//         color: '#dd4141',
//         fontWeight: 'bold'

//     },
//     slideWrapper: {
//         marginTop: 30
//     },

//     titleImage: {
//         width: '100%',
//         height: 300,
//         resizeMode: 'cover',
//         borderRadius: Platform.OS === 'ios' ? 12 : 12

//     },
//     imageAbsoluteWrapper:{
//         position:'absolute',
//         alignSelf:'center'
//     },
//     imageDis:{
//      top:100
//     }

// })

