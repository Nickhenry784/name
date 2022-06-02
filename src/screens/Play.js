import { 
  View, 
  StyleSheet, 
  TouchableOpacity,
  Text, Dimensions, 
  ImageBackground,
  TextInput, 
  Image, 
  Alert  } from "react-native";
import React, {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import { images } from "../assets";

const windowWidth = Dimensions.get('screen').width;
const windowHeight = Dimensions.get('screen').height;
const fontData = ['Amsterdam', 'Angelia Davitson', 'Creattion Demo', 'Gisella Jane', 'High Spirited', 'Mastrih', 'SignaturexDemoRegular', 'The Checkmate'];

const Play = () => {
  const navigation = useNavigation();
  const [text, onChangeText] = useState("Name");
  const [index, setIndex] = useState(0);

  const onClickBackButton = () => {
    navigation.goBack();
  }

  const onClickBackFont = () => {
    if(index === 7){
      setIndex(0);
    }else{
      setIndex(index + 1);
    }
  }

  const onClickNextFont = () => {
    if(index === 0){
      setIndex(7);
    }else{
      setIndex(index - 1);
    }
  }


  return (
    <ImageBackground style={appStyle.homeView} source={images.background}>
      <View style={appStyle.appBar}>
        <Image source={images.logoinapp} style={appStyle.logoImage} />
        <TextInput
          style={appStyle.input}
          onChangeText={onChangeText}
          value={text}
        />
      </View>
      <View style={appStyle.centerName}>
        <TouchableOpacity onPress={onClickBackFont}>
          <Image source={images.backBtn} style={appStyle.buyImage} />
        </TouchableOpacity>
        <Text style={textLabel(index)}>{text}</Text>
        <TouchableOpacity onPress={onClickNextFont}>
          <Image source={images.next} style={appStyle.buyImage} />
        </TouchableOpacity>
      </View>
      <View style={appStyle.bottomView}>
        <TouchableOpacity onPress={onClickBackButton}>
          <Image source={images.back} style={appStyle.createButton} />
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

export const textLabel = (ind) => StyleSheet.create({
  fontSize: windowWidth > 640 ? 80 : 60,
  fontFamily: fontData[ind],
});


export const appStyle = StyleSheet.create({
  homeView: {
    flex: 1,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
    resizeMode: 'cover',
    paddingTop:20,
  },
  input: {
    height: 60,
    width: '80%',
    backgroundColor: 'white',
    borderWidth: 1,
    borderRadius: 8,
    fontSize: windowWidth > 640 ? 30 : 25,
    padding: 10,
  },
  centerName: {
    flex: 0.3,
    width: '100%',
    paddingTop: 10,
    paddingHorizontal:10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  logoImage: {
    width: windowWidth * 0.3,
    height: windowWidth * 0.3,
    resizeMode: 'cover',
    marginBottom:10,
  },
  appBar: {
    flex: 0.3,
    width: '100%',
    paddingTop: 10,
    paddingHorizontal: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  turnView: {
    flexDirection: 'row',
    width: windowWidth * 0.15,
    marginRight: 10,
    height: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  centerImage: {
    width: windowWidth * 0.4,
    height: windowWidth * 0.4,
    resizeMode: 'cover',
    alignItems: 'center',
    justifyContent: 'center',
  },
  scoreStyle: {
    width: windowWidth * 0.1,
    height: windowWidth * 0.1,
    resizeMode: 'contain',
    margin: 8,
  },
  turnText: {
    fontSize: windowWidth > 640 ? 30 : 25,
    color: 'blue',
    fontWeight: 'bold',
  },
  tutorialText: {
    marginVertical: 10,
    fontSize: windowWidth > 640 ? 25 : 18,
    color: 'blue',
    fontWeight: 'bold',
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
  },
  backStyle: {
    width: windowWidth * 0.2,
    height: windowWidth * 0.2,
    resizeMode: 'contain',
  },
});

export default Play;