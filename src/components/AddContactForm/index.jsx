import React from 'react';
import { View, TextInput, Text, TouchableHighlight } from 'react-native';
import Modal from '../Modal';
import { takePhoto, selectFromCameraRoll } from '../../services/imageService';

class AddContactForm extends React.Component {
  constructor({ add, closeModal }) {
    super();
    this.add = add;
    this.closeModal = closeModal;
    this.state = {
      name: '',
      phoneNumber: '',
      photo: '',
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
        <TouchableHighlight onPress={() => {this.add(this.state); this.closeModal();}}><Text>confirm</Text></TouchableHighlight>
      </View>
    );
  }
}

export default AddContactForm;
