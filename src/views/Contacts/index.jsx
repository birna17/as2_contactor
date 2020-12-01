import React from 'react';
import { View } from 'react-native';
import ContactsList from '../../components/ContactsList';

class Contacts extends React.Component {
  constructor() {
    super();
    this.state = {
      contacts: JSON.parse('[{"id": 1,"name": "john doe","phoneNumber": "5812345","photo":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMFIMiSwX_AlzPot4VJ7JeYb1OWR6IcbIlPA&usqp=CAU"},{"id": 2,"name": "jane doe","phoneNumber": "5432185","photo":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMFIMiSwX_AlzPot4VJ7JeYb1OWR6IcbIlPA&usqp=CAU"},{"id": 3,"name": "john doe","phoneNumber": "5812345","photo":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMFIMiSwX_AlzPot4VJ7JeYb1OWR6IcbIlPA&usqp=CAU"},{"id": 4,"name": "jane doe","phoneNumber": "5432185","photo":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMFIMiSwX_AlzPot4VJ7JeYb1OWR6IcbIlPA&usqp=CAU"},{"id": 5,"name": "john doe","phoneNumber": "5812345","photo":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMFIMiSwX_AlzPot4VJ7JeYb1OWR6IcbIlPA&usqp=CAU"},{"id": 6,"name": "jane doe","phoneNumber": "5432185","photo":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMFIMiSwX_AlzPot4VJ7JeYb1OWR6IcbIlPA&usqp=CAU"},{"id": 7,"name": "john doe","phoneNumber": "5812345","photo":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMFIMiSwX_AlzPot4VJ7JeYb1OWR6IcbIlPA&usqp=CAU"},{"id": 8,"name": "jane doe","phoneNumber": "5432185","photo":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMFIMiSwX_AlzPot4VJ7JeYb1OWR6IcbIlPA&usqp=CAU"},{"id": 9,"name": "john doe","phoneNumber": "5812345","photo":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMFIMiSwX_AlzPot4VJ7JeYb1OWR6IcbIlPA&usqp=CAU"},{"id": 10,"name": "jane doe","phoneNumber": "5432185","photo":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMFIMiSwX_AlzPot4VJ7JeYb1OWR6IcbIlPA&usqp=CAU"},{"id": 11,"name": "john doe","phoneNumber": "5812345","photo":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMFIMiSwX_AlzPot4VJ7JeYb1OWR6IcbIlPA&usqp=CAU"},{"id": 12,"name": "jane doe","phoneNumber": "5432185","photo":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMFIMiSwX_AlzPot4VJ7JeYb1OWR6IcbIlPA&usqp=CAU"}]'),
    };
  }

  render() {
    const { contacts } = this.state;
    return (
      <View style={{ backgroundColor: '#373d47' }}>
        <ContactsList contacts={contacts} />
      </View>

    );
  }
}

export default Contacts;
