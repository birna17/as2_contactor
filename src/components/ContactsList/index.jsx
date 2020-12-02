import React from 'react';
import {
  View, FlatList, Text, Image, TouchableHighlight,
} from 'react-native';
import styles from './styles';

const ContactsList = ({
  contacts, navigation,
}) => (
  <View>
    <FlatList
      numColumns={1}
      data={contacts}
      renderItem={({ item: { name, phoneNumber, photo } }) => (
        <View style={styles.container}>
          <Image
            style={styles.image}
            source={{ uri: photo }}
          />
          <View>
            <Text style={styles.nametext}>
              {name}
            </Text>
          </View>
        </View>

      )}
      keyExtractor={(contact) => contact.id}
    />
  </View>
);

export default ContactsList;
