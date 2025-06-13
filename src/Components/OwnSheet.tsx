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


