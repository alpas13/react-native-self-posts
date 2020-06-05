import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Operation} from "../../store/actions/post-action";
import {HeaderButtons, Item} from "react-navigation-header-buttons";
import {AppHeaderIcon} from "../../components/AppHeaderIcon";
import {PostList} from "../../components/PostList";
import {ActivityIndicator, StyleSheet, View} from "react-native";
import {THEME} from "../../theme";

export const MainScreen = ({navigation}) => {
  const openPostHandler = (post) => {
    navigation.navigate('Post', {postId: post.id, booked: post.booked});
  }
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(Operation.loadPosts())
  }, [dispatch]);

  const allPosts = useSelector((state) => state.post.allPosts);
  const loading = useSelector((state) => state.post.loading);

  if (loading) {
    return <View style={styles.center}>
      <ActivityIndicator color={THEME.MAIN_COLOR}/>
    </View>
  }

  return <PostList data={allPosts} onOpen={openPostHandler}/>;
};

MainScreen.navigationOptions = ({navigation}) => ({
  headerTitle: 'My blog',
  headerRight: () => <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
    <Item title='Take photo' iconName='ios-camera' onPress={() => navigation.navigate('Create')}/>
  </HeaderButtons>,
  headerLeft: () => <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
    <Item title='Menu' iconName='ios-menu' onPress={() => navigation.toggleDrawer()}/>
  </HeaderButtons>
});

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});
