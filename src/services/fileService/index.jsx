import * as FileSystem from 'expo-file-system';
import { getInfoAsync } from 'expo-file-system';

const contactDirectory = `${FileSystem.documentDirectory}contacts`;

export const addContact = async (contact) => {

}

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
  console.log(contactDirectory);
  await setupDirectory();

  const result = await FileSystem.readDirectoryAsync(contactDirectory);
  return Promise.all(result.map(async (fileName) => ({
    name: fileName,
    file: await loadContact(fileName),
  })));
};
