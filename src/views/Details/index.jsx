import React from 'react';
import { View, TouchableHighlight, Text, Image } from 'react-native';
import styles from './styles';
import { addContact, deleteContact } from '../../services/fileService';
import EditModal from '../../components/EditModal';


export default class Details extends React.Component {
  constructor({ navigation }) {
    super();
    const { contacts, id, instance } = navigation.state.params
    this.state = {
      contact: contacts[contacts.findIndex((x) => x.id === id)],
      contacts,
      navigation,
      instance,
      isEditModalOpen: false,
    }
  }

  render() {
    const {
      contact, contacts, navigation, instance, isEditModalOpen,
    } = this.state;
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
          <TouchableHighlight onPress={() => this.setState({ isEditModalOpen: true })} style={styles.button}>
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
        <EditModal
          isOpen={isEditModalOpen}
          closeModal={() => this.setState({ isEditModalOpen: false })}
          add={(contact) => addContact(contact)}
          contact={contact}
          contactsInstance={instance}
          navigation={navigation}
          instance={this}
        />
      </View>
    );
  }
}
