import * as React from 'react';
import { View, Text, SafeAreaView, TouchableOpacity, StyleSheet, Image, FlatList, Platform, ScrollView } from 'react-native';
import NewsCard from './NewsCard'
import Feather from 'react-native-vector-icons/Fontisto';
import Search from 'react-native-vector-icons/Feather';
import { Button } from 'react-native-elements';
import Weather from 'react-native-vector-icons/MaterialCommunityIcons'
export default function HomeScreen({ navigation }) {
  const [query, setquery] = React.useState('love');
  const [image, setimage] = React.useState('https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg');


  return (
    <>
      <View style={styles.headerWrapper}>
        <Image style={styles.headerLeft}
          source={require('./dir_news_logo2.png')}
        />
        <View style={styles.headerRight}>
            <Weather style={styles.featherheaderRight} name='weather-cloudy' size={24} color='#dd4141' title="Search"
          onPress={(event) => navigation.navigate("Weather")}
        ></Weather>

        <Search style={styles.featherheaderRight} name='search' size={24} color='#dd4141' title="Search"
          onPress={(event) => navigation.navigate("Search")}
        ></Search>
        </View>

      </View>
      <ScrollView>

        <View style={styles.container}  >
          <View style={styles.titleWrapper}>
            <Text style={styles.title}>Stories</Text>
            <View style={styles.slideWrapper}>
              <Image source={{ uri: image }} style={styles.titleImage} />
              <View style={styles.imageAbsoluteWrapper}>
                {/* <Feather color='white' name='bookmark' size={27} style={styles.featherImage} ></Feather> */}
                {/* <Text style={styles.imageDis}>See what happen to this lama before dina take it </Text> */}
              </View>

            </View>
          </View>
          <View>
            <FlatList
              data=''
              renderItem=''
              keyExtractor={item => item.id}
            />
          </View>
        </View>

        <View style={styles.buttons}>

          <TouchableOpacity
            style={styles.button}
            onPress={(event) => {
              setquery("sports")
              setimage('https://data.whicdn.com/images/354948607/original.jpg')
            }}
          >
            <Text style={styles.buttonStyle}>sports</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={(event) => {
              setquery("cars")
              setimage('https://data.whicdn.com/images/356571585/original.jpg')
            }}
          >
            <Text style={styles.buttonStyle}>cars</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={(event) => {
              setquery("music")
              setimage('https://data.whicdn.com/images/358007200/original.jpg')
            }}
          >
            <Text style={styles.buttonStyle}>music</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={(event) => {
              setquery("animals")
              setimage('https://data.whicdn.com/images/355454238/original.jpg')
            }}
          >
            <Text style={styles.buttonStyle}>animals</Text>
          </TouchableOpacity>

        </View>
        <NewsCard query={query} />

      </ScrollView >
    </>
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
    justifyContent: 'center',
    alignItems: 'center'
  },
  imageDis: {
    alignSelf: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    backgroundColor: '#e6e1e1cf',
    width: '102%',
    height: 300,
    marginLeft: 12,
    borderRadius: Platform.OS === 'ios' ? 12 : 12
  },

  headerWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    backgroundColor: 'white',
    paddingTop: 40,
    paddingBottom: 8,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 6,

  },

  headerLeft: {
    width: '42%',
    height: 37,
    paddingRight: 20
  },

  buttons: {
    flex: 1,
    flexDirection: 'row',
    paddingTop: 25,
    justifyContent: 'space-around',
  },

  button: {
    alignItems: "center",
    backgroundColor: 'rgba(249, 249, 249, 0.04)',
    borderStyle: 'solid',
    padding: 10,
    borderWidth: 1,
    borderRadius: 1,
    borderColor: '#dd4141'
  },
  buttonStyle: {
    fontSize: 17,
    color: '#dd4141'
  },
  featherImage: {
    paddingLeft: 10,
    paddingTop: 10,
  },

  featherheaderRight:{
    marginLeft:20
  },
  headerRight:{
    flexDirection:'row'
  }
})