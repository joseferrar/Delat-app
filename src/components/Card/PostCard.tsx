import { StyleSheet, Text, TouchableWithoutFeedback, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { Colors } from 'react-native/Libraries/NewAppScreen';

const PostCard = ({ title, onPress }: any) => {
  return (
    <View>
      <TouchableWithoutFeedback>
        <View style={styles.mainCardView}>
          <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 2 }}>
            <View style={{ marginLeft: 12, marginBottom: 12 }}>
              <Text
                style={{
                  fontSize: 16,
                  color: Colors.black,
                  fontWeight: 'bold',
                  textTransform: 'capitalize',
                  lineHeight: 24,

                  margin: 6
                }}>
                {title}
              </Text>
              <TouchableOpacity
                onPress={onPress}
                style={{
                  height: 30,
                  backgroundColor: 'red',
                  borderWidth: 0,
                  width: 80,
                  borderRadius: 12,
                  marginTop: 6
                }}>
                <Text style={{ color: '#fff', textAlign: 'center', fontWeight: 'bold', lineHeight: 26 }}>
                  Remove
                </Text>
              </TouchableOpacity>
            </View>

          </View>

        </View>
      </TouchableWithoutFeedback>
    </View>
  )
}

export default PostCard

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mainCardView: {

    backgroundColor: Colors.white,
    borderRadius: 15,
    shadowColor: Colors.shadow,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 1,
    shadowRadius: 8,
    elevation: 8,
    flexDirection: 'row',
    // justifyContent: 'space-between',
    paddingLeft: 1,
    paddingRight: 1,
    marginTop: 12,
    marginBottom: 6,
    marginLeft: 16,
    marginRight: 16,
  },
})