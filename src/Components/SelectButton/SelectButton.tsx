import { View, Text, Pressable } from 'react-native';
import React, { ReactNode } from 'react';
import createStyles from './styles';
import { useTheme } from '../../shared/theme';


type ScheduleProps = {
  rightContent?: ReactNode;
  onPress?: () => void;
};

const SelectButton: React.FC<ScheduleProps> = ({ rightContent, onPress }) => {

 const theme = useTheme(); 
  const styles = createStyles(theme, theme);
  return (
    <View>
      <Pressable style={styles.container1} onPress={onPress}>
        {rightContent ? (
          rightContent
        ) : (
          <Text style={styles.label}>Caw Types</Text>
        )}
        <Text style={styles.placeholder}>Tap to Select</Text>
      </Pressable>
    </View>
  );
};

export default SelectButton;

