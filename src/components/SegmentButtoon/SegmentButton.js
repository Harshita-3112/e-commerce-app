import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import Entypo from 'react-native-vector-icons/Entypo';
import {scale} from 'react-native-size-matters';
import {Subheading} from '../../theme/fonts';
import {COLORS} from '../../theme/Colors';

const SegmentButton = ({
  title,
  placeholder,
  icon,
  iconSize,
  icon2,
  keyboardType,
}) => {
  return (
    <View>
      <View style={{marginHorizontal: scale(18)}}>
        <Subheading style={{marginTop: scale(16)}}>{title}</Subheading>
      </View>
      <View style={styles.container}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Entypo name={icon} size={iconSize} color={COLORS.grey} />
          <TextInput placeholder={placeholder} keyboardType={keyboardType} />
        </View>
        <Entypo name={icon2} size={iconSize} color={COLORS.grey} />
      </View>
    </View>
  );
};

export default SegmentButton;

const styles = StyleSheet.create({
  container: {
    height: scale(40),
    width: '90%',
    borderRadius: scale(8),
    backgroundColor: COLORS.lightBlue,
    marginHorizontal: scale(18),
    alignSelf: 'center',
    marginTop: scale(6),

    flexDirection: 'row',
    paddingLeft: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
