import {View, Text, StyleSheet} from 'react-native';
import React, {memo} from 'react';
import LinearGradient from 'react-native-linear-gradient';

const DashedLine = memo(() => {
  return (
    <View style={styles.container}>
      {[...Array(16)].map((_, index) => (
        <LinearGradient
          key={index}
          colors={['#BCC8E5', '#BCC8E5', '#ABABAB']}
          start={{x: 0, y: 0}}
          end={{x: 0, y: 0}}
          style={styles.item}
        />
      ))}
    </View>
  );
});
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems:"center",

  },
  item: {
    width: 4,
    height: 0.75,marginHorizontal: 3,
  },
});
export default DashedLine;
