import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {FieldArray, Formik} from 'formik';
import Input from '../../components/Input/Input';
import useTheme from '../../hooks/useTheme';
import ArrayInput from '../../components/Input/ArrayInput';
import Button from '../../components/Button/Button';
import {ListValues} from '../../types/FormValues';
import {listValidate} from '../../utils/validate';
import {useAppDispatch} from '../../features';
import {AddList} from '../../services/ListService';

const ListItems = () => {
  const dispatch = useAppDispatch();
  const theme = useTheme();

  const initialValues: ListValues = {
    name: '',
    items: [
      {
        item: '',
      },
    ],
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

            {/* <Datepicker
              date={values.date}
              size="large"
              controlStyle={{ backgroundColor: "#fff" }}
              style={styles.categoryInput}
              accessoryRight={() => <Ionicons name="calendar-outline" size={24} />}
              onSelect={(date1) => setFieldValue(`date`, date1)}

            /> */}

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

export default ListItems;

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
});
