import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Modal} from '../../components/Modal';
import Button from '../../components/Button/Button';
import TextButton from '../../components/Button/TextButton';
import useTheme from '../../hooks/useTheme';
import {useSelector} from 'react-redux';
import {RootState, useAppDispatch} from '../../features';
import {showModal} from '../../features/commonSlice';

const ConfirmModal = ({onSubmit}: any) => {
  const {isModal} = useSelector((state: RootState) => state.common);
  const theme = useTheme();

  const dispatch = useAppDispatch();
  return (
    <View>
      <Modal isVisible={isModal}>
        <Modal.Container>
          <Modal.Header title="Comback Soon!" />
          <Modal.Body>
            <Text style={styles.text}>Are you sure you want to logout ?</Text>
          </Modal.Body>
          <Modal.Footer>
            <TextButton
              title="Cancel"
              onPress={() => dispatch(showModal(false))}
              style={styles.button}
            />
            <Button
              title="Yes, Logout"
              style={[styles.button, {backgroundColor: theme.colors.danger}]}
              onPress={onSubmit}
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
