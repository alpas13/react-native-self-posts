import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  Image,
  Button,
  Alert,
  Platform
} from 'react-native';
import {DATA} from "../../mock/mock";
import {HeaderButtons, Item} from "react-navigation-header-buttons";
import {AppHeaderIcon} from "../../components/AppHeaderIcon";

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
        <View style={styles.buttonWrap}>
          <Button onPress={removePostHandler} title={'Remove'} color={'red'}/>
        </View>
      </ScrollView>
  );
};

PostScreen.navigationOptions = ({navigation}) => {
  const postId = navigation.getParam('postId');
  const booked = navigation.getParam('booked');
  const iconName = booked ? 'ios-star' : 'ios-star-outline';

  return {
    headerTitle: `Post ${postId}`,
    headerRight: () => <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
      <Item title="Booked" iconName={iconName} onPress={() => alert('Booked')}/>
    </HeaderButtons>
  }
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
  },
  buttonWrap: {
    width: Platform.OS === 'android' ? '50%' : '100%',
    marginLeft: 'auto',
    marginRight: 'auto',
  }
});
