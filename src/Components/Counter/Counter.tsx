import {View, Text, Button} from 'react-native';
import React from 'react';
import {increment,decrement} from '../../Redux/slices/CounterSlices';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../Redux/store';

const Counter = () => {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <View>
      <Text>{count}</Text>
      <Button title="Increment" onPress={() => dispatch(increment())} />
      <Button title="Decrement" onPress={() => dispatch(decrement())} />
    </View>
  );
};

export default Counter;
