import React from 'react';
import {
  View, FlatList, Text, Image, TouchableHighlight,
} from 'react-native';
import styles from './styles';

const ContactsList = ({
  contacts,
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
            <Text style={styles.phonetext}>
              {phoneNumber}
            </Text>
          </View>
          <TouchableHighlight style={styles.touch}
          >
            <Text style={styles.edittext>edit</Text>
          </TouchableHighlight>
          <TouchableHighlight style={styles.editbutton}
          >
            <Text style={styles.deletebutton}>Delete</Text>
          </TouchableHighlight>
        </View>

      )}
      keyExtractor={(contact) => contact.id}
    />
  </View>
);

export default ContactsList;
