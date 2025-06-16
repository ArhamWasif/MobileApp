import {StyleSheet} from 'react-native';
import {hp, wp} from '../../Utils/dimensions/dimensions';

const createStyles = () =>
  StyleSheet.create({
    container: {
      flex: 1,

      paddingTop: hp('3'),

      backgroundColor: 'black',
      padding: hp('1'),

      borderRadius: 5,
    },
    SafeArea: {flex: 1},

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

export default createStyles;
