import React from 'react';
import {
  View,
  Text,
  StatusBar,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import ViewPager from '@react-native-community/viewpager';
import LinearGradient from 'react-native-linear-gradient';
import {TouchableHighlight} from 'react-native-gesture-handler';
import Scanner from '../pages/scanner';

const Dashboard = ({navigation}: {navigation: any}) => {
  return (
    <View style={style.parent}>
      <StatusBar backgroundColor="#121212" />
      <View style={style.toolbar}>
        <View style={{flex: 1}} />
        <Image
          source={require('../assets/images/logo2.png')}
          resizeMode="contain"
          style={style.logo}
        />
        <Icon
          name="search"
          color="white"
          size={30}
          style={style.search}
          onPress={() => navigation.navigate('search')}
        />
      </View>
      <View style={style.scannerarea}>
        <TouchableOpacity
          style={style.scannerbox}
          onPress={() => navigation.navigate('scanner')}>
          <Icon name="camera" size={100} color="white" />
          <Text style={style.scannerboxText}>Tap to Scan Event Code</Text>
        </TouchableOpacity>
      </View>
      <View style={style.activityview}>
        <Text style={style.activityText}>Analytics</Text>
        <View style={{width: '100%', height: '50%'}}>
          <ScrollView
            style={[style.scrollview]}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            centerContent={true}>
            <View style={[style.lineargradientcontainer, {marginRight: 10}]}>
              <LinearGradient
                start={{x: 0, y: 0}}
                end={{x: 1, y: 0}}
                colors={['#F66D6D', '#FF72CB']}
                style={style.linearGradient}
                collapsable={true}>
                <View style={{width: '100%'}}>
                  <Text style={style.buttonText}>25</Text>
                  <Text style={style.linearGradientsmallText}>Signed In</Text>
                </View>
              </LinearGradient>
            </View>

            <View style={[style.lineargradientcontainer, {marginRight: 10}]}>
              <LinearGradient
                start={{x: 0, y: 0}}
                end={{x: 1, y: 0}}
                colors={['#65B1EB', '#8472FF']}
                style={style.linearGradient}
                collapsable={true}>
                <View style={{width: '100%'}}>
                  <Text style={style.buttonText}>25</Text>
                  <Text style={style.linearGradientsmallText}>Signed In</Text>
                </View>
              </LinearGradient>
            </View>

            <View style={[style.lineargradientcontainer, {marginRight: 40}]}>
              <LinearGradient
                start={{x: 0, y: 0}}
                end={{x: 1, y: 0}}
                colors={['#FF9A9A', '#C32DD4']}
                style={style.linearGradient}
                collapsable={true}>
                <View style={{width: '100%'}}>
                  <Text style={style.buttonText}>25</Text>
                  <Text style={style.linearGradientsmallText}>Signed In</Text>
                </View>
              </LinearGradient>
            </View>
          </ScrollView>
        </View>
        <View style={style.logoutcontainer}>
          <TouchableOpacity
            style={style.logoutBtn}
            onPress={() => navigation.navigate('home')}>
            <Text style={style.logoutText}>Logout</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  parent: {
    flex: 1,
    backgroundColor: '#121212',
  },
  toolbar: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: '10%',
    paddingRight: 10,
    paddingLeft: 10,
    paddingTop: 20,
  },
  logo: {
    width: '70%',
    height: '90%',
  },
  search: {
    flex: 1,
    marginTop: 8,
  },
  scannerarea: {
    height: '50%',
    width: '90%',
    display: 'flex',
    borderRadius: 5,
    backgroundColor: '#2A2A2A',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 20,
    marginRight: 20,
    marginTop: '10%',
  },
  scannerbox: {
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  scannerboxText: {
    color: 'white',
    marginTop: 20,
  },
  activityview: {
    width: '100%',
    marginLeft: 20,
    flex: 1,
    marginTop: 30,
  },
  activityText: {
    color: 'white',
  },
  linearGradient: {
    width: 200,
    height: '100%',
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5,
    marginRight: 0,
  },
  buttonText: {
    fontSize: 34,
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    marginTop: '10%',
    color: '#ffffff',
    backgroundColor: 'transparent',
  },
  lineargradientcontainer: {
    width: 200,
    height: '100%',
  },
  linearGradientsmallText: {
    fontSize: 14,
    textAlign: 'center',
    color: 'white',
  },
  logoutcontainer: {
    width: '89%',
    height: 70,
  },
  logoutBtn: {
    width: '100%',
    height: '100%',
  },
  logoutText: {
    marginTop: 30,
    fontSize: 16,
    color: 'red',
    textAlign: 'center',
  },
  scrollview: {
    width: '100%',
    height: '100%',
    marginTop: 10,
    paddingRight: 30,
  },
});

export default Dashboard;
