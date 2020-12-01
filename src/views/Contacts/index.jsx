import React from 'react';
import { View } from 'react-native';
import ContactsList from '../../components/ContactsList';

class Contacts extends React.Component {
  constructor() {
    super();
    this.state = {
      contacts: JSON.parse('[{"name": "john doe","phoneNumber": "5812345","photo":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMFIMiSwX_AlzPot4VJ7JeYb1OWR6IcbIlPA&usqp=CAU"}]'),
    };
  }

  render() {
    const { contacts } = this.state;
    return (
      <View>
        <ContactsList contacts={contacts} />
      </View>

    );
  }
}

export default Contacts;
