import {StyleSheet} from 'react-native';
import {hp, wp} from '../../Utils/dimensions/dimensions';
import {Fonts} from '../../shared/theme';

const createStyles = (COLORS: any) =>
  StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: hp('1'),
    },

    SafeArea: {flex: 1},
    ViewContainer: {
      paddingTop: hp('3'),
    },
    headingCont: {
      justifyContent: 'center',
      alignItems: 'center',
    },

    container3: {
      marginHorizontal: wp(1),

      left: wp('2.9'),
      width: hp('44'),
      paddingHorizontal: 5,
      paddingVertical: 2,
      backgroundColor:
        COLORS.scheme === 'light' ? COLORS.White : COLORS.Text800,
      borderWidth: 1,
      borderColor: COLORS.scheme === 'light' ? COLORS.DarkGray : COLORS.Border1,
      borderRadius: 12,
    },

    dateTxt: {
      fontWeight: '500',
      color: COLORS.Primary,
      marginLeft: wp(1),
    },

    soloTxt: {
      fontWeight: '600',
      fontSize: 12,
      left: wp('.5'),
      color: COLORS.scheme === 'light' ? COLORS.Black : COLORS.White,
    },
    lvlTxt: {
      fontWeight: '600',
      fontSize: 18,
      fontFamily: Fonts.Medium,
      marginTop: hp(0.4),
      color: COLORS.scheme === 'dark' ? COLORS.White : COLORS.Black,
    },

    rxBtn: {
      width: wp(25),
      height: hp(5),
      borderRadius: 8,
      alignSelf: 'flex-end',
    },
    lockStageIcon: {
      height: 45,
      width: 45,
    },
    btnContainer: {
      flexDirection: 'row',
      paddingHorizontal: 10,
      paddingVertical: 4,
      right: hp('.5'),
      gap: 8,
    },
    Txt: {
      color: COLORS.TextColor,
      fontWeight: '600',

      fontFamily: Fonts.Medium,
      fontSize: 14,
    },
    centerRow: {flexDirection: 'row', alignItems: 'center', flex: 1},
    Row: {
      margin: 5,
      width: '92%',
      paddingTop: hp('1.5'),
      paddingVertical: hp('1.5'),
      paddingHorizontal: hp('1'),
      left: wp('2.9'),
      borderWidth: 1,
      backgroundColor:
        COLORS.scheme === 'light' ? COLORS.White : COLORS.Text800,
      borderColor: COLORS.scheme === 'light' ? COLORS.DarkGray : COLORS.Border1,
      borderRadius: 10,
    },
    BtnTraining: {
      fontWeight: '800',
      fontSize: 14,
      right: 8,
      fontFamily: Fonts.Medium,
      color: COLORS.scheme === 'dark' ? COLORS.White : COLORS.Black,
    },
    BtnTraining1: {
      fontWeight: '800',
      fontSize: 14,
      right: 8,
      fontFamily: Fonts.Medium,
      color: COLORS.scheme === 'dark' ? COLORS.White : COLORS.Black,
    },

    BtnTraining2: {
      fontWeight: '800',
      fontSize: 14,
      right: 8,
      fontFamily: Fonts.Medium,
      color: COLORS.scheme === 'dark' ? COLORS.White : COLORS.Black,
    },

    mainContainer: {flex: 1},
    text18: {marginTop: hp(1)},
    HorizontalView: {
      marginTop: 2,
    },
    stopWatchView: {marginTop: hp(1)},
    HorizontalContainer: {
      borderRadius: 12,

      paddingHorizontal: 2,
      paddingVertical: 3,
    },
    divider: {
      height: 2,
      backgroundColor: COLORS.TextColor,
      opacity: 0.15,
      marginTop: 2,
    },
    button: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: '#007AFF',
      padding: 10,
      borderRadius: 8,
    },
    image: {
      width: 24,
      height: 24,
      marginRight: 8,
    },
    stopWatchIcon: {height: 24, width: 24},
    plusIcon: {height: 16, width: 16, right: -6},
    view: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },

    BottomSheet: {
      backgroundColor: COLORS.Black,
      paddingVertical: 20,
    },
    SheetContainer: {
      padding: 0,

      margin: 0,
    },

    container2: {
      margin: 16,
      position: 'relative',
    },
    label1: {
      position: 'absolute',
      top: -10,
      left: 12,
      fontFamily: Fonts.Medium,
      fontWeight: '400',
      backgroundColor: COLORS.scheme === 'light' ? COLORS.White : COLORS.Black,
      paddingHorizontal: 4,
      fontSize: 16,
      color: COLORS.scheme === 'light' ? COLORS.Black : COLORS.Text975,
      zIndex: 1,
    },
    input1: {
      borderWidth: 1,
      borderColor: COLORS.scheme === 'light' ? COLORS.DarkGray : COLORS.Text975,
      borderRadius: 8,
      padding: 12,
      backgroundColor: COLORS.scheme === 'light' ? COLORS.White : COLORS.Black,
      width: hp('43.5'),
      fontSize: 16,

      textAlignVertical: 'top',
      fontWeight: 400,
      fontFamily: Fonts.Medium,
      minHeight: hp('20'),
    },

    btnCont: {
      flexDirection: 'row',
      gap: 12,
      justifyContent: 'center',
    },
    btn1: {
      fontWeight: '600',
      fontSize: 14,

      fontFamily: Fonts.Medium,
      color: COLORS.scheme === 'dark' ? COLORS.White : COLORS.Black,
    },
    btn: {
      fontWeight: '600',
      fontSize: 14,

      fontFamily: Fonts.Medium,
      color: COLORS.scheme === 'dark' ? COLORS.Black : COLORS.White,
    },

    selectedRadio: {
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: 10,
      paddingHorizontal: 12,
      paddingVertical: 10,
      borderRadius: 8,
      borderWidth: 1,
      borderColor: COLORS.Primary,
      backgroundColor: COLORS.LightPrimary,
    },

    radioButton: {
      width: 16,
      height: 16,
      borderRadius: 2,
      borderWidth: 2,
      borderColor: COLORS.Primary,
      alignItems: 'center',
      justifyContent: 'center',
      marginRight: 8,
    },

    radioButtonInner: {
      width: 10,
      height: 10,
      borderRadius: 5,
      backgroundColor: COLORS.Primary,
    },

    selectedLabel: {
      fontSize: 16,
      color: COLORS.Primary,
    },
    selectButton: {
      padding: 10,
      borderWidth: 1,
      borderRadius: 8,
      borderColor: '#999',
      marginBottom: 10,
    },
    label: {
      fontWeight: '600',

      fontSize: wp(3.5),
      fontFamily: Fonts.Medium,
      color: COLORS.scheme === 'dark' ? COLORS.White : COLORS.Black,
    },
    radioOption: {
      flexDirection: 'row',
      alignItems: 'center',
      padding: 12,
      borderWidth: 1,
      borderRadius: 8,
    },
    radioCircle: {
      width: 16,
      height: 16,
      borderRadius: 8,
      borderWidth: 2,
      marginRight: 8,
      alignItems: 'center',
      justifyContent: 'center',
    },
    radioDot: {
      width: 8,
      height: 8,
      borderRadius: 4,
    },
    radioLabel: {
      fontSize: 16,
    },
  });

export default createStyles;
