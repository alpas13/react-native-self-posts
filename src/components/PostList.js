import React from 'react';
import {View, FlatList, StyleSheet} from "react-native";
import {Post} from "./Post";

export const PostList = ({data, onOpen}) => {
  return <View style={styles.wrapper}>
    <FlatList data={data} renderItem={({item, }) =>
        <Post post={item} onOpen={onOpen}/>} keyExtractor={(post) => post.id.toString()}
    />
  </View>
};

const styles = StyleSheet.create({
  wrapper: {
    padding: 10,
  }
});
