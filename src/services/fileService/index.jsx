import * as FileSystem from 'expo-file-system';
import { getInfoAsync } from 'expo-file-system';
import { v4 as uuidv4 } from 'uuid';


const contactDirectory = `${FileSystem.documentDirectory}contacts`;

export const addContact = async (contact) => {
  console.log(contact.id)
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
  await FileSystem.deleteAsync(`${contactDirectory}/${fileName}`)
};

export const loadContact = async (fileName) => FileSystem.readAsStringAsync(`${contactDirectory}/${fileName}`, {
  encoding: FileSystem.EncodingType.Base
});

export const setupDirectory = async () => {
  const dir = await getInfoAsync(contactDirectory);
  if (!dir.exists) {
    await FileSystem.makeDirectoryAsync(contactDirectory);
  }
};

export const getAllContacts = async () => {
  await setupDirectory();

  const result = await FileSystem.readDirectoryAsync(contactDirectory);
  return Promise.all(result.map(async (fileName) => JSON.parse(await loadContact(fileName))));
};
