import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  bottomBar: {
    backgroundColor: 'black',
    width: '100%',
    height: 60,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    alignContent: 'center',
    alignSelf: 'center',
  },
  Icon: {
    width: 50,
    height: 50 ,
    alignSelf: 'center',
  },
  add: {
    width: 50 ,
    alignItems: 'center',
    justifyContent: 'center',
    height: 50 ,
    backgroundColor: '#B18D5C',
    borderRadius: 100,
    padding: 10,
  },
  // bottomBar: {
  //   flexDirection: 'row',
  //   backgroundColor: '#000', // ya jo bhi tumhara bar ka color ho
  //   justifyContent: 'space-around',
  //   paddingVertical: 10,
  //   alignItems: 'center',
  // },
  tabItem: {
    padding: 10,
    borderRadius: 10,
  },
  activeTab: {
    backgroundColor: '#222222', // active tab ka background thoda alag
  },
  icon: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
  },
});
export default styles;









