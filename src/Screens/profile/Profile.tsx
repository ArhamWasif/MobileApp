import {View, Text, Button} from 'react-native';
import React, {useRef} from 'react';
import {useNavigation} from '@react-navigation/native';
import SelectButton from '../../Components/SelectButton/SelectButton';

import createStyles from './styles';
import {useTheme} from '../../shared/theme';

import {SafeAreaView} from 'react-native-safe-area-context';

const Profile = (COLORS: any) => {
  const navigation = useNavigation();

  const colors = useTheme();
  const styles = createStyles(colors);
  return (
    <SafeAreaView style={styles.SafeArea}>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'black',
        }}>
        <Button title="Hi" onPress={() => navigation.navigate('Calendar')} />
      </View>
    </SafeAreaView>
  );
};

export default Profile;
