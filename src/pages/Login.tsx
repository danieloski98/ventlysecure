import React, {Suspense} from 'react';
import {
  View,
  ImageBackground,
  StyleSheet,
  Image,
  StatusBar,
  Text,
  SafeAreaView,
  ScrollView
} from 'react-native';

// components
const Form = React.lazy(() => import('../components/Login/form'));

export default function Login({navigation}: {navigation: any}) {
  return (
    <>
      <StatusBar backgroundColor="black" />
      <View style={style.parent}>
        <ImageBackground
          source={require('../assets/images/bk1.png')}
          style={style.imgBackground}
          resizeMode="stretch"
          width={100}>
          <Image
            source={require('../assets/images/logo2.png')}
            style={style.img}
            resizeMode="contain"
          />
        </ImageBackground>
        <View style={style.formView}>
          <Suspense fallback={<Text>Loading...</Text>}>
            <Form navigation={navigation} />
          </Suspense>
        </View>
      </View>
    </>
  );
}

const style = StyleSheet.create({
  parent: {
    flex: 1,
    display: 'flex',
  },
  view: {
    height: '100%',
    backgroundColor: 'white',
    display: 'flex',
    zIndex: 3,
  },
  imgBackground: {
    height: '100%',
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    zIndex: 4,
  },
  mask: {
    flex: 1,
    borderBottomRightRadius: 500,
  },
  img: {
    marginTop: '20%',
    opacity: 1,
    width: '30%',
    height: '50%',
  },
  formView: {
    flex: 1,
    backgroundColor: 'white',
  },
});
