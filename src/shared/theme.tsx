import {Appearance} from 'react-native';
import {useEffect, useState} from 'react';
import { isIOS } from '../Utils/platformUtils/platformCheck';

const colors = {
  Primary: '#18BCB4',
  Primary10: '#18bcb41a',
  Black: '#1F1D1D',
  Grey:"#7D8A92",
  LightBlack: '#1f1d1d99',
  White: '#FFFFFF',
  Gray: '#ffffffcc',
  GrayishWhite: '#FAFBFC',
  Alert: '#F8B800',
  Text975:"#DFE5E8",
  DarkGray: '#ABABAB',
  Error: '#ED0143',
  BluishGray: '#607698',
  LightWhite: '#F9FAFBB2',
  Border: '#DADADA',
  LightGray: '#E1E1E1',
  RoyalBlue: '#1977F3',
  PrimaryLight: '#E1FDFC',
  AshGray: '#F8F8F8',
  PlaceHolder: '#939090',
  SemiWhite: '#ffffff1a',
  GrayWhite: '#F3F3F3',
  Grayish: '#F3F5F8',
  Smoke: '#0000004d',
  lightSmoke: '#ababab26',
  SemiTransparent: '#f3f5f80d',
  BlackGray: '#080613b3',
  Text700:"#2E3336",
  PrimaryLightest: '#effafa',
  LightPurple: '#494054',
  DarkBlue: '#263257',
  shadowGray: '#F7F8F8',
  DarkGray1: '#404040',
  Text800:"#222729",
  ErrorSub: '#DC2597',
  Border1:"#444C51",
  Black1:"#181818",
  DelColor:"#FF0000",
  DarkGray2:"#1E1E1E",
  shadow: {
    shadowColor: isIOS ? '#000000' : '#939090',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.15,
    shadowRadius: 3.5,
    elevation: 6,
  },
};

export const LIGHT_COLORS = {
  ...colors,
  Background: '#FFFFFF',
  TextColor: '#1F1D1D',
  BlurBackground: '#00000040',
  TabBackground: '#FFFFFF',
  ModalBackground: '#00000073',
};

export const DARK_COLORS = {
  ...colors,
  Background: '#1F1D1D',
  TextColor: '#FFFFFF',
  BlurBackground: '#a9a5a599',
  TabBackground: '#1F1D1D',
  ModalBackground: '#ffffff73',
};

export const useTheme = () => {
  const [theme, setTheme] = useState(Appearance.getColorScheme());

  useEffect(() => {
    const subscription = Appearance.addChangeListener(({colorScheme}) => {
      setTheme(colorScheme);
    });

    return () => subscription.remove();
  }, []);

  const selectedColors = theme === 'dark' ? DARK_COLORS : LIGHT_COLORS;

  // Attach the theme scheme to the colors object
  return Object.assign(selectedColors, {scheme: theme});
};

export const Fonts = {
  GothamMedium: isIOS ? 'Gotham-NarrowMedium' : 'GothamNarrowMedium',
  Bold: isIOS ? 'Montserrat-Bold' : 'MontserratBold',
  Light: isIOS ? 'Montserrat-Light' : 'MontserratLight',
  Medium: isIOS ? 'Montserrat-Medium' : 'MontserratMedium',
  Regular: isIOS ? 'Montserrat-Regular' : 'MontserratRegular',
  SemiBold: isIOS ? 'Montserrat-SemiBold' : 'MontserratSemiBold',
  Thin: isIOS ? 'Montserrat-Thin' : 'MontserratThin',
};
