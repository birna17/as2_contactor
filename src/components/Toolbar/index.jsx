import React from 'react';
import PropTypes from 'prop-types';
import { View, TouchableHighlight, Text } from 'react-native';
import styles from './styles';

const Toolbar = ({ onAdd }) => (
  <View styleName="horizontal" style={styles.toolbar}>
    <TouchableHighlight
      style={styles.toolbarAction}
      onPress={onAdd}
    >
      <Text style={styles.toolbarActionText}>Add contact</Text>
    </TouchableHighlight>
  </View>
);

Toolbar.propTypes = {
  onAdd: PropTypes.func.isRequired,
};

export default Toolbar;
