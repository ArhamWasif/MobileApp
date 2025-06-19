import React, {memo} from 'react';
import {
  ActivityIndicator,
  TouchableOpacity,
  View,
  TouchableOpacityProps,
  ViewStyle,
  TextStyle,
  StyleSheet,
  Text,
} from 'react-native';
import { AntDesign } from '../../shared/Icons';

import createStyles from './styles';
// import {useTheme} from '../../../shared/theme';
// import {AntDesign} from '../../../shared/vectorIcons';

interface ButtonCompProps extends TouchableOpacityProps {
  hide?: boolean;
  loading?: boolean;
  disabled?: boolean;
  btnName?: string;
  textColor?: string;
  color?: string;
  styleBtn?: ViewStyle;
  styleTxt?: TextStyle;
  rowStyle?: ViewStyle;
  icon?: React.ReactNode;
  rightIcon?: boolean;
}

const ButtonComp: React.FC<ButtonCompProps> = ({
  hide,
  loading,
  disabled,
  btnName,
  textColor,
  color,
  styleBtn,
  styleTxt,
  rowStyle,
  icon,
  rightIcon,
  onPress,
  ...rest
}) => {
  
  const styles = createStyles()

  if (hide) {
    return null;
  }

  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={StyleSheet.flatten([styles.btn, styleBtn])}
      onPress={onPress}
      disabled={disabled || loading}
      {...rest}>
      {loading ? (
        <ActivityIndicator size="small" color={color || "white"} />
      ) : (
        <View style={[styles.row, rowStyle]}>
          {icon}
          <Text style= {styles.btnTxt}
           >
            {btnName}
          </Text>
           {/* <Text16
            textStyle={[
              styles.btnTxt,
              styleTxt,
              {color: textColor || COLORS.White},
            ]}>
            {btnName}
          </Text16> */}
          {/* {rightIcon && (
            <AntDesign name={'arrowright'} size={24} color={COLORS.White} />
          )} */}
        </View>
      )}
    </TouchableOpacity>
  );
};

export default memo(ButtonComp);
