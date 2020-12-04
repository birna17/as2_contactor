import React from 'react';
import { View, TextInput, Text, TouchableHighlight } from 'react-native';
import Modal from '../Modal';
import styles from './styles';

class AddModal extends React.Component {
  constructor({ isOpen, closeModal, add }) {
    super();
    this.isOpen = isOpen;
    console.log(isOpen);
    this.closeModal = closeModal;
    this.add = add;
    this.state = {
      name: '',
      number: '',
    };
  }

  handleChange(name, value) {
    this.setState({
      [name]: value,
    });
  }

  render() {
    const {
      name, number,
    } = this.state;
    return (
      <Modal
        isOpen={this.isOpen}
        closeModal={this.closeModal}
      >
        <View>
          <TextInput
            style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
            type="text"
            value={name}
            onChangeText={(text) => this.handleChange('name', text)}
          />
          <TextInput
            style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
            type="text"
            value={number}
            onChangeText={(text) => this.handleChange('number', text)}
          />
          <TouchableHighlight onPress={() => this.add(this.state)}><Text>press me</Text></TouchableHighlight>
        </View>
      </Modal>
    );
  }
}

export default AddModal;
