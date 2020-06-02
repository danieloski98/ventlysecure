import React, {Component, createRef} from 'react';
import {
  Text,
  View,
  Linking,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
  Switch,
} from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner';
import {RNCamera} from 'react-native-camera';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default class scanner extends Component {
  scanner = createRef();
  state = {
    tourchOn: false,
    reactivate: true,
  };
  onSuccess = (e) => {
    console.log(e);
    this.setState({reactivate: false});
    console.log(this.state.reactivate);
  };
  render() {
    const render = (
      <View style={style.bottom}>
        <View style={style.container}>
          <View style={style.iconholder}>
            <TouchableOpacity
              onPress={() => this.setState({tourchOn: !this.state.tourchOn})}>
              <Icon
                name={this.state.tourchOn ? 'flashlight-off' : 'flashlight'}
                color={this.state.tourchOn ? 'white' : '#636e72'}
                size={30}
              />
            </TouchableOpacity>
          </View>
          {/* <View style={style.iconholder}>
            <TouchableOpacity
              onPress={() => {
                this.scanner.reactivate();
              }}>
              <Icon name="refresh" color="white" size={30} />
            </TouchableOpacity>
          </View> */}
        </View>
      </View>
    );
    return (
      <View style={style.parent}>
        <StatusBar backgroundColor="#121212" />
        <QRCodeScanner
          ref={(node) => {
            this.scanner = node;
          }}
          fadeIn={true}
          cameraTimeout={2000}
          cameraTimeoutView={<Text>The camera timed out</Text>}
          onRead={this.onSuccess}
          reactivate={true}
          showMarker={true}
          cameraStyle={style.cameraStyle}
          bottomContent={render}
          cameraProps={{
            autoFocus: 'on',
            useCamera2Api: true,
            videoStabilizationMode: 'auto',
          }}
          flashMode={
            this.state.tourchOn
              ? RNCamera.Constants.FlashMode.torch
              : RNCamera.Constants.FlashMode.off
          }
        />
        {/* {render} */}
      </View>
    );
  }
}

const style = StyleSheet.create({
  parent: {
    flex: 1,
    backgroundColor: '#121212',
  },
  bottom: {
    height: '30%',
    width: '100%',
    backgroundColor: '#121212',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  cameraStyle: {
    width: '100%',
    height: '100%',
  },
  container: {
    paddingTop: 10,
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  icons: {
    marginRight: 50,
  },
  iconholder: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#2A2A2A',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    // marginRight: 20,
  },
});
