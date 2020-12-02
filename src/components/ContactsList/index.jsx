import React from 'react';
import {
  View, FlatList, Text, Image, TouchableHighlight,
} from 'react-native';
import styles from './styles';

const ContactsList = ({
  contacts, navigation, instance,
}) => (
  <View>
    <FlatList
      numColumns={1}
      data={contacts}
      renderItem={({ item: { name, id, photo } }) => (
        <TouchableHighlight onPress={() => navigation.navigate('Details', { id, contacts, instance })}>
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
        </TouchableHighlight>

      )}
      keyExtractor={(contact) => contact.id}
    />
  </View>
);

export default ContactsList;
