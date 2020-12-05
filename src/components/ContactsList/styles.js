import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10,
    borderRadius: 5,
    flexDirection: 'row',
    backgroundColor: '#6a6e75',
  },
  image: {
    width: 70,
    height: 70,
    margin: 10,
    borderRadius: 60,
    marginRight: 20,
    alignSelf: 'flex-end',
  },
  nametext: {
    color: '#ced3db',
    fontSize: 35,
    marginTop: 5,
  },
  callButtonContainer: {
    position: 'absolute',
    top: 20,
    right: 15,
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
