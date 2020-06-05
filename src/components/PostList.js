import React from 'react';
import {View, FlatList, StyleSheet, Text} from "react-native";
import {Post} from "./Post";
import {THEME} from "../theme";

export const PostList = ({data = [], onOpen}) => {
  if (data.length) {
    return <View style={styles.wrapper}>
      <FlatList data={data} renderItem={({item, }) =>
          <Post post={item} onOpen={onOpen}/>} keyExtractor={(post) => post.id.toString()}
      />
    </View>
  } else {
    return <View style={styles.textWrapper}>
      <Text style={styles.text}>You don't add any post yet?</Text>
    </View>
  }
};

const styles = StyleSheet.create({
  wrapper: {
    padding: 10,
  },
  textWrapper: {
    flex: 1,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontFamily: 'openSans-bold',
    fontSize: 20,
    color: THEME.MAIN_COLOR,
  }
});
