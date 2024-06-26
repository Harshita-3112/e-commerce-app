import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {scale} from 'react-native-size-matters';
import {COLORS} from '../../theme/Colors';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Search = () => {
  return (
    <View style={{flex: 1}}>
      <View style={styles.bar}>
        <TouchableOpacity style={{marginHorizontal: scale(10)}}>
          <AntDesign name="search1" size={20} color={COLORS.grey} />
        </TouchableOpacity>
        <View style={styles.searchWrapper}>
          <TextInput placeholder="What are you looking for?" />
        </View>
        <TouchableOpacity style={styles.searchBtn}>
          <Ionicons
            name="camera-outline"
            size={scale(18)}
            color={COLORS.white}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  bar: {
    height: scale(40),
    width: '90%',
    backgroundColor: COLORS.lightBlue,
    borderRadius: scale(10),
    marginHorizontal: scale(18),
    marginTop: scale(16),
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    // padding: scale(10),
  },

  searchWrapper: {
    flex: 1,
    backgroundColor: COLORS.lightBlue,
    borderRadius: scale(10),
  },
  searchBtn: {
    height: '100%',
    width: scale(40),
    borderRadius: scale(14),
    backgroundColor: COLORS.green,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
