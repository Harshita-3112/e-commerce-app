import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {scale} from 'react-native-size-matters';
import {Heading} from '../../theme/fonts';

const CTAButton = ({
  backgroundColor,
  borderRadius,
  title,
  titleColor,
  marginTop,
}) => {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        {
          backgroundColor: backgroundColor,
          borderRadius: borderRadius,
          marginTop: marginTop,
        },
      ]}>
      <Heading style={{color: titleColor}}>{title}</Heading>
    </TouchableOpacity>
  );
};

export default CTAButton;

const styles = StyleSheet.create({
  button: {
    height: scale(40),
    width: '90%',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: scale(18),
  },
});
