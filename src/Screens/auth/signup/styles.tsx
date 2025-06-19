import {StyleSheet} from 'react-native';
import {hp, wp} from '../../../Utils/dimensions/dimensions';

// export const createStyles = () =>
//   StyleSheet.create({
//     wrapper: {
//       backgroundColor: 'red',
//     },
//     container: {flex: 1, paddingTop: hp('5')},
//     heading: {
//       color: 'red',
//       left: wp('6'),
//     },
//     logo: {
//       height: '14%',
//       width: '40%',
//       alignSelf: 'center',
//     },
//     subHeading: {
//       color: 'red',
//       fontWeight: '600',
//     },
//     subHeading2: {
//       color: 'black',

//       lineHeight: 19,
//       letterSpacing: 0.5,
//       marginVertical: hp('1.2'),
//       maxWidth: wp('80'),
//     },
//     centeredContainer: {
//       flex: 1,
//       borderTopLeftRadius: 25,
//       //   borderTopRightRadius: 25,
//       //   ...(COLORS.scheme === 'dark'
//       //     ? {
//       //         borderTopColor: COLORS.Border,
//       //         borderLeftWidth: 0.25,
//       //         borderRightWidth: 0.25,
//       //       }
//       //     : { borderColor: COLORS.Border }),
//       borderWidth: 1,
//       marginTop: '4%',
//       backgroundColor: 'red',
//     },
//     label: {
//       color: 'red',
//       marginLeft: wp('2'),

//       letterSpacing: 0,
//     },
//     row: {
//       justifyContent: 'center',
//       alignSelf: 'center',
//       marginTop: hp('10'),
//     },
//     icon: {
//       width: wp('3.6'),
//       height: hp('1.25'),
//     },
//     socialBtnsRow: {
//       alignSelf: 'center',
//       gap: 15,
//     },
//     dividerText: {
//       color: 'red',
//     },
//     dividerContainer: {
//       flexDirection: 'row',
//       gap: 15,
//       alignSelf: 'center',
//       marginVertical: hp('4.5'),
//     },
//     socialIcon: {
//       padding: wp('3.2'),
//       paddingVertical: wp('3.6'),

//       borderWidth: 1,
//       borderRadius: 25,
//     },
//     signUpTxt: {
//       color: 'red',
//       marginLeft: wp('1'),
//       fontWeight: '500',
//     },
//     googleTxt: {
//       color: 'red',
//       marginHorizontal: wp('4'),
//       opacity: 0.8,
//     },
//     innerContainer: {
//       paddingHorizontal: wp('6'),
//       flex: 1,
//       paddingBottom: hp('5'),
//       paddingTop: hp('2'),
//     },
//     acntLabel: {
//       color: 'red',
//     },
//     checkBoxRow: {
//       flexDirection: 'row',
//       marginTop: hp('1'),
//     },
//   });

export const createStyles = () =>
  StyleSheet.create({
    container: {padding: 20},
    heading: {
      color: 'green',

      left: wp('6'),
    },
    logo: {
      // height: '60%',
      // width: '100%',
      alignSelf: 'center',
    },

    subHeading2: {
      color: 'gray',

      // lineHeight: 19,
      letterSpacing: 0.5,
      marginVertical: hp('1.2'),
      maxWidth: wp('80'),
    },
    innerContainer: {
      //  paddingHorizontal: wp('6'),

      //  paddingBottom: hp('5'),
      paddingTop: hp('2'),
    },
    subHeading: {
      color: 'black',
      fontSize: 24,
      fontWeight: '600',
    },
    dividerContainer: {
      flexDirection: 'row',
      gap: 10,
    },
    dividerText: {},
    centeredContainer: {
      flex: 1,
      borderTopLeftRadius: 25,

    
      marginTop: '4%',
    },
    frgtTxt: {
      color: 'green',
      alignSelf: 'flex-end',
    },
    label: {
      color: 'green',
      marginLeft: wp('2'),

      letterSpacing: 0,
    },
    row: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignSelf: 'center',
      marginTop: hp('10'),
    },
    acntLabel: {},
    signUpTxt: {color: 'green', marginLeft: wp('1'), fontWeight: '500'},

    container1: {
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 20,
  },
  googleBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#E0E0E0',
    borderWidth: 1,
    borderRadius: 30,
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: '#fff',
  },
  googleIcon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  googleText: {
    color: '#000',
    fontSize: 14,
    fontWeight: '500',
  },
  appleBtn: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderColor: '#E0E0E0',
    borderWidth: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  appleIcon: {
    width: 20,
    height: 20,
  },
  });
