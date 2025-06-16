import {View, Text, FlatList, Image, Pressable} from 'react-native';
import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import createStyles from './styles';
import assets from '../../assets/index';
import {useNavigation} from '@react-navigation/native';
const styles = createStyles();

const home = () => {
  const navigation = useNavigation();
  const section1 = [
    {
      id: '1',
      title: 'Solo Training',

      image: assets.img2,
    },
    {
      id: '2',
      title: 'Semi Private ',
      image: assets.doctor,
    },
    {
      id: '3',
      title: 'Small Group Training',

      image: assets.home,
    },
    {
      id: '4',
      title: 'Recharge Training',
      image: assets.profile,
    },
  ];
  const section2 = [
    {
      id: '1',
      title: 'Solo Training',
      text2: 'Active',
      image: assets.image,
    },
    {
      id: '2',
      title: 'Semi Private Training',
      text: 'Active',
      image: assets.image,
    },
    {
      id: '3',
      title: 'Small Group Training',
      text: 'Active',
      image:
        'https://images.pexels.com/photos/2827392/pexels-photo-2827392.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    {
      id: '4',
      title: 'Recharge Training',
      text: 'Active',
      image:
        'https://images.pexels.com/photos/2827392/pexels-photo-2827392.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
  ];
  const section3 = [
    {
      id: '1',
      title: 'Solo Training',
      image: assets.doctor,
    },
    {
      id: '2',
      title: 'Semi Private ',
      image: assets.taskit,
    },
    {
      id: '3',
      title: 'Small Group ',
      image: assets.img2,
    },
    {
      id: '4',
      title: 'Recharge Training',

      image:
        'https://images.pexels.com/photos/6749777/pexels-photo-6749777.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
    },
  ];
  const renderItems = ({item}) => (
    <View style={styles.main2}>
      <Pressable onPress={() => navigation.navigate('SubScreen', {item})}>
        <Image source={item.image} style={styles.image} />
        <Text style={styles.text1}>{item.title}</Text>
      </Pressable>
    </View>
  );
  const renderItems1 = ({item}) => (
    <View style={styles.main2}>
      <View>
        <Image source={item.image} style={styles.image1} />
        <Text style={styles.text1}>{item.title}</Text>
      </View>
    </View>
  );
  const renderItems2 = ({item}) => (
    <View style={styles.main}>
      <View>
        <Image source={item.image} style={styles.image2} />
        <Text style={styles.text3}>{item.title}</Text>
      </View>
    </View>
  );
  return (
    <SafeAreaProvider style={styles.SafeArea}>
      <View style={styles.container}>
        <Text style={styles.text}>Recently Played</Text>
        <FlatList
          data={section1}
          horizontal
          keyExtractor={item => item.id}
          renderItem={renderItems}
          showsHorizontalScrollIndicator={false}
        />
      </View>
      <View style={styles.container}>
        <Text style={styles.text}>Try new release</Text>
        <FlatList
          data={section2}
          horizontal
          keyExtractor={item => item.id}
          renderItem={renderItems1}
          showsHorizontalScrollIndicator={false}
        />
      </View>
      <View style={styles.container}>
        <Text style={styles.text}>Featured Charts</Text>
        <FlatList
          data={section3}
          horizontal
          keyExtractor={item => item.id}
          renderItem={renderItems2}
          showsHorizontalScrollIndicator={false}
        />
      </View>
    </SafeAreaProvider>
  );
};

export default home;
