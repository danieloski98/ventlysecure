import React from 'react';
import {View, Text, Image, StyleSheet, TouchableHighlight} from 'react-native';

const ProfileCard = () => {
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
        <TouchableHighlight style={style.btn}>
          <Text style={style.btnText}>Sign In</Text>
        </TouchableHighlight>
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
    fontSize: 16,
    color: 'white',
    fontWeight: 'bold',
    marginTop: -12,
  },
  btnHolder: {
    width: '100%',
    height: '20%',
  },
  btn: {
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
