import React from 'react';
import PropTypes from 'prop-types';
import {
  View, TouchableHighlight, Text, TextInput,
} from 'react-native';
import styles from './styles';

const Toolbar = ({ onAdd, searchString, handleChange }) => (
  <View>
    <View styleName="horizontal" style={styles.toolbar}>
      <TouchableHighlight
        style={styles.toolbarAction}
        onPress={onAdd}
      >
        <Text style={styles.toolbarActionText}>Add contact</Text>
      </TouchableHighlight>
    </View>
    <TextInput
      value={searchString}
      placeholder="search"
      placeholderTextColor="gray"
      style={{ height: 40, borderColor: 'gray', borderWidth: 1, color: '#fff' }}
      type="text"
      onChangeText={(text) => handleChange(text)}
    />
  </View>

);

Toolbar.propTypes = {
  onAdd: PropTypes.func.isRequired,
};

export default Toolbar;
