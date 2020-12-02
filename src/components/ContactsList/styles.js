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
    fontSize: 20,
    marginTop: 5,
  },
  phonetext: {
    fontSize: 35,
    marginTop: 8,
    marginBottom: 8,
  },
  touch: {
    borderColor: '#373d47',
    borderWidth: 1,
    backgroundColor: '#50545c',
    position: 'absolute',
    borderRadius: 5,
    top: 15,
    right: 25,
    padding: 3,
    width: 50,
  },
  edittext: {
    textAlign: 'center',
    color: '#ced3db',
  },
  editbutton: {
    borderColor: '#373d47',
    borderWidth: 1,
    backgroundColor: '#50545c',
    position: 'absolute',
    borderRadius: 5,
    top: 55,
    right: 25,
    padding: 3,
    width: 50,
  },
  deletebutton: {
    textAlign: 'center',
    color: '#ced3db',
  },
});
