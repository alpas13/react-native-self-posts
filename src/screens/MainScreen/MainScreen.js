import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {ActionsCreator} from "../../store/actions/post-action";
import {HeaderButtons, Item} from "react-navigation-header-buttons";
import {AppHeaderIcon} from "../../components/AppHeaderIcon";
import {PostList} from "../../components/PostList";

export const MainScreen = ({navigation}) => {
  const openPostHandler = (post) => {
    navigation.navigate('Post', {postId: post.id, booked: post.booked});
  }
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(ActionsCreator.loadPosts())
  }, [dispatch]);

  const allPosts = useSelector(state => state.post.allPosts);

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
