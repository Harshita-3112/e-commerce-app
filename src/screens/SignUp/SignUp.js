import {
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import {Heading} from '../../theme/fonts';
import SegmentButton from '../../components/SegmentButtoon/SegmentButton';
import {scale} from 'react-native-size-matters';
import {COLORS} from '../../theme/Colors';
import CTAButton from '../../components/CTAButton/CTAButton';

const SignUp = () => {
  return (
    <ScrollView>
      <ImageBackground
        style={{height: scale(280), width: '100%'}}
        source={require('../../asstes/images/bk.png')}
        resizeMode="contain">
        <AntDesign
          name="leftcircleo"
          size={18}
          color={COLORS.black}
          style={{left: 12, marginTop: 10}}
        />
      </ImageBackground>
      <Heading style={styles.heading}>Sign Up and start shopping</Heading>
      <SegmentButton
        title={'Username'}
        placeholder={'Username'}
        icon={'user'}
        iconSize={20}
        keyboardType={'default'}
      />
      <SegmentButton
        title={'Email'}
        placeholder={'Enter email'}
        icon={'mail'}
        iconSize={20}
        keyboardType={'email-address'}
      />
      <SegmentButton
        title={'Location'}
        placeholder={'Location'}
        icon={'location-pin'}
        iconSize={20}
        keyboardType={'web-search'}
      />
      <SegmentButton
        title={'Password'}
        placeholder={'Passsword'}
        icon={'lock'}
        icon2={'eye-with-line'}
        iconSize={20}
        keyboardType={'default'}
      />

      <CTAButton
        title={'SIGNUP'}
        backgroundColor={COLORS.green}
        borderRadius={10}
        titleColor={COLORS.white}
        marginTop={30}
      />
    </ScrollView>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  heading: {
    color: COLORS.green,
    marginTop: scale(20),
    alignSelf: 'center',
  },
});
