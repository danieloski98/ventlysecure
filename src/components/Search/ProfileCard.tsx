/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableHighlight,
  Animated,
} from 'react-native';

const ProfileCard = () => {
  const marginTop = new Animated.Value(0);
  const marginTop2 = new Animated.Value(0);
  const start2 = Animated.spring(marginTop2, {
    toValue: -80,
    bounciness: 10,
    useNativeDriver: false,
  });
  const startAnim = Animated.timing(marginTop, {
    toValue: -200,
    useNativeDriver: false,
  });

  const stop1 = Animated.spring(marginTop, {
    toValue: 0,
    bounciness: 10,
    useNativeDriver: false,
  });

  const stop2 = Animated.timing(marginTop2, {
    toValue: 200,
    useNativeDriver: false,
  });
  const signin = () => {
    startAnim.start();
    start2.start();
  };

  const signout = () => {
    stop1.start();
    stop2.start();
  };
  return (
    <View style={style.parent}>
      <View style={style.imageholder}>
        <View style={style.imagecontainer}>
          <Image
            source={require('../../assets/images/avatar.jpg')}
            style={style.image}
          />
        </View>
      </View>
      <View style={style.textbox}>
        <Text style={[style.text, style.headertext]}>Jessica Anderson</Text>
        <Text style={[style.text, style.normalText]}>Jessica@vent.ly</Text>
      </View>
      <View style={style.ticketTypecontainer}>
        <View style={style.ticketcontainer}>
          <Image
            source={require('../../assets/images/crown.png')}
            style={style.crownimage}
            resizeMode="contain"
          />
          <Text style={style.tickettype}>VIP Ticket</Text>
        </View>
      </View>
      <View style={style.btnHolder}>
        <Animated.View
          style={{
            width: '100%',
            height: '100%',
            transform: [{translateY: marginTop}],
          }}>
          <TouchableHighlight style={style.btn} onPress={() => signin()}>
            <Text style={style.btnText}>Sign In</Text>
          </TouchableHighlight>
        </Animated.View>
        <Animated.View
          style={{
            width: '100%',
            height: '100%',
            transform: [{translateY: marginTop2}],
          }}>
          <TouchableHighlight
            style={style.signoutbtn}
            onPress={() => signout()}>
            <Text style={style.btnText}>Sign out</Text>
          </TouchableHighlight>
        </Animated.View>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  parent: {
    width: '90%',
    height: 400,
    marginLeft: 20,
    marginRight: 20,
    borderRadius: 5,
    backgroundColor: '#2D2C2C',
    marginTop: 60,
    display: 'flex',
  },
  imageholder: {
    width: '100%',
    height: '25%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  imagecontainer: {
    width: 120,
    height: 120,
    borderRadius: 70,
    padding: 10,
    elevation: 4,
    backgroundColor: '#403D3E',
    marginTop: -40,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  textbox: {
    width: '100%',
    height: '15%',
  },
  text: {
    textAlign: 'center',
  },
  headertext: {
    fontWeight: 'bold',
    fontSize: 20,
    color: 'white',
  },
  normalText: {
    textAlign: 'center',
    color: 'whitesmoke',
    fontSize: 14,
  },
  ticketTypecontainer: {
    width: '100%',
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  ticketcontainer: {
    display: 'flex',
    alignItems: 'center',
    paddingTop: 20,
  },
  crownimage: {
    width: 60,
    height: 60,
  },
  tickettype: {
    fontSize: 14,
    color: 'white',
    fontWeight: '500',
    marginTop: 0,
  },
  btnHolder: {
    width: '100%',
    height: '20%',
    display: 'flex',
    overflow: 'hidden',
  },
  btn: {
    height: '100%',
    backgroundColor: 'green',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',

  },
  signoutbtn: {
    height: '100%',
    backgroundColor: '#EC2E48',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnText: {
    color: 'white',
    fontSize: 16,
  },
});

export default ProfileCard;
