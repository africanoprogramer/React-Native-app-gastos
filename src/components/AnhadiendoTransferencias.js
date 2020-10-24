import React, {useState} from 'react';
import {StyleSheet, Button} from 'react-native';
import {Container, Content, Form, Item, Input} from 'native-base';
import {useDispatch} from 'react-redux';
import {addTransaction} from '../store/actions/transactionActions';

export default function AnhadiendoTransferencias() {
  const dispatch = useDispatch();

  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');

  const onsubmit = () => {
    if (!title || !price) {
      return alert('Porfavor rellene todos los campos');
    }

    const id = Math.floor(Math.random() * 600000);
    const newTransaction = {
      id,
      title,
      price: +price,
    };
    dispatch(addTransaction({...newTransaction}));
    alert('Ingresado!');
  };

  return (
    <Container>
      <Content>
        <Form>
          <Item style={styles.item}>
            <Input
              placeholder="Gastos"
              onChangeText={(title) => setTitle(title)}
            />
          </Item>
          <Item style={styles.item}>
            <Input
              placeholder="Precio"
              keyboardType="numbers-and-punctuation"
              onChangeText={(price) => setPrice(price)}
              onSubmitEditing={onsubmit}
            />
          </Item>
        </Form>
      </Content>
    </Container>
  );
}

const styles = StyleSheet.create({
  item: {
    marginVertical: 20,
  },
});
