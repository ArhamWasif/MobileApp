import React, {forwardRef, useState} from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  TextInputProps,
  ViewStyle,
  TouchableOpacity,
  Text,
} from 'react-native';
import {hp, wp} from '../../Utils/dimensions/dimensions';

interface TextInputCompProps extends TextInputProps {
  ref1?: React.RefObject<TextInput>;
  label?: string;
  cursorColor?: string;
  phColor?: string;
  inputStyle?: object;
  backgroundColor?: string;
  lines?: number;
  isError?: boolean | string;
  error?: string;
  errStyle?: object;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  disabled?: boolean;
  containerStyle?: ViewStyle;
  inputContainer?: ViewStyle;
}

const TextInputComp = forwardRef<TextInput, TextInputCompProps>(
  (props, ref) => {
    const {
      maxLength,
      keyboardType,
      disabled = false,
      readOnly = false,
      label,
      multiline = false,
      lines,
      placeholder = 'Enter text',
      phColor,
      onSubmitEditing,
      secureTextEntry = false,
      value,
      onChangeText,
      isError = false,
      error = '',
      errStyle,
      leftIcon,
      rightIcon,
      containerStyle,
      inputContainer,
      cursorColor,
      editable = true,
      onPressIn,
      inputStyle,
      ...restProps
    } = props;

    const styles = createStyles();
    const [isFocused, setIsFocused] = useState(false);

    const textInputProps = {
      ref,
      maxLength,
      keyboardType,
      editable: !disabled && !readOnly && editable,
      //   selectionColor:
      //     cursorColor || (COLORS.scheme === 'dark' ? COLORS.White : COLORS.Black),
      multiline,
      numberOfLines: lines,
      placeholder,
      //   placeholderTextColor: phColor || COLORS.DarkGray,
      style: StyleSheet.flatten([styles.inputStyle, inputStyle]),
      onSubmitEditing,
      secureTextEntry,
      value,
      onChangeText,
      onFocus: () => setIsFocused(true),
      onBlur: () => setIsFocused(false),
      ...restProps,
    };

    return (
      <View style={StyleSheet.flatten([styles.container, containerStyle])}>
        {label && <Text textStyle={styles.labelStyle}>{label}</Text>}

        <View
          style={StyleSheet.flatten([
            styles.inputContainer,
            inputContainer,
            isFocused && styles.focusedInputContainer,
          ])}>
          {leftIcon && <View style={styles.iconContainer}>{leftIcon}</View>}

          {editable === false && onPressIn ? (
            <TouchableOpacity
              activeOpacity={0.9}
              onPress={onPressIn}
              style={styles.inputWrapper}>
              <TextInput {...textInputProps} pointerEvents="none" />
            </TouchableOpacity>
          ) : (
            <TextInput {...textInputProps} />
          )}

          {rightIcon && (
            <View style={styles.rightIconContainer}>{rightIcon}</View>
          )}
        </View>

        {isError && (
          <Text textStyle={errStyle || styles.errStyle}>{error}</Text>
        )}
      </View>
    );
  },
);

export default TextInputComp;

const createStyles = () =>
  StyleSheet.create({
    container: {
      width: wp('90%'),
      alignSelf: 'center',
      marginBottom: hp('1'),
    },
    labelStyle: {
      marginBottom: hp('0.75'),
      color: 'red',
      fontSize: 16,
    },
    inputContainer: {
      flexDirection: 'row',
      width: wp('90%'),
      paddingHorizontal: wp('1'),
      height: hp('6'),
      alignSelf: 'center',
      borderWidth: 1,
      borderRadius: 8,

      backgroundColor: 'lightgrey',
      alignItems: 'center',
      overflow: 'hidden',
      marginTop: hp('1'),
    },

    inputWrapper: {
      flex: 1,
    },
    iconContainer: {
      paddingLeft: wp('3'),
      paddingRight: wp('1'),
    },
    rightIconContainer: {
      right: wp('5'),
      position: 'absolute',
    },
    inputStyle: {
      fontSize: 14,
      paddingHorizontal: wp('2'),
      color: 'red',

      maxWidth: wp('63'),
      minWidth: wp('55%'),
    },
    errStyle: {
      marginTop: hp('0.5'),
      color: 'red',
    },
  });
