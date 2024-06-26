import {
  ImageBackground,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  useWindowDimensions,
} from 'react-native';
import React from 'react';
import {scale} from 'react-native-size-matters';
import {COLORS} from '../../theme/Colors';
import AntDesign from 'react-native-vector-icons/AntDesign';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Feather from 'react-native-vector-icons/Feather';
import {Body, Heading, Subheading} from '../../theme/fonts';
import CTAButton from '../../components/CTAButton/CTAButton';
import SegmentButton from '../../components/SegmentButtoon/SegmentButton';
import {useNavigation} from '@react-navigation/native';
const Login = () => {
  const navigation = useNavigation();
  const handleSignUp = () => {
    navigation.navigate('SignUp');
  };

  return (
    <View style={{flex: 1, backgroundColor: '#f2f2f2'}}>
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

      <Heading style={styles.heading}>Unlimited Luxurious Furniture</Heading>

      <SegmentButton
        title={'Email'}
        placeholder={'Enter email'}
        icon={'mail'}
        iconSize={20}
      />

      <Subheading style={{marginTop: scale(20), marginHorizontal: scale(18)}}>
        Password
      </Subheading>
      <View style={styles.container2}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <EvilIcons name="lock" size={30} color={COLORS.grey} />
          <TextInput placeholder="Password" />
        </View>
        <Feather name="eye-off" size={18} color={COLORS.black} />
      </View>
      <CTAButton
        title={'LOGIN'}
        backgroundColor={COLORS.green}
        borderRadius={10}
        titleColor={COLORS.white}
        marginTop={90}
      />

      <View
        style={{
          flexDirection: 'row',
          marginHorizontal: scale(18),
          marginTop: scale(26),
          justifyContent: 'center',
        }}>
        <Body>Don't have an account?</Body>
        <TouchableOpacity onPress={handleSignUp}>
          <Body>Register</Body>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  heading: {
    color: COLORS.green,
    marginTop: scale(20),
    alignSelf: 'center',
  },
  textInput: {
    height: scale(40),
    width: '100%',
    borderRadius: scale(8),
    backgroundColor: 'red',
    marginTop: scale(10),
    padding: scale(12),
  },

  container2: {
    height: scale(40),
    width: '90%',
    borderRadius: scale(8),
    backgroundColor: COLORS.lightBlue,
    marginHorizontal: scale(18),
    alignSelf: 'center',
    marginTop: scale(6),
    flexDirection: 'row',
    paddingLeft: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
    // padding: scale(10),
  },
});
