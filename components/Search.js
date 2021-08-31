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
      const news = await fetch(`https://newsapi.org/v2/everything?q=${search}&apiKey=40f3f7aedd7a46b7942b8548e217c200&sortBy=popularity`)
      const row = await news.json();
      setData(row.articles)
    } catch (error) {
      console.log(error);
    }

  }

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
      <Button title="Search" onPress={fetchNews}     buttonStyle={{ borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0, backgroundColor:'#dd4141',marginTop:5,paddingTop:10,paddingLeft:25 ,paddingBottom:10,paddingRight:25, alignSelf:'center',borderRadius:2 }}/>
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
            title='Read More...'/>
        </Card>

      })}
    </ScrollView>
  )
}

export default Search




