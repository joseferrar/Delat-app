import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import RNModal from 'react-native-modal';

type ModalProps = {
  isVisible: boolean;
  children: any;
  [x: string]: any;
};

export const Modal = ({isVisible = false, children, ...props}: ModalProps) => {
  return (
    <RNModal
      isVisible={isVisible}
      animationInTiming={1000}
      animationOutTiming={1000}
      backdropTransitionInTiming={800}
      backdropTransitionOutTiming={800}
      {...props}>
      {children}
    </RNModal>
  );
};

const ModalContainer = ({children}: {children: any}) => (
  <View style={styles.container}>{children}</View>
);

const ModalHeader = ({title}: {title: any}) => (
  <View style={styles.header}>
    <Text style={styles.text}>{title}</Text>
  </View>
);

const ModalBody = ({children}: {children?: any}) => (
  <View style={styles.body}>{children}</View>
);

const ModalFooter = ({children}: {children?: any}) => (
  <View style={styles.footer}>{children}</View>
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    borderRadius: 25,
    borderWidth: 1,
    borderColor: '#000',
    borderStyle: 'solid',
  },
  header: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    paddingTop: 10,
    textAlign: 'center',
    fontSize: 24,
    color: '#000',
    fontFamily: 'Poppins-Bold',
  },
  body: {
    justifyContent: 'center',
    paddingHorizontal: 15,
    minHeight: 50,
  },
  footer: {
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 10,
    flexDirection: 'row',
  },
});

Modal.Header = ModalHeader;
Modal.Container = ModalContainer;
Modal.Body = ModalBody;
Modal.Footer = ModalFooter;
