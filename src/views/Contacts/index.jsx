import React from 'react';
import { View, TouchableHighlight, Text } from 'react-native';
import ContactsList from '../../components/ContactsList';
import { addContact, getAllContacts } from '../../services/fileService';
import AddModal from '../../components/AddModal';
import Toolbar from '../../components/Toolbar';

class Contacts extends React.Component {
  constructor({ navigation }) {
    super();
    this.state = {
      navigation,
      contacts: [],
      searchString: '',
      isAddModalOpen: false,
    };
  }

  async componentDidMount() {
    await this.fetchItems();
  }

  async fetchItems() {
    const contacts = await getAllContacts();
    const seen = {};
    const filtered = [];
    const len = contacts.length;
    let j = 0;
    for (let i = 0; i < len; i++) {
      const item = contacts[i];
      if (seen[item.id] !== 1 && seen[item.name + item.phoneNumber] !== 1) {
        seen[item.id] = 1;
        seen[item.name + item.phoneNumber] = 1;
        filtered[j++] = item;
      }
    }
    console.log(filtered)
    this.setState({ contacts: filtered });
  }

  addContact(contact) {
    addContact(contact);
    const { contacts } = this.state;
    this.setState({
      contacts: [...contacts, contact],
    });
  }

  render() {
    const {
      contacts, navigation, searchString, isAddModalOpen,
    } = this.state;
    return (
      <View style={{ backgroundColor: '#373d47', flex: 1 }}>
        <Toolbar
          onAdd={() => this.setState({ isAddModalOpen: true })}
          handleChange={(text) => this.setState({ searchString: text })}
        />
        <View style={{ backgroundColor: '#373d47' }}>
          <ContactsList
            navigation={navigation}
            instance={this}
            contacts={contacts.sort((a, b) => a.name > b.name).filter(
              (x) => x.name.toString().toLowerCase().indexOf(searchString.toLowerCase()) !== -1,
            )}
          />
        </View>
        <AddModal
          isOpen={isAddModalOpen}
          closeModal={() => this.setState({ isAddModalOpen: false })}
          add={(contact) => this.addContact(contact)}
        />
      </View>
    );
  }
}

export default Contacts;
