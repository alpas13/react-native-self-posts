import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

export const PostScreen = (props) => {
  return (
      <View style={styles.center}>
        <Text>
          PostScreen
        </Text>
      </View>
  );
};

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: center,
    alignItems: center
  }
});