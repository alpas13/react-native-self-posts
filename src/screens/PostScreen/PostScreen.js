import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  Image,
  Button,
  Alert
} from 'react-native';
import {DATA} from "../../mock/mock";

export const PostScreen = ({navigation}) => {
  const postId = navigation.getParam('postId');

  const post = DATA.find((item) => item.id === postId);

  const removePostHandler = () => {
    Alert.alert(
        "Remove post",
        "Are you sure, that you want this post remove?",
        [
          {
            text: "Cancel",
            style: "cancel"
          },
          {
            text: "Remove", onPress: () => {
            }, style: 'destructive'
          }
        ],
        {cancelable: false}
    );
  };

  return (
      <ScrollView>
        <View>
          <Image style={styles.image} source={{uri: post.img}}/>
        </View>
        <View style={styles.textWrap}>
          <Text style={styles.text}>
            {post.text}
          </Text>
        </View>
        <Button onPress={removePostHandler} title={'Remove'} color={'red'}/>
      </ScrollView>
  );
};

PostScreen.navigationOptions = ({navigation}) => {
  const postId = navigation.getParam('postId');
  return {headerTitle: `Post ${postId}`}
};

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 200,
  },
  textWrap: {
    padding: 10,
  },
  text: {
    fontFamily: 'openSans-regular',
  }
});
