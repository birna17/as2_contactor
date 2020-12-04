import React from 'react';
import { View, TextInput, Text, TouchableHighlight } from 'react-native';
import { v4 as uuidv4 } from 'uuid';
import Modal from '../Modal';
import { deleteContact } from '../../services/fileService';
import { takePhoto, selectFromCameraRoll } from '../../services/imageService';

class EditContactForm extends React.Component {
  constructor({
    add,
    closeModal,
    contact,
    navigation,
    contactsInstance,
    instance,
  }) {
    super();
    this.contactsInstance = contactsInstance;
    this.navigation = navigation;
    this.add = add;
    this.closeModal = closeModal;
    this.contact = contact;
    this.instance = instance
    this.state = {
      name: contact.name,
      phoneNumber: contact.phoneNumber,
      id: contact.id,
    };
  }

  handleChange(name, value) {
    this.setState({
      [name]: value,
    });
  }

  async takePhoto() {
    const photo = await takePhoto();
    if (photo.length > 0) await this.setState({ photo });
    console.log(this.state)
  }

  async selectFromCameraRoll() {
    const photo = await selectFromCameraRoll();
    if (photo.length > 0) await this.setState({ photo });
  }

  render() {
    const {
      name, phoneNumber,
    } = this.state;
    return (
      <View>
        <TouchableHighlight onPress={() => this.takePhoto()}>
          <Text>
            take photo
          </Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={() => this.selectFromCameraRoll()}>
          <Text>
            select from camera roll
          </Text>
        </TouchableHighlight>
        <TextInput
          style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
          type="text"
          value={name}
          onChangeText={(text) => this.handleChange('name', text)}
        />
        <TextInput
          style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
          type="text"
          value={phoneNumber}
          onChangeText={(text) => this.handleChange('phoneNumber', text)}
        />
        <TouchableHighlight onPress={() => {
          this.add(this.state);
          this.closeModal();
          deleteContact(this.contact);
          const { contactId } = this.state;
          this.contactsInstance.setState({
            contacts: [...this.contactsInstance.state.contacts.filter(
              (ccontact) => ccontact.id !== this.contact.id,
            ), this.state],
          });
          console.log(this.navigation.navigate);
          this.instance.setState({ contact: this.state });
        }}
        >
          <Text>confirm</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

export default EditContactForm;
