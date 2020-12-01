import React from 'react';
import {
  View, FlatList, Text, Image, TouchableHighlight,
} from 'react-native';

const ContactsList = ({
  contacts,
}) => (
  <View>
    <FlatList
      numColumns={1}
      data={contacts}
      renderItem={({ item: { name, phoneNumber, photo } }) => (
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
              alignSelf: 'flex-end',
            }}
            source={{ uri: photo }}
          />
          <View>
            <Text style={{ color: '#ced3db', fontSize: 20, marginTop: 5 }}>
              {name}
            </Text>
            <Text style={{ fontSize: 35, marginTop: 8, marginBottom: 8 }}>
              {phoneNumber}
            </Text>
          </View>
          <TouchableHighlight style={{
            borderColor: '#373d47',
            borderWidth: 1,
            backgroundColor: '#50545c',
            position: 'absolute',
            borderRadius: 5,
            top: 15,
            right: 25,
            padding: 3,
            width: 50,
          }}
          >
            <Text style={{ textAlign: 'center', color: '#ced3db' }}>edit</Text>
          </TouchableHighlight>
          <TouchableHighlight style={{
            borderColor: '#373d47',
            borderWidth: 1,
            backgroundColor: '#50545c',
            position: 'absolute',
            borderRadius: 5,
            top: 55,
            right: 25,
            padding: 3,
            width: 50,
          }}
          >
            <Text style={{ textAlign: 'center', color: '#ced3db' }}>Delete</Text>
          </TouchableHighlight>
        </View>

      )}
      keyExtractor={(contact) => contact.id}
    />
  </View>
);

export default ContactsList;
