import React from 'react';
import {
  View, FlatList, Text, Image,
} from 'react-native';


const ContactsList = ({
 contacts,
}) => (
  <View>
    <FlatList
      numColumns={1}
      data={contacts}
      renderItem={({ item: { name, phoneNumber, photo } }) => (
        <View>
          <Image style={{ width: 115, height: 115, margin: 10 }} source={{ uri: photo }} />
          <Text>
            {name}
            {phoneNumber}
          </Text>
        </View>
      )}
      keyExtractor={(contact) => contact.name}
    />
  </View>
);

export default ContactsList;
