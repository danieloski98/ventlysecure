import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  ActivityIndicator,
  Animated,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import ProfileCard from '../components/Search/ProfileCard';

const Search = () => {
  const [loading, setLoading] = useState(false);
  const searchbox = new Animated.Value(-100);
  const searchboxan = Animated.timing(searchbox, {
    toValue: 30,
    duration: 500,
    useNativeDriver: false,
  });
  useEffect(() => {
    searchboxan.start(() => {
      setLoading(true);
    });
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => {
      console.log('timer cleared');
      clearTimeout(timer);
    };
  }, []);
  const spinner = (
    <View style={style.spinner}>
      <ActivityIndicator color="red" size={36} style={style.indicator} />
    </View>
  );

  return (
    <View style={style.parent}>
      <Animated.View
        style={[style.inputContainer, {transform: [{translateY: searchbox}]}]}>
        <TextInput
          placeholder="Search by email or username"
          placeholderTextColor="white"
          style={style.input}
        />
        <Icon name="search" size={24} color="white" style={style.icon} />
      </Animated.View>
      <View style={style.contentContainer}>
        {loading ? spinner : <ProfileCard />}
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  parent: {
    flex: 1,
    backgroundColor: '#121212',
  },
  inputContainer: {
    display: 'flex',
    flexDirection: 'row',
  },
  input: {
    width: '90%',
    marginLeft: 20,
    marginRight: 20,
    borderRadius: 5,
    backgroundColor: '#444444',
    position: 'absolute',
    color: 'white',
    paddingRight: 30,
    paddingLeft: 10,
  },
  icon: {
    zIndex: 2,
    marginLeft: '85%',
    marginTop: 10,
  },
  activity: {
    width: '100%',
    paddingLeft: 20,
    paddingRight: 20,
  },
  indicator: {
    backgroundColor: '#2D2C2C',
    padding: 10,
    borderRadius: 3,
  },
  spinner: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
  contentContainer: {
    marginTop: 40,
  },
});

export default Search;
