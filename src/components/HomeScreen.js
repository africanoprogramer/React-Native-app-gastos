import * as React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import {Container, CheckBox, Body, Right, ListItem} from 'native-base';
import Animated from 'react-native-reanimated';
import {useSelector, useDispatch} from 'react-redux';
import {deleteTransaction} from '../store/actions/transactionActions';


import Card from './Parts/Card';
import Empty from './Parts/Empty';

export default function HomeScreen({navigation}) {

  const {transactions} = useSelector((state) => state.transactions);

  function Item(props) {
    const {title, price, id} = props;
    const dispatch = useDispatch();
    return (
      <View
        style={{marginVertical: 3, paddingHorizontal: 20, paddingVertical: 15}}>
        <ListItem>
          <CheckBox color='#ff4500' onPress={()=>{
            dispatch(deleteTransaction(id))
          }} />
          <Body>
            <Text
              style={{
                fontSize: 17,
                fontWeight: '700',
                marginLeft: 10,
                marginTop: 20,
              }}>
              {title}
            </Text>
            <Right>
              <Text
                style={{
                  fontFamily: 'Lato-Bold',
                  fontSize: 14,
                  fontWeight: '700',
                  color: price > 0 ? '#009bfc' : '#ff4500',
                  marginLeft: '70%',
                }}>
                {' '}
                {price > 0 ? `+${price}` : `-${Math.abs(price)}`} FCFA
              </Text>
            </Right>
          </Body>
        </ListItem>
      </View>
    );
  }

  return (
    <Container>
      <Animated.View style={styles.animatedStyles}>
        <Card navigation={navigation} />
      </Animated.View>
      <View style={{flex: 1, marginTop: -170}}>
        {transactions.length > 0 ? (
          <FlatList
            data={transactions}
            renderItem={({item}) => (
              <Item title={item.title} price={item.price} id={item.id} />
            )}
            keyExtractor={(item) => item.id.toString()}
          />
        ) : (
          <Empty />
        )}
      </View>
    </Container>
  );
}

const styles = StyleSheet.create({
  animatedStyles: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
});
