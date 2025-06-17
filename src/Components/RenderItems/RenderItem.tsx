// components/SessionCard.js
import React from 'react';
import {View, Text, Pressable, Image, StyleSheet} from 'react-native';

import {useNavigation} from '@react-navigation/native';
import {hp} from '../../Utils/dimensions/dimensions';

const SessionCard = ({item}) => {
  const navigation = useNavigation();

  return (
    <View style={styles.main2}>
      <Pressable onPress={() => navigation.navigate('SubScreen', {item})}>
        <Image source={item.image} style={styles.image} />
        <Text style={styles.text1}>{item.title}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  main2: {
    alignItems: 'center',
    marginRight: 20,
  },
  text1: {
    color: 'white',
    fontSize: 16,
    marginTop: 9,
    textAlign: 'center',
  },
  image: {
    width: hp('17'),
    height: hp('17'),
    borderRadius: 100,
  },
});

export default SessionCard;
