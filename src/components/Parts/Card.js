import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {Button} from 'native-base';
import {useSelector} from 'react-redux';
import {color} from 'react-native-reanimated';

export default function Card({navigation}) {
  const {transactions} = useSelector((state) => state.transactions);
  const prices = transactions.map((transactions) => transactions.price);
  const totalPrice = prices.reduce((prev, cur) => (prev += cur), 0);
  const gastos =
    prices
      .filter((price) => price < 0)
      .reduce((prev, cur) => (prev += cur), 0) * -1;

  return (
    <LinearGradient
      colors={['#faad3d', '#efc90a', '#f1cb0c']}
      style={{...styles.Box}}>
      <View style={{width: '70%', alignItems: 'flex-start'}}>
        <Text style={styles.TextoOneStyle}>Cuenta Corriente </Text>
        <Text style={styles.TextoTwoStyle}>{totalPrice} FCFA </Text>
        <Text style={styles.TextoThreeStyle}>6275 **** **** 6533</Text>
      </View>

      <View style={{width: '70%', alignItems: 'flex-end'}}>
        <Text style={styles.TextoGuinea}>Guinea Ecuatorial</Text>
        <Button
          rounded
          light
          style={styles.Btnadd}
          onPress={() => {
            navigation.navigate('add');
          }}>
          <Text style={styles.TxtBtn}>Añadir</Text>
        </Button>
        <Text style={styles.TextoBalance}>Gastos</Text>
        {gastos < 30000 ? (
          <Text
            style={[
              styles.TextoBalanceNumber,
              {color: gastos > 25000 ? '#ff1414' : '#fff'},
            ]}>
            {gastos} CFA
          </Text>
        ) : (
          <Text style={styles.colorvariable}>
            No tienes que seguir gastando Sadam
          </Text>
        )}
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  Box: {
    width: '100%',
    height: 189,
    borderRadius: 15,
    flexDirection: 'row',
    padding: 22,
  },
  TextoOneStyle: {
    fontSize: 15,
    color: '#fff',
    fontFamily: 'Roboto',
    fontWeight: '600',
  },
  TextoTwoStyle: {
    fontFamily: 'Roboto',
    fontSize: 30,
    color: '#fff',
    fontWeight: '700',
  },
  TextoThreeStyle: {
    color: '#fff',
    fontFamily: 'Roboto',
    marginTop: 67,
    fontSize: 18,
    fontWeight: '700',
  },
  TextoBalance: {
    color: '#fff',
    fontFamily: 'Roboto',
    fontSize: 13,
    fontWeight: '700',
    marginRight: '76%',
    marginTop: 6,
  },
  TextoBalanceNumber: {
    fontSize: 12,
    fontWeight: '700',
    marginRight: '70%',
  },
  TextoGuinea: {
    fontSize: 15,
    color: '#fff',
    fontFamily: 'Roboto',
    fontWeight: '600',
    marginRight: 150,
  },
  Btnadd: {
    padding: 10,
    marginTop: 25,
    borderWidth: 2,
    borderColor: '#fff',
    backgroundColor: '#e10c62',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 7,
  },
  TxtBtn: {
    color: '#fff',
    fontFamily: 'Roboto',
    fontSize: 25,
    fontWeight: '600',

  },
  colorvariable: {
    color: '#FF1414',
    fontSize: 11,
    fontWeight: '700',
    marginRight: '50%',
  },
});
