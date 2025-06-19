import {Image, View} from 'react-native';
import {Feather, MaterialIcons, SimpleLineIcons} from '../../shared/Icons';
import {hp, wp} from '../../Utils/dimensions/dimensions';
import assets from '../../assets';

export const SignupFields = [
  {
    name: 'firstName',
    placeholder: 'First Name',
    icon: <MaterialIcons name="person-outline" color="black" size={18} />,
  },

  {
    name: 'lastName',
    placeholder: 'Last Name',
    icon: <MaterialIcons name="person-outline" color="grey" size={18} />,
  },
  {
    name: 'email',
    placeholder: 'Email',
    icon: (
      <Image
        source={assets.email}
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
        <Feather name="phone" color="grey" size={18} />
      </View>
    ),
    keyboardType: 'numeric',
  },
  {
    name: 'password',
    placeholder: 'Password',
    icon: <SimpleLineIcons name="lock" color="grey" size={14} />,
    isPassword: true,
  },
  {
    name: 'confirmpassword',
    placeholder: 'Confirm Password',
    icon: <SimpleLineIcons name="lock" color="grey" size={14} />,
    isPassword: true,
  },
  // Aap aur bhi fields add kar sakte hain yahan
];
