// import { View, Text, Pressable, StyleSheet, } from 'react-native'
// import React, { useState } from 'react'
// import { Feather } from '../shared/Icons'
// import { useTheme } from '../shared/theme'



// interface SessionBottomSheetProps {
//   isVisible: boolean
//   onClose: () => void
//   style?: ViewStyle
// }

// const WorkoutSheet: React.FC<SessionBottomSheetProps> = ({ isVisible, onClose, style }) => {
//   const [selectedStatus, setSelectedStatus] = useState<string | null>(null)
//   const COLORS = useTheme();
//   const styles = createStyles(COLORS);
//   if (!isVisible) return null
//   const statusOptions = [
//     'None',
//     'Regular',
//     'Interval',
//     'Mixed',
//     'Dec of Cards',
//     'Reset',
//   ]
//   return (
//     <View style={[styles.overlay, style]}>
//       <View style={styles.container}>
//         <View style={styles.header}>
//           <Text style={styles.title}>Workout Types</Text>
//           <Pressable onPress={onClose}>
//           <Feather name="x" color={COLORS.DarkGray} size={24} />
//           </Pressable>
//         </View>
//         <View style={styles.statusOptionsContainer}>
//           {statusOptions.map((status) => (
//             <Pressable
//               key={status}
//               style={[
//                 styles.statusButton,
//                 selectedStatus === status && styles.selectedStatusButton,
//               ]}
//               onPress={() => setSelectedStatus(status)}
//             >
//               <View style={styles.radioButton}>
//                 {selectedStatus === status && <View style={styles.radioButtonInner} />}
//               </View>
//               <Text
//                 style={[
//                   styles.statusButtonText,
//                   selectedStatus === status && styles.selectedStatusButtonText,
//                 ]}
//               >
//                 {status}
//               </Text>
//             </Pressable>
//           ))}
//         </View>
//       </View>
//     </View>
//   )
// }
// const createStyles = (COLORS: any) =>
//     StyleSheet.create({
//         overlay: {
//             position: 'absolute',
//             bottom: 0,
//             left: 0,
//             right: 0,
//             top: 0,
//             backgroundColor: 'rgba(0, 0, 0, 0.7)',
//             justifyContent: 'flex-end',
//           },
//           container: {
//             backgroundColor: COLORS.scheme === 'dark' ? COLORS.Black : COLORS.White,
//             padding: 20,
//             borderTopLeftRadius: 20,
//             borderTopRightRadius: 20,
//             width: '100%',
//           },
//           header: {
//             flexDirection: 'row',
//             justifyContent: 'space-between',
//             alignItems: 'center',
//             marginBottom: 20,
//           },
//           bottomCancelIcon:{
//             width: 40,
//             height: 40
//           },
//           title: {
//             fontSize: 18,
//             fontWeight: 600,
//             fontFamily: Fonts.SemiBold,
//             color: COLORS.scheme === 'dark' ? COLORS.White : COLORS.Black,
//           },
//           statusOptionsContainer: {
//             flexDirection: 'row',
//             flexWrap: 'wrap',
//             marginBottom: 30,
//           },
//           statusButton: {
//             flexDirection: 'row',
//             alignItems: 'center',
//             paddingVertical: 10,
//             paddingHorizontal: 12,
//             marginRight: 10,
//             marginBottom: 10,
//             borderRadius: 20,
//             borderWidth: 1,
//             borderColor: COLORS.DarkGray1,
//           },
//           selectedStatusButton: {
//             borderColor: COLORS.scheme === 'dark' ? COLORS.Primary : COLORS.White,
//             backgroundColor: COLORS.scheme === 'dark' 
//               ? `${COLORS.LightPrimary}60` 
//               : `${COLORS.Primary}30`,
//           },
//           radioButton: {
//             width: 18,
//             height: 18,
//             borderRadius: 9,
//             borderWidth: 1,
//             borderColor: COLORS.scheme === 'dark' ? COLORS.White : COLORS.Black,
//             alignItems: 'center',
//             justifyContent: 'center',
//             marginRight: 8,
//           },
//           radioButtonInner: {
//             width: 8,
//             height: 8,
//             borderRadius: 5,
//             backgroundColor: COLORS.Primary,
//           },
//           statusButtonText: {
//             color: COLORS.scheme === 'dark' ? COLORS.White : COLORS.Black,
//             fontFamily: Fonts.Regular,
//             fontWeight: 500,
//             fontSize: 12,
//             marginLeft: 2,
//           },
//           selectedStatusButtonText: {
//             color: COLORS.scheme === 'dark' ? COLORS.White : COLORS.Black,
//             fontFamily: Fonts.Regular,
//             fontWeight: 500,
//           },
//           actionButtonsContainer: {
//             flexDirection: 'row',
//             justifyContent: 'flex-end',
//           },
//           cancelButton: {
//             flex: 1,
//             paddingVertical: 12,
//             paddingHorizontal: 20,
//             borderRadius: 8,
//             marginRight: 10,
//             backgroundColor: COLORS.DarkGray1,
//             alignItems: 'center',
//           },
//           saveButton: {
//             flex: 1,
//             paddingVertical: 12,
//             paddingHorizontal: 20,
//             borderRadius: 8,
//             backgroundColor: COLORS.Primary,
//             alignItems: 'center',
//           },
//           saveText:{
//             color: COLORS.scheme === 'dark' ? COLORS.Black : COLORS.White,
//             fontWeight: 600,
//             fontFamily: Fonts.SemiBold,
//             fontSize: 16,
//           },
//           buttonText: {
//             color: COLORS.White,
//             fontWeight: 600,
//             fontFamily: Fonts.SemiBold,
//             fontSize: 16,
//           },
// })
// export default WorkoutSheet








import React, {useState} from 'react';
import {useFormik} from 'formik';
import FastImage from 'react-native-fast-image';
import { View} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import CountryPicker, {
  CountryCode,
  DARK_THEME,
} from 'react-native-country-picker-modal';

import createStyles from './styles';
import {Feather} from '../../../shared/vectorIcons';
import {useTheme} from '../../../shared/theme';
import {getImage} from '../../../assets/images/images';
import {hp} from '../../../utils/dimensions/dimensions';
import {
  signUpInitialValues,
  SignUpVSchema,
} from '../../../utils/validations/validationsSchemas';
import {
  Text12,
  Text14,
 
  Text20,
 
} from '../../../components/Common/Text/Text';
import {
  HorizontalView,
  TextInputComp,
  ButtonComp,

  ThemeWrapper,
} from '../../../components/Common';
import {
  SignUpInputFields,

} from '../../../utils/constants/data/staticData';
import {navigate} from '../../../navigation/rootNavigation';

export default function SignUp() {
  const COLORS = useTheme();
  const styles = createStyles(COLORS);
  const [secureTxtEntry, setSecureTxtEntry] = useState(true);
  const [openCountryPicker, setOpenCountryPicker] = useState(false);
  const [countryCode, setCountryCode] = useState<CountryCode>('US');
  const [callingCode, setCallingCode] = useState('1');

  const onSelectCountry = (country: any) => {
    setCountryCode(country.cca2);
    setCallingCode(country.callingCode[0]);
    setOpenCountryPicker(false);
  };

  const {handleSubmit, handleChange, values, errors, touched} = useFormik({
    initialValues: signUpInitialValues,
    validationSchema: SignUpVSchema,
    onSubmit: () => {
      navigate('personalDetail', {
        signUpValues: {...values, phone: `+${callingCode}` + values.phone},
      });
    },
  });
  return (
    <ThemeWrapper style={styles.wrapper}>
      <View style={styles.container}>
        <FastImage
          source={getImage('fullLogo', COLORS.scheme)}
          style={styles.logo}
          resizeMode={FastImage.resizeMode.contain}
        />

        <View style={styles.centeredContainer}>
          <KeyboardAwareScrollView
            contentContainerStyle={{flexGrow: 1}}
            showsVerticalScrollIndicator={false}
            keyboardShouldPersistTaps="handled"
            enableOnAndroid={true}>
            <View style={styles.innerContainer}>
              <Text20 textStyle={styles.subHeading}>Create an account</Text20>
              <Text12 textStyle={styles.subHeading2}>
                You are welcome to create new account. Make sure first put the
                information
              </Text12>

              {SignUpInputFields({
                COLORS,
                setOpenCountryPicker,
                callingCode,
              }).map(item => (
                <TextInputComp
                  key={item.name}
                  value={values[item.name]}
                  onChangeText={text => {
                    if (item.name === 'phone' && text.length > 10) {
                      return;
                    }
                    handleChange(item.name)(text);
                  }}
                  placeholder={item.placeholder}
                  error={errors[item.name]}
                  isError={errors[item.name] && touched[item.name]}
                  secureTextEntry={item.isPassword ? secureTxtEntry : false}
                  leftIcon={item.icon}
                  keyboardType={item?.keyboardType}
                  maxLength={item.name === 'phone' ? 10 : undefined}
                  rightIcon={
                    item.isPassword && (
                      <Feather
                        name={secureTxtEntry ? 'eye-off' : 'eye'}
                        color={COLORS.DarkGray}
                        size={16}
                        onPress={() => setSecureTxtEntry(!secureTxtEntry)}
                      />
                    )
                  }
                />
              ))}

              <ButtonComp
                btnName="Continue"
                styleBtn={{marginTop: hp('4')}}
                onPress={() => handleSubmit()}
              />

              {/* <View style={styles.dividerContainer}>
                <DashedLine />
                <Text16 textStyle={styles.dividerText}>Or</Text16>
                <DashedLine />
              </View> */}

              {/* <HorizontalView style={styles.socialBtnsRow}>
                {SocialButtons(COLORS).map(item => (
                  <TouchableOpacity
                    key={item.id}
                    style={[
                      item.id == 'google' && styles.socialIcon,
                      {flexDirection: item?.title ? 'row' : 'column'},
                    ]}>
                    {item.icon}
                    {item?.title && (
                      <Text14 textStyle={styles.googleTxt}>
                        {item?.title}
                      </Text14>
                    )}
                  </TouchableOpacity>
                ))}
              </HorizontalView> */}

              <HorizontalView style={styles.row}>
                <Text14 textStyle={styles.acntLabel}>Have an account?</Text14>
                <Text14
                  textStyle={styles.signUpTxt}
                  onPress={() => navigate('logIn')}>
                  Sign In
                </Text14>
              </HorizontalView>
            </View>
          </KeyboardAwareScrollView>
          <CountryPicker
            countryCode={countryCode}
            withFilter
            withFlag={false}
            withCallingCode
            withCallingCodeButton
            withCountryNameButton={false}
            withAlphaFilter={false}
            withCloseButton
            renderFlagButton={() => null}
            onSelect={onSelectCountry}
            visible={openCountryPicker}
            onClose={() => setOpenCountryPicker(false)}
            theme={COLORS.scheme === 'dark' ? DARK_THEME : undefined}
          />
        </View>
      </View>
    </ThemeWrapper>
  );
}

import {StyleSheet} from 'react-native';
import {hp, wp} from '../../../utils/dimensions/dimensions';
import {Fonts} from '../../../shared/theme';

const createStyles = (COLORS: any) =>
  StyleSheet.create({
    wrapper: {
      backgroundColor:
        COLORS.scheme === 'dark' ? COLORS.Black : COLORS.GrayishWhite,
    },
    container: {flex: 1, paddingTop: hp('5')},
    heading: {
      color: COLORS.Primary,
      fontFamily: Fonts.SemiBold,
      left: wp('6'),
    },
    logo: {
      height: '14%',
      width: '40%',
      alignSelf: 'center',
    },
    subHeading: {
      color: COLORS.TextColor,
      fontFamily: Fonts.SemiBold,
      fontWeight: '600',
    },
    subHeading2: {
      color: COLORS.TextColor,
      opacity: COLORS.scheme === 'dark' ? 0.8 : 0.4,
      lineHeight: 19,
      letterSpacing: 0.5,
      marginVertical: hp('1.2'),
      maxWidth: wp('80'),
      fontFamily: Fonts.Regular,
    },

    centeredContainer: {
      flex: 1,
      borderTopLeftRadius: 25,
      borderTopRightRadius: 25,
      ...(COLORS.scheme === 'dark'
        ? {
            borderTopColor: COLORS.Border,
            borderLeftWidth: 0.25,
            borderRightWidth: 0.25,
          }
        : {borderColor: COLORS.Border}),
      borderWidth: 1,
      marginTop: '4%',
      backgroundColor: COLORS.Background,
    },
    frgtTxt: {
      color: COLORS.Error,
      alignSelf: 'flex-end',
      fontFamily: Fonts.SemiBold,
    },
    label: {
      color: COLORS.TextColor,
      marginLeft: wp('2'),
      opacity: COLORS.scheme === 'dark' ? 0.5 : 0.3,
      letterSpacing: 0,
      fontFamily: Fonts.Medium,
    },
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
    dividerText: {
      fontFamily: Fonts.Medium,
      color: COLORS.TextColor,
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
      borderColor: COLORS.Border,
      borderWidth: 1,
      borderRadius: 25,
    },
    signUpTxt: {color: COLORS.Primary, marginLeft: wp('1'), fontWeight: '500'},
    googleTxt: {
      color: COLORS.TextColor,
      marginHorizontal: wp('4'),
      opacity: 0.8,
      fontFamily: Fonts.SemiBold,
    },
    innerContainer: {
      paddingHorizontal: wp('6'),
      flex: 1,
      paddingBottom: hp('5'), 
      paddingTop: hp('2'),
    },
    acntLabel: {
      color: COLORS.TextColor,
      fontFamily: Fonts.Light,
    },
    checkBoxRow: {flexDirection: 'row', marginTop: hp('1')},
  });

export default createStyles;

export const SignUpInputFields = ({
  COLORS,
  setOpenCountryPicker,
  callingCode,
}: SignUpInputFieldsProps): SignUpInputField[] => [
  {
    name: 'firstName',
    placeholder: 'First Name',
    icon: (
      <MaterialIcons name="person-outline" color={COLORS.DarkGray} size={18} />
    ),
  },
  {
    name: 'lastName',
    placeholder: 'Last Name',
    icon: (
      <MaterialIcons name="person-outline" color={COLORS.DarkGray} size={18} />
    ),
  },
  {
    name: 'email',
    placeholder: 'Email',
    icon: (
      <Image
        source={getImage('email')}
        style={{width: wp('3.6'), height: hp('1.25')}}
        resizeMode="stretch"
      />
    ),
  },
  {
    name: 'phone',
    placeholder: '000 000 0000',
    icon: (
      <View style={{flexDirection: 'row'}}>
        <Feather name="phone" color={COLORS.DarkGray} size={18} />
        <Text14
          textStyle={{color: COLORS.TextColor}}
          onPress={() => setOpenCountryPicker(true)}>
          {`  (+${callingCode})  `}
          <Text14 textStyle={{color: COLORS.DarkGray}}>|</Text14>
        </Text14>
      </View>
    ),
    keyboardType: 'numeric',
  },
  {
    name: 'password',
    placeholder: 'Password',
    icon: <SimpleLineIcons name="lock" color={COLORS.DarkGray} size={14} />,
    isPassword: true,
  },
];


















import {memo} from 'react';
import {StyleSheet, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const DashedLine = memo(() => {
  return (
    <View style={styles.dashedLineContainer}>
      {[...Array(16)].map((_, index) => (
        <LinearGradient
          key={index}
          colors={['#BCC8E5', '#BCC8E5', '#ABABAB']}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          style={styles.dashItem}
        />
      ))}
    </View>
  );
});

const styles = StyleSheet.create({
  dashedLineContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    zIndex: 1,
  },
  dashItem: {
    width: 4,
    height: 0.75,
    marginHorizontal: 3,
  },
});

export default DashedLine;
