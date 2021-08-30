import * as React from 'react';
// import axios from 'axios';
import { View, Text, Image, FlatList, ScrollView, Linking } from 'react-native'
import { Card, Button, Icon, SearchBar } from 'react-native-elements'



function Search() {
  const [data, setData] = React.useState([])
  const [search, setsearch] = React.useState("")
  // const [search, setquery] = React.useState("")
  const fetchNews = async () => {
    try {
      const news = await fetch(`https://newsapi.org/v2/everything?q=${search}&apiKey=a39c18677ad046d7b17177486b4695ef&sortBy=popularity`)
      const row = await news.json();
      console.log(row.articles);
      setData(row.articles)
      // console.log(navigation.query);
    } catch (error) {
      console.log(error);
    }

  }

  // React.useEffect(() => {
  //   (async () => {

  //     await fetchNews();


  //   })()
  // }, [search])


  const updateSearch = (search) => {
    setsearch(search)
    // console.log(search);
  };

  return (
    <ScrollView>
      <SearchBar
        placeholder="Type Here..."
        onChangeText={updateSearch}
        value={search}

      />
      <Button title="Search" onPress={fetchNews} />
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

export default Search




