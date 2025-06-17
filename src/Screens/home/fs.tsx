import {View, Text, TouchableOpacity, FlatList, Image} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import {styles} from './styles';
import {Notification} from '../../config/data';
import assets from '../../assets';

const Notifications = () => {
  const navigation = useNavigation();

  const renderNotifications = ({item}) => (
    <View style={{paddingHorizontal: 5}}>
      <Text style={styles.time}>
        {item.startTime} - {item.endTime}
      </Text>
      <View style={styles.main}>
        <Text style={styles.name}>{item.taskName}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.mainContainer}>
      <View style={styles.container}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          {/* <Ionicons name="arrow-back" size={30} /> */}
          <Image style={styles.leftarrow} source={assets.leftarrow} />
        </TouchableOpacity>
        <Text style={styles.notificationText}>Notifications</Text>
      </View>

      <FlatList
        data={Notification}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderNotifications}
      />
    </View>
  );
};

export default Notifications;
