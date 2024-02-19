import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {FieldArray, Formik} from 'formik';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import Input from '../../components/Input/Input';
import useTheme from '../../hooks/useTheme';
import ArrayInput from '../../components/Input/ArrayInput';
import Button from '../../components/Button/Button';
import {ListValues} from '../../types/FormValues';
import {listValidate} from '../../utils/validate';
import {RootState, useAppDispatch} from '../../features';
import {AddList} from '../../services/ListService';
import {showDate} from '../../features/commonSlice';
import {TimeFormat} from '../../utils/DateTime';
import {useSelector} from 'react-redux';

const ListItem = () => {
  const {isDate} = useSelector((state: RootState) => state.common);
  const dispatch = useAppDispatch();
  const theme = useTheme();
  const date = new Date(Date.now());
  const [selectedDate, setSelectedDate] = useState(date);

  const initialValues: ListValues = {
    name: '',
    date: new Date(Date.now()),
    items: [
      {
        item: '',
      },
    ],
  };

  const showDatePicker = () => {
    dispatch(showDate(true));
  };

  const hideDatePicker = () => {
    dispatch(showDate(false));
  };

  const handleConfirm = (date1: Date) => {
    setSelectedDate(date1);
    hideDatePicker();
  };
  return (
    <View>
      <Formik
        initialValues={initialValues}
        validationSchema={listValidate}
        onSubmit={async (values, {resetForm}) => {
          console.log(values);
          dispatch(AddList(values));
          resetForm();
        }}>
        {({
          values,
          handleChange,
          handleBlur,
          handleSubmit,
          errors,
          touched,
        }) => (
          <View>
            <Text style={[styles.itemText, {color: theme.colors.text}]}>
              Name
            </Text>
            <Input
              value={values.name}
              onChangeText={handleChange('name')}
              onBlur={handleBlur('name')}
              error={touched.name && errors.name}
              placeholder="List Name"
              color={theme.colors.text}
              style={{backgroundColor: theme.colors.border}}
            />
            <Text
              style={[
                styles.itemText,
                {color: theme.colors.text, marginTop: -6},
              ]}>
              Date
            </Text>
            <TouchableOpacity
              activeOpacity={0.6}
              style={styles.DateContainer}
              onPress={showDatePicker}>
              <Text style={styles.DateText}>{TimeFormat(selectedDate)}</Text>
            </TouchableOpacity>
            <DateTimePickerModal
              locale="en_GB"
              date={values.date}
              isVisible={isDate}
              mode="datetime"
              onConfirm={handleConfirm}
              onCancel={hideDatePicker}
            />

            <FieldArray name="items">
              {({push, remove}) => (
                <View>
                  <View style={{flexDirection: 'row', marginTop: 15}}>
                    <Button
                      varient="success"
                      title="Add Item"
                      onPress={() => push({item: ''})}
                      style={styles.addBtn}
                      textStyle={styles.addText}
                    />
                  </View>
                  {values.items.map((p, index) => {
                    return (
                      <View key={index}>
                        <ArrayInput
                          value={p.item}
                          onChangeText={handleChange(`items[${index}].item`)}
                          placeholder={`item ${index + 1}`}
                          onClose={() => remove(index)}
                        />
                      </View>
                    );
                  })}
                </View>
              )}
            </FieldArray>

            <Button
              title="Submit"
              varient="primary"
              style={styles.submit}
              onPress={handleSubmit}
            />
          </View>
        )}
      </Formik>
    </View>
  );
};

export default ListItem;

const styles = StyleSheet.create({
  itemText: {
    marginLeft: 20,
    marginTop: 12,
    marginBottom: 4,
    fontFamily: 'Poppins-Bold',
  },
  addBtn: {
    marginBottom: 16,
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  addText: {
    fontSize: 12,
    fontFamily: 'Poppins-Medium',
  },
  submit: {
    marginBottom: 75,
  },
  DateContainer: {
    borderColor: '#6C63FF',
    marginBottom: 8,
    marginTop: 4,
    marginLeft: 14,
    marginRight: 14,
    borderWidth: 2,
    borderRadius: 12,
    padding: 15,
    backgroundColor: '#fff',
  },
  DateText: {
    color: '#000',
    fontSize: 18,
  },
});
