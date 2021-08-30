import * as React from 'react';
import { View, Text, Button, SafeAreaView, StyleSheet, Image, FlatList, Platform, ScrollView } from 'react-native';
import NewsCard from './NewsCard'
// import Search from './Search'
import Feather from 'react-native-vector-icons/Fontisto';
import Search from 'react-native-vector-icons/Feather';


// import Nav from './component/Nav'
export default function HomeScreen({ navigation }) {
  const [query, setquery] = React.useState('love')

  return (
    <ScrollView>
      <View style={styles.container}  >
{/*        
          <View style={styles.imageContainer}>
            <Image
              style={styles.headerLeft}
              source={{ uri: 'https://www.pngfind.com/pngs/m/55-552671_apple-iphone-clipart-samsung-logo-apple-logo-small.png' }}
            />
          </View>

          <Search name='search' size={24} color='#dd4141' title="Search"
            onPress={(event) => navigation.navigate("Search")}
          ></Search> */}

       

        <View style={styles.titleWrapper}>
          <Text style={styles.title}>Stories</Text>
          <View style={styles.slideWrapper}>
            <Image source={{ uri: 'https://img.pixers.pics/pho_wat(s3:700/FO/19/38/88/41/8/700_FO193888418_498d6a07ca8a75b4d6881e7c1eb76aec,700,467,cms:2018/10/5bd1b6b8d04b8_220x50-watermark.png,over,480,417,jpg)/pillow-covers-andes-region-bolivia-lama-closeup.jpg.jpg' }} style={styles.titleImage} />
            <View style={styles.imageAbsoluteWrapper}>
              <Feather name='bookmark' size={24} style={styles.featherImage} ></Feather>
              <Text style={styles.imageDis}>See what happen to this lama before dina take it </Text>
            </View>

          </View>
        </View>
        <View>
          {/* <Text>HI</Text> */}
          <FlatList
            data=''
            renderItem=''
            keyExtractor={item => item.id}
          />
        </View>
      </View>


      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button title="Search" onPress={(event) => navigation.navigate("Search")} />
        <Button title="sports" onPress={(event) => {
          setquery("sports")
        }} />
        <Button title=" cars" onPress={(event) => {
          setquery("cars")
        }} />
        <Button title=" music" onPress={(event) => {
          setquery("music")
        }} />
        <Button title=" animals" onPress={
          (event) => {
            setquery("animals")
          }}
        />
        <NewsCard query={query} />
      </View>
    </ScrollView>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  titleWrapper: {
    marginTop: 40,
    paddingHorizontal: 20

  },

  title: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 30,
    color: '#dd4141',
    fontWeight: 'bold'

  },
  slideWrapper: {
    marginTop: 30
  },

  titleImage: {
    width: '100%',
    height: 300,
    resizeMode: 'cover',
    borderRadius: Platform.OS === 'ios' ? 12 : 12

  },
  imageAbsoluteWrapper: {
    position: 'absolute',
    alignSelf: 'center'
  },
  imageDis: {
    top: 100
  },
  // headerLeft: {
  //   width: 50,
  //   height: 20,
  // },
})