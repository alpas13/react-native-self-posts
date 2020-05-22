import React from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';

export const MainScreen = ({navigation}) => {
  const onPostOpen = () => {
    navigation.navigate('Post');
  }
  return (
      <View style={styles.center}>
        <Text>
          MainScreen
        </Text>
        <Button onPress={onPostOpen} title='Go to first post'/>
      </View>
  );
};

MainScreen.navigationOptions = {
  headerTitle: 'My blog',
};

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});
