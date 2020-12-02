import React from 'react';
import {
  View, FlatList, Text, Image, TouchableHighlight,
} from 'react-native';

const ContactsList = ({
  contacts, navigation,
}) => (
  <View>
    <FlatList
      numColumns={1}
      data={contacts}
      renderItem={({ item: { name, phoneNumber, photo } }) => (
        <TouchableHighlight onPress={() => navigation.navigate('Main')}>
          <View style={{
            marginTop: 10,
            marginLeft: 10,
            marginRight: 10,
            marginBottom: 10,
            borderRadius: 5,
            flexDirection: 'row',
            backgroundColor: '#6a6e75',
          }}
          >
            <Image
              style={{
                width: 70,
                height: 70,
                margin: 10,
                borderRadius: 60,
                marginRight: 20,
              }}
              source={{ uri: photo }}
            />
            <View>
              <Text style={{ color: '#ced3db', fontSize: 35, marginTop: 5 }}>
                {name}
              </Text>
            </View>
          </View>
      </TouchableHighlight>

      )}
      keyExtractor={(contact) => contact.id}
    />
  </View>
);

export default ContactsList;
