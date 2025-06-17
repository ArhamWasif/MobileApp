import React from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Pressable,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import {hp, wp} from '../../../Utils/dimensions/dimensions';
import {useNavigation, useRoute} from '@react-navigation/native';

const DATA = [
  {
    id: '1',
    title: 'New Songs (Album)',
    artist: 'Artist: John Smith',
    image:
      'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress',
    likes: '1,500,000 Likes',
  },
  {
    id: '2',
    title: 'Isradea Palacio',
    artist: 'Any now',
    image:
      'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress',
  },
  {
    id: '3',
    title: 'Isradea Palacio',
    artist: 'Any now',

    image:
      'https://images.pexels.com/photos/3781521/pexels-photo-3781521.jpeg?auto=compress',
    artis: 'Any now',
  },
];

const App = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const {item} = route.params;
  const renderItem = ({item, index}) => (
    <View style={styles.listItem}>
      <Image source={{uri: item.image}} style={styles.listImage} />
      <View style={{marginLeft: 10}}>
        <Text style={styles.listTitle}>{item.title}</Text>
        <Text style={styles.listArtist}>{item.artist}</Text>
      </View>
      <TouchableOpacity style={styles.options}>
        <Feather name="more-horizontal" size={18} color="white" />
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.uppercontainer}>
        <Pressable onPress={() => navigation.goBack()}>
          <Feather name="arrow-left" size={20} color="#ffffff" />
        </Pressable>
        <View style={styles.searchContainer}>
          <TextInput
            placeholder="Find an playlist"
            placeholderTextColor="#aaa"
            style={styles.input}
          />
          <Feather name="search" size={20} color="#ffffff" />
        </View>
        <Feather name="play" size={20} color="#ffffff" />
      </View>

      <View style={styles.featuredCard}>
        <Image
          source={
            typeof item?.image === 'string' ? {uri: item.image} : item.image
          }
          style={styles.featuredImage}
        />
        <TouchableOpacity style={styles.playButton}>
          <Feather name="play" size={18} color="white" />
        </TouchableOpacity>
        <View style={styles.innerContainer}>
          <Text style={styles.featuredTitle}>{item.title}</Text>
          <Text style={styles.featuredArtist}>{DATA[0].artist}</Text>
          <View style={styles.Card}>
            <Text style={styles.likes}>{DATA[0].likes}</Text>
            <Text style={styles.likes}>|</Text>
            <Feather name="heart" size={18} color="white" />
            <Feather name="more-horizontal" size={18} color="white" />
          </View>
        </View>
      </View>

      <FlatList
        data={DATA.slice(1)}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    padding: 16,
    paddingTop: 30,
  },
  uppercontainer: {
    flexDirection: 'row',
    alignItems: 'center',

    alignContent: 'center',
    justifyContent: 'center',
    gap: 18,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1a1a1a',
    borderRadius: 30,
    paddingHorizontal: 10,

    width: wp('70'),
  },
  Card: {
    flexDirection: 'row',
    gap: 5,
  },
  input: {
    flex: 1,
    color: '#fff',
    paddingHorizontal: 10,
    borderRadius: 20,
  },
  featuredCard: {
    alignItems: 'center',
    marginBottom: 20,
    paddingTop: 24,
  },
  featuredImage: {
    width: wp('60'),
    height: hp('28'),
    borderRadius: 20,
  },
  playButton: {
    position: 'absolute',
    bottom: 54,
    right: wp('10'),
    backgroundColor: '#f7931e',
    borderRadius: 30,
    padding: 18,
  },
  featuredTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    marginTop: 10,
  },
  featuredArtist: {
    color: '#aaa',
  },
  innerContainer: {
    right: 40,
  },
  likes: {
    color: '#aaa',
    fontSize: 12,
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomColor: '#333',
    borderBottomWidth: 1,
  },
  listImage: {
    width: 45,
    height: 45,
    borderRadius: 10,
  },
  listTitle: {
    color: '#fff',
    fontSize: 14,
  },
  listArtist: {
    color: '#aaa',
    fontSize: 12,
  },
  options: {
    marginLeft: 'auto',
  },
});

export default App;
