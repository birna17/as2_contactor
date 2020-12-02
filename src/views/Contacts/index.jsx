import React from 'react';
import { View, TouchableHighlight, Text } from 'react-native';
import ContactsList from '../../components/ContactsList';
import { addContact, getAllContacts } from '../../services/fileService';

class Contacts extends React.Component {
  constructor({ navigation }) {
    super();
    this.state = {
      navigation,
      contacts: [],
      searchString: '',
    };
  }

  async componentDidMount() {
    await this.fetchItems();
  }

  async fetchItems() {
    const contacts = await getAllContacts();
    this.setState({ contacts });
  }

  render() {
    const { contacts, navigation, searchString } = this.state;
    return (
      <View style={{ backgroundColor: '#373d47', flex: 1 }}>
        <TouchableHighlight onPress={() => addContact({ name: 'john doe', phoneNumber: '5812345', photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMFIMiSwX_AlzPot4VJ7JeYb1OWR6IcbIlPA&usqp=CAU' })}>
          <Text>
            add
          </Text>
        </TouchableHighlight>
        <View style={{ backgroundColor: '#373d47' }}>
          <ContactsList
            navigation={navigation}
            instance={this}
            contacts={contacts.filter(
              (x) => x.name.toString().toLowerCase().indexOf(searchString.toLowerCase()) !== -1
            )}
          />
        </View>
      </View>
    );
  }
}

export default Contacts;
