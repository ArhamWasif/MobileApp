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
   
    container: {flex: 1, paddingTop: hp('-5'),
      
    },
    heading: {
      color: "green",
   
      left: wp('6'),
    },
    logo: {
      height: '244%',
      width: '40%',
      alignSelf: 'center',
    },
    subHeading: {
      color:  "green",
      
      fontWeight: '600',
    },
    subHeading2: {
     
    
      letterSpacing: 0.5,
      marginVertical: hp('1.2'),
      maxWidth: wp('80'),
     
    },

    // centeredContainer: {
    //   flex: 1,
    //   borderTopLeftRadius: 25,
    //   borderTopRightRadius: 25,
    //   ...(COLORS.scheme === 'dark'
    //     ? {
    //         borderTopColor: COLORS.Border,
    //         borderLeftWidth: 0.25,
    //         borderRightWidth: 0.25,
    //       }
    //     : {borderColor: COLORS.Border}),
    //   borderWidth: 1,
    //   marginTop: '4%',
    //   backgroundColor: COLORS.Background,
    // },
    // frgtTxt: {
    //   color: COLORS.Error,
    //   alignSelf: 'flex-end',
      
    // },
    // label: {
    //   color: COLORS.TextColor,
    //   marginLeft: wp('2'),
    //   opacity: COLORS.scheme === 'dark' ? 0.5 : 0.3,
    //   letterSpacing: 0,
    //   fontFamily: Fonts.Medium,
    // },
    row: {
      justifyContent: 'center',
      alignSelf: 'center',
      marginTop: hp('10'),
    },

    icon: {
      width: wp('3.6'),
      height: hp('1.25'),
    },
    socialBtnsRow: {
      alignSelf: 'center',
      gap: 15,
    },
    
    dividerContainer: {
      flexDirection: 'row',
      gap: 15,
      alignSelf: 'center',
      marginVertical: hp('4.5'),
    },
    socialIcon: {
      padding: wp('3.2'),
      paddingVertical: wp('3.6'),
    
      borderWidth: 1,
      borderRadius: 25,
    },
    
    innerContainer: {
      paddingHorizontal: wp('6'),
      flex: 1,
      paddingBottom: hp('5'),
      paddingTop: hp('2'),
    },
    
    checkBoxRow: {flexDirection: 'row', marginTop: hp('1')},
  });
