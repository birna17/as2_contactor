import React from 'react';
import { View, Text, TouchableHighlight } from 'react-native';

const Main = ({ navigation }) => (
  <View style={{ backgroundColor: '#6a6e75', flex: 1 }}>
    <Text>
      Welcome to Contactor!
      -the greatest app in existance
    </Text>
    <TouchableHighlight onPress={() => navigation.navigate('Contacts')}>
      <Text>
        contacts
      </Text>
    </TouchableHighlight>
  </View>
);

export default Main;
