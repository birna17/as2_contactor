import React from 'react';
import Modal from '../Modal';
import AddContactForm from '../AddContactForm';

const AddModal = ({
  isOpen, closeModal, add
}) => (
  <Modal
    isOpen={isOpen}
    closeModal={closeModal}
  >
    <AddContactForm add={add} closeModal={closeModal} />
  </Modal>

);

export default AddModal;
