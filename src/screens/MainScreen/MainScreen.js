import React from 'react';
import {StyleSheet, View, Text, Button, FlatList} from 'react-native';
import {DATA} from '../../mock/mock';
import {Post} from "../../components/Post";

export const MainScreen = ({navigation}) => {
  const openPostHandler = (post) => {
    navigation.navigate('Post', {postId: post.id});
  }
  return (
      <View style={styles.wrapper}>
        <FlatList data={DATA} renderItem={({item, }) =>
            <Post post={item} onOpen={openPostHandler}/>} keyExtractor={(post) => post.id.toString()}
        />
      </View>
  );
};

MainScreen.navigationOptions = {
  headerTitle: 'My blog',
};

const styles = StyleSheet.create({
  wrapper: {
    padding: 10,
  }
});
