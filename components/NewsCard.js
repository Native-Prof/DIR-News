import * as React from 'react';
// import axios from 'axios';
import { View, Text, Image, FlatList, ScrollView, Linking,StyleSheet } from 'react-native'
import { Card, Button, Icon } from 'react-native-elements'

function NewsCard(props) {
  const [data, setData] = React.useState([])


  const fetchNews = async () => {
    try {
      const news = await fetch(`https://newsapi.org/v2/everything?q=${props.query}&apiKey=a39c18677ad046d7b17177486b4695ef&sortBy=popularity`)
      const row = await news.json();
      // console.log(row.articles);
      setData(row.articles)

    } catch (error) {
      // console.log(error);
    }

  }

  React.useEffect(() => {
    (async () => {

      await fetchNews();


    })()
  }, [props.query])

  return (
    <ScrollView>
      <Card.Title style={styles.title}>{props.query}</Card.Title>
      {data.map((e) => {

        return <Card>
          <Card.Title>{e.title}</Card.Title>
          <Card.Divider />
          <Text style={{ marginBottom: 10 }}>
            {e.description}
          </Text>
          <Card.Image source={{ uri: `${e.urlToImage}` }}>
          </Card.Image>
          <Button
            onPress={() => Linking.openURL(`${e.url}`)}
            buttonStyle={{ borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0 }}
            title='Read More...' />
        </Card>
      })}
    </ScrollView>
  )
}
const styles = StyleSheet.create({
  title: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 30,
    color: '#dd4141',
    fontWeight: 'bold'

  },
})
export default NewsCard




