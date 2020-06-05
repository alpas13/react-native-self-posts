import React, {useState} from 'react';
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';
import {View, Image, Button, StyleSheet, Alert} from "react-native";

const getCameraPermissions = async () => {
  const {status} = await Permissions.askAsync(
      Permissions.CAMERA,
      Permissions.CAMERA_ROLL
  );
  if (status !== 'granted') {
    Alert.alert('Camera permissions', 'Sorry, we need camera roll permissions to make this work!');
    return false;
  }
  return true;
};

export const PhotoPicker = (props) => {
  const [image, setImageState] = useState('');

  const takePhoto = async () => {
    const hasPermissions = await getCameraPermissions();

    if (!hasPermissions) {
      return null;
    }

    const img = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [16, 9],
      quality: 0.7,
    });

    const cleanImagePicker = () => {
      setImageState('');
    }

    setImageState(img.uri);
    props.onPick(img.uri, cleanImagePicker.bind(this));
  }

  return (
      <View style={styles.wrapper}>
        {!!image && <Image style={styles.image} source={{uri: image}}/>}
        <Button style={styles.button} title={'Pick an image from camera roll'} onPress={takePhoto}/>
      </View>)
};

const styles = StyleSheet.create({
  wrapper: {
    marginBottom: 10,
  },
  image: {
    width: '100%',
    height: 200,
    marginVertical: 10,
  },
  button: {
    marginTop: 20,
  }
});
