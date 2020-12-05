import React from 'react';
import * as Linking from 'expo-linking';
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
      renderItem={({ item: { name, id, phoneNumber, photo } }) => (
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
            <TouchableHighlight style={[styles.callButtonContainer, styles.button]} onPress={() => Linking.openURL(`tel:${phoneNumber}`)} >
              <Text style={styles.buttonText}>
                call
              </Text>
            </TouchableHighlight>
          </View>
        </TouchableHighlight>

      )}
      keyExtractor={(contact) => contact.id}
    />
  </View>
);

export default ContactsList;
