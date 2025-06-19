import {StyleSheet} from 'react-native';
import {hp, wp} from '../../Utils/dimensions/dimensions';

const createStyles = () =>
  StyleSheet.create({
    btn: {
      width: wp('90'),
      height: hp('6%'),
      backgroundColor: 'lightgreen',
      borderRadius: 12,
      alignSelf: 'center',
      alignItems: 'center',
      justifyContent: 'center',
    },
    row: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 12,
    },
    btnTxt: {
      color: "white",
    },
  });

export default createStyles;
