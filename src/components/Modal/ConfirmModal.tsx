import {StyleSheet, Text, View} from 'react-native';
import React, {Dispatch} from 'react';
import {Modal} from '../../components/Modal';
import Button from '../../components/Button/Button';
import TextButton from '../../components/Button/TextButton';
import useTheme from '../../hooks/useTheme';

type ModalProps = {
  isModalVisible: boolean;
  setIsModalVisible: Dispatch<React.SetStateAction<boolean>>;
};

const ConfirmModal = ({isModalVisible, setIsModalVisible}: ModalProps) => {
  const theme = useTheme();
  const handleModal = () => setIsModalVisible(() => !isModalVisible);
  return (
    <View>
      <Modal isVisible={isModalVisible}>
        <Modal.Container>
          <Modal.Header title="Comback Soon!" />
          <Modal.Body>
            <Text style={styles.text}>Are you sure you want to logout ?</Text>
          </Modal.Body>
          <Modal.Footer>
            <TextButton
              title="Cancel"
              onPress={handleModal}
              style={styles.button}
            />
            <Button
              title="Yes, Logout"
              onPress={handleModal}
              style={[styles.button, {backgroundColor: theme.colors.danger}]}
            />
          </Modal.Footer>
        </Modal.Container>
      </Modal>
    </View>
  );
};

export default ConfirmModal;

const styles = StyleSheet.create({
  text: {
    textAlign: 'center',
    fontSize: 14,
    color: '#000',
    fontFamily: 'Poppins-Light',
    textTransform: 'capitalize',
  },
  button: {
    paddingHorizontal: 30,
  },
});
