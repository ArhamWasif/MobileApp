import {View, Text, Image, StyleSheet, TouchableOpacity, ScrollView} from 'react-native';
import React from 'react';
import {SignupFields} from '../../../Constants/data/staticdata';
import TextInputComp from '../../../Components/TextInput/TextInput';

import assets from '../../../assets';
import {hp, wp} from '../../../Utils/dimensions/dimensions';
import Button from '../../../Components/ButtonComponent/Button';
import {useFormik} from 'formik';
import {Alert} from 'react-native';
import {SignUpVSchema} from '../../../validations/ValidatonsSchema';
import {createStyles} from './styles';
import DashedLine from '../../../Components/DashedLine/DashedLine';

const Signup = () => {
  const styles = createStyles();

  const {handleSubmit, handleChange, handleBlur, values, errors, touched} =
    useFormik({
      initialValues: {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
         confirmpassword: '',
        phone: '',
      },
      validationSchema: SignUpVSchema,
      onSubmit: values => {
        Alert.alert('Success', 'Account Created Successfully ✅');
      },
    });
  return (
    <ScrollView>
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
                leftIcon={item.icon}
                maxLength={item.name === 'phone' ? 10 : undefined}
              />
            ))}
            <Button
              btnName="Continue"
              styleBtn={{marginTop: hp('4')}}
              onPress={() => handleSubmit()}
            />
            <View style={styles.dividerContainer}>
              <DashedLine />
              <Text style={styles.dividerText}>Or</Text>
              <DashedLine />
            </View>

            

          
            <View style={styles.container1}>
              {/* Google Button */}
              <TouchableOpacity style={styles.googleBtn}>
                <Image source={assets.google} style={styles.googleIcon} />
                <Text style={styles.googleText}>Continue with Google</Text>
              </TouchableOpacity>

              {/* Apple Button */}
              <TouchableOpacity style={styles.appleBtn}>
                <Image source={assets.google} style={styles.appleIcon} />
              </TouchableOpacity>
            </View>
            <View style={styles.row}>
              <Text style={styles.acntLabel}>Have an account?</Text>
              <Text style={styles.signUpTxt}>Sign In</Text>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};
// const createStyles = () =>
//   StyleSheet.create({
//     container: {padding: 20},
//     heading: {
//       color: 'green',

//       left: wp('6'),
//     },
//     logo: {
//       // height: '60%',
//       // width: '100%',
//       alignSelf: 'center',
//     },

//     subHeading2: {
//       color: 'gray',

//       // lineHeight: 19,
//       letterSpacing: 0.5,
//       marginVertical: hp('1.2'),
//       maxWidth: wp('80'),
//     },
//     innerContainer: {
//       //  paddingHorizontal: wp('6'),

//       //  paddingBottom: hp('5'),
//       paddingTop: hp('2'),
//     },
//     subHeading: {
//       color: 'black',
//       fontSize: 24,
//       fontWeight: '600',
//     },

//     centeredContainer: {
//       flex: 1,
//       borderTopLeftRadius: 25,

//       borderWidth: 1,
//       marginTop: '4%',
//     },
//     frgtTxt: {
//       color: 'green',
//       alignSelf: 'flex-end',
//     },
//     label: {
//       color: 'green',
//       marginLeft: wp('2'),

//       letterSpacing: 0,
//     },
//     row: {
//       justifyContent: 'center',
//       alignSelf: 'center',
//       marginTop: hp('10'),
//     },
//   });
export default Signup;
