import React from 'react';
import { View, TouchableHighlight, Text, Image } from 'react-native';
import styles from './styles';
import { addContact , deleteContact } from '../../services/fileService';

export default class Details extends React.Component {
  constructor({ navigation }) {
    super();
    console.log(navigation.state.params)
    const { contacts, id, instance } = navigation.state.params
    console.log(contacts.findIndex((x) => x.id === id))
    this.state = {
      contact: contacts[contacts.findIndex((x) => x.id === id)],
      contacts,
      navigation,
      instance,
    }
  }

  render() {
    const { contact, contacts, navigation, instance } = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={{ uri: contact.photo }}
          />
        </View>
        <Text style={styles.name}>{contact.name}</Text>
        <Text style={styles.number}>{contact.phoneNumber}</Text>
        <View style={styles.buttonsContainer}>
          <TouchableHighlight onPress={() => { deleteContact(contact); contact.name = 'palli'; addContact(contact); instance.setState({ yes: 'yes' }); navigation.navigate('Details', { contacts, id: contact.id }); }} style={styles.button}>
            <Text style={styles.buttonText}>
              Edit
            </Text>
          </TouchableHighlight>
          <TouchableHighlight onPress={() => { deleteContact(contact); navigation.navigate('Contacts'); instance.setState({ contacts: contacts.filter((ccontact) => ccontact.id !== contact.id) }); }} style={styles.button}>
            <Text style={styles.buttonText}>
              Delete
            </Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}
