import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default function Empty() {
  return (
    <View style={{alignItems: 'center', marginTop: 30}}>
      <Text style={{color: '#ff4500', fontWeight: '700', fontSize: 20}}>
        Todavia No tienen Ningun Gasto Sadam!
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({});
