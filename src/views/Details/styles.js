import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  image: {
    width: 200,
    height: 200,
    margin: 10,
    borderRadius: 180,
    marginRight: 20,
    alignSelf: 'center',
  },
  imageContainer: {
    borderBottomWidth: 4,
    borderBottomColor: '#50545c',
    borderRadius: 6,
    margin: 5,
  },
  name: {
    alignSelf: 'center',
    fontSize: 35,
    color: '#fff',
    marginTop: 30,
  },
  number: {
    alignSelf: 'center',
    marginTop: 20,
    fontSize: 25,
    color: '#ced3db'
  },
  container: {
    backgroundColor: '#373d47',
    flex: 1,
  },
  buttonsContainer: {
    position: 'absolute',
    alignSelf: 'center',
    bottom: 15,
    flexDirection: 'row',
  },
  button: {
    marginRight: 10,
    marginLeft: 10,
    width: 64,
    borderWidth: 1,
    borderColor: '#ced3db',
    backgroundColor: '#50545c',
  },
  buttonText: {
    fontSize: 18,
    color: '#ced3db',
    padding: 5,
    alignSelf: 'center',
  },
});
