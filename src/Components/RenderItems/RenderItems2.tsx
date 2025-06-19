import React from 'react';
import {View, Text, Pressable, Image, StyleSheet} from 'react-native';

import {useNavigation} from '@react-navigation/native';
import {hp} from '../../Utils/dimensions/dimensions';

const SessionCard2 = ({item}) => {
  const navigation = useNavigation();

  return (
     <View style={styles.main}>
          <Pressable onPress={() => navigation.navigate('SubScreen', {item})}>
            <Image source={item.image} style={styles.image2} />
            <Text style={styles.text3}>{item.title}</Text>
         </Pressable>
        </View>
  );
};

const styles = StyleSheet.create({
  main2: {
    alignItems: 'center',
    marginRight: 20,
  },
  text: {
    color: 'white',
    fontSize: 20,
  },
  text1: {
    color: 'white',
    fontSize: 16,
    right: hp('-4'),
    marginTop: 9,
  },
  text2: {
    color: 'green',
    fontSize: 16,
  },
  text3: {
    color: 'white',
    fontSize: 16,
    right: hp('-2.4'),
  },
  image: {
    width: hp('17'),
    height: hp('17'),
    borderRadius: 100,
  },
  image1: {
    width: hp('20'),
    height: hp('20'),
    borderRadius: 20,
  },
  image2: {
    width: hp('15'),
    height: hp('15'),
    borderRadius: 20,
  },
  main: {
    alignItems: 'center',
    marginRight: 10,
  },
});

export default SessionCard2;
