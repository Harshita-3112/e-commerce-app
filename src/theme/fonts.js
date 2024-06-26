import {Text} from 'react-native';
import React from 'react';
import {scale} from 'react-native-size-matters';
import {COLORS} from './Colors';

export const Heading = ({children, style, numberOfLines}) => {
  return children ? (
    <Text
      numberOfLines={numberOfLines ? numberOfLines : null}
      style={[
        {
          fontSize: scale(16),
          // fontFamily: 'Poppins Bold',
          fontWeight: '700',
          color: COLORS.black,
        },
        style ? {...style} : {},
      ]}>
      {children}
    </Text>
  ) : null;
};
export const Subheading = ({children, style, numberOfLines}) => {
  return children ? (
    <Text
      numberOfLines={numberOfLines ? numberOfLines : null}
      style={[
        {
          fontSize: scale(16),
          // fontFamily: 'Poppins Medium',
          fontWeight: '400',
          color: COLORS.grey,
        },
        style ? {...style} : {},
      ]}>
      {children}
    </Text>
  ) : null;
};
export const Body = ({children, style, numberOfLines}) => {
  return children ? (
    <Text
      numberOfLines={numberOfLines ? numberOfLines : null}
      style={[
        {
          fontSize: scale(12),
          // fontFamily: 'Poppins Regular',
          fontWeight: '400',
          color: COLORS.grey,
        },
        style ? {...style} : {},
      ]}>
      {children}
    </Text>
  ) : null;
};

export const SubBody = ({children, style, theme}) => {
  return children ? (
    <Text
      style={[
        {
          fontSize: scale(10),
          fontFamily: 'Poppins Regular',
          color: COLORS.black,
        },
        style ? {...style} : {},
      ]}>
      {children}
    </Text>
  ) : null;
};
