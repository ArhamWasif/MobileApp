import {StyleSheet} from 'react-native';
import { hp, wp } from '../../Utils/dimensions/dimensions';
import { Fonts } from '../../shared/theme';


const createStyles = (COLORS: any, colors: any) =>
  StyleSheet.create({
    container1: {
      height: hp(7),
      width: '92%',
      borderRadius: 10,

      borderWidth: 1,
      borderColor: colors.scheme === 'dark' ? colors.Border1 : colors.DarkGray,
      alignSelf: 'center',
      marginTop: hp(0.5),
      paddingVertical: hp(1.3),
      paddingHorizontal: hp(1),
      backgroundColor: COLORS.scheme === 'dark' ? COLORS.Text800 : COLORS.White,
      justifyContent: 'center',
    },

    label: {
      fontWeight: '600',
      fontSize: wp(3.5),
      fontFamily: Fonts.Medium,
      color: colors.scheme === 'dark' ? colors.White : colors.Black,
    },
    placeholder: {
      fontWeight: '400',
      fontSize: wp(3),

      fontFamily: Fonts.Medium,
      color: COLORS.scheme === 'dark' ? COLORS.White : COLORS.Black,
    },
  });

export default createStyles;
