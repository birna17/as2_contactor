import * as FileSystem from 'expo-file-system';
import { getInfoAsync } from 'expo-file-system';
import { v4 as uuidv4 } from 'uuid';
import * as Contacts from 'expo-contacts';

const contactDirectory = `${FileSystem.documentDirectory}contacts`;

export const addContact = async (contact) => {
  if (contact.id === undefined) {
    const uuid = uuidv4();
    contact.id = uuid;
  }

  const contactAsString = JSON.stringify(contact);
  const fileName = `${contact.name + contact.id}.json`;
  FileSystem.writeAsStringAsync(`${contactDirectory}/${fileName}`, contactAsString);
};

export const deleteContact = async (contact) => {
  const fileName = `${contact.name + contact.id}.json`;
  await FileSystem.deleteAsync(`${contactDirectory}/${fileName}`);
};

export const loadContact = async (fileName) => FileSystem.readAsStringAsync(`${contactDirectory}/${fileName}`, {
  encoding: FileSystem.EncodingType.UTF8,
});

const setupDirectory = async () => {
  const dir = await getInfoAsync(contactDirectory);
  if (!dir.exists) {
    await FileSystem.makeDirectoryAsync(contactDirectory);
  }
};

const retriveContacts = async () => {
  const { status } = await Contacts.requestPermissionsAsync();
  if (status === 'granted') {
    let { data } = await Contacts.getContactsAsync({
      name: [Contacts.Fields.firstName],
      phoneNumber: [Contacts.Fields.phoneNumbers],
      photo: [Contacts.Fields.image],
    });

    if (data.length > 0) {
      console.log(data.filter((contact) => contact.imageAvailable === true));
      data = data.map((contact) => ({
        name: contact.name,
        phoneNumber: contact.phoneNumbers[0].number,
        id: uuidv4(),
        photo: (contact.imageAvailable ? contact.image.uri : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMFIMiSwX_AlzPot4VJ7JeYb1OWR6IcbIlPA&usqp=CAU'),
      }));
      data.map((contact) => addContact(contact));
      return data;
    }
  }
  return [];
};

export const getAllContacts = async () => {
  await setupDirectory();
  const contacts = await retriveContacts();
  console.log(contacts)

  const result = await FileSystem.readDirectoryAsync(contactDirectory);
  const localContacts = await Promise.all(result.map(async (fileName) => JSON.parse(await loadContact(fileName))));
  return [...localContacts, ...contacts];
};
