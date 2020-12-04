import React from 'react';
import Modal from '../Modal';
import EditModalForm from '../EditModalForm';

const EditModal = ({
  isOpen, closeModal, add, contact, contactsInstance, navigation, instance
}) => (
  <Modal
    isOpen={isOpen}
    closeModal={closeModal}
  >
    <EditModalForm
      contactsInstance={contactsInstance}
      contact={contact}
      add={add}
      closeModal={closeModal}
      navigation={navigation}
      instance={instance}
    />
  </Modal>

);

export default EditModal;
