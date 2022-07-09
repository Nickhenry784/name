import { 
  View, 
  StyleSheet, 
  TouchableOpacity,
  Text, Dimensions, 
  ImageBackground,
  FlatList,
  TextInput, 
  Image, 
  Alert} from "react-native";
import React, {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {decrement} from '../redux/pointSlice';
import {useDispatch, useSelector} from 'react-redux';
import { images } from "../assets";
import { ScrollView } from "react-native-gesture-handler";
import { useClipboard } from "@react-native-clipboard/clipboard";

const windowWidth = Dimensions.get('screen').width;
const windowHeight = Dimensions.get('screen').height;

const fontData = ['Amsterdam', 'Angelia Davitson', 'Creattion Demo', 'Gisella Jane', 'High Spirited', 'Mastrih', 'SignaturexDemoRegular', 'The Checkmate', 'FontsFree-Net-KanvasBold_PERSONAL_USE_ONLY', 'PressStart2P-Regular', 'Roboto-Black', 'Roboto-BlackItalic'];

const Home = () => {
  const navigation = useNavigation();

  const points = useSelector(state => state.points);
  const dispatch = useDispatch();
  const [text, onChangeText] = useState("Name");
  const [show, setShow] = useState(false);


  useEffect(() => {
    console.log(points);
  },[]);

  const onClickStartButton = () => {
    if (points.value === 0) {
      Alert.alert('Please buy more turn');
      return false;
    }
    dispatch(decrement());
    setShow(true);
  }

  const onClickSwapButton = () => {
    
  }


  const onClickTurnButton = () => {
    navigation.navigate("BUY");
  }


  return (
    <ImageBackground style={appStyle.homeView} source={images.background}>
      <ScrollView contentContainerStyle={{alignItems: 'center'}}>
      <View style={appStyle.appBar}>
        <TouchableOpacity onPress={onClickTurnButton}>
          <View style={appStyle.turnView}>
            <Image source={images.button} style={appStyle.buyImage} />
            <Text style={appStyle.turnText}>{points.value}</Text>
          </View>
        </TouchableOpacity>
      </View>
      <Text style={appStyle.labelText}>Name With Special Characters</Text>
      <TextInput
        style={appStyle.input}
        onChangeText={onChangeText}
        onChange={() => setShow(false)}
        value={text}
      />
      <TouchableOpacity onPress={onClickStartButton}>
        <Image source={images.swap} style={appStyle.createButton} />
      </TouchableOpacity>
      {show && <FlatList 
        data={fontData}
        scrollEnabled={false}
        renderItem={({item, index}) => (
          <View key={index} style={appStyle.fontView}>
            <TouchableOpacity onPress={() => useClipboard.setString(text)}>
              <Image source={images.copy} style={appStyle.backStyle} />
            </TouchableOpacity>
            <View style={appStyle.textView}>
              <Text style={{fontFamily: item, fontSize: 25, color: 'white',}}>{text}</Text>
            </View>
          </View>
        )}
      />}
      </ScrollView>
    </ImageBackground>
  );
};


export const appStyle = StyleSheet.create({
  homeView: {
    flex: 1,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'flex-start',
    resizeMode: 'cover',
  },
  textView: {
    width: windowWidth * 0.6,
    height: windowHeight * 0.1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#5b748a',
  },
  input: {
    height: windowHeight * 0.1,
    width: windowWidth * 0.6,
    backgroundColor: '#5b748a',
    margin: 10,
    textAlign: 'center',
    color: 'white',
    fontSize: 20,
  },
  appBar: {
    flex: 0.1,
    width: '100%',
    paddingTop: 10,
    paddingHorizontal: 10,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  turnView: {
    flexDirection: 'row',
    width: windowWidth * 0.15,
    marginRight: 10,
    height: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  fontView: {
    width: windowWidth * 0.8,
    height: windowHeight * 0.15,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginVertical: 10,
  },
  scoreStyle: {
    width: windowWidth * 0.1,
    height: windowWidth * 0.1,
    resizeMode: 'contain',
    margin: 8,
  },
  turnText: {
    fontSize: 30,
    fontFamily: 'Roboto-Black',
    color: 'white',
  },
  tutorialText: {
    fontSize: 18,
    color: 'white',
  },
  labelText: {
    fontSize: 40,
    color: 'white',
    textAlign: 'center',
    fontFamily: 'FontsFree-Net-KanvasBold_PERSONAL_USE_ONLY',
  },
  buyImage: {
    width: windowWidth * 0.1,
    height: windowWidth * 0.1,
    resizeMode: 'contain',
  },
  centerView: {
    marginTop: 20,
    flex: 0.85,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  bottomView: {
    flex: 0.2,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  createButton: {
    width: windowWidth * 0.3,
    height: windowHeight * 0.1,
    resizeMode: 'contain',
    marginVertical: 20,
  },
  backStyle: {
    width: windowWidth * 0.1,
    height: windowWidth * 0.1,
    resizeMode: 'contain',
  },
});

export default Home;