import {View, Text, Image, StyleSheet} from 'react-native';
import React from 'react';
import {SignupFields} from '../../../Constants/data/staticdata';
import TextInputComp from '../../../Components/TextInput/TextInput';

// import { createStyles } from './styles';
import assets from '../../../assets';
import {hp, wp} from '../../../Utils/dimensions/dimensions';
const Signup = () => {
  const styles = createStyles();
  return (
    <View>
      <View style={styles.container}>
        <Image source={assets.logo} style={styles.logo} />

        <View style={styles.centeredContainer}>
          <View style={styles.innerContainer}>
            <Text style={styles.subHeading}>Create an account</Text>
            <Text style={styles.subHeading2}>
              You are welcome to create new account. Make sure first put the
              information
            </Text>

            {SignupFields.map(item => (
              <TextInputComp
                key={item.name}
                placeholder={item.placeholder}
                leftIcon={item.icon}
                maxLength={item.name === 'phone' ? 10 : undefined}
              />
            ))}

            {/* <ButtonComp
                      btnName="Continue"
                      styleBtn={{marginTop: hp('4')}}
                      // onPress={() => handleSubmit()}
                    /> */}

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
          </View>
        </View>
      </View>
    </View>
  );
};
const createStyles = () =>
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

    centeredContainer: {
      flex: 1,
      borderTopLeftRadius: 25,

      borderWidth: 1,
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
      justifyContent: 'center',
      alignSelf: 'center',
      marginTop: hp('10'),
    },
  });
export default Signup;
