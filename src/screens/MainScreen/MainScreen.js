import React from 'react';
import {DATA} from '../../mock/mock';
import {HeaderButtons, Item} from "react-navigation-header-buttons";
import {AppHeaderIcon} from "../../components/AppHeaderIcon";
import {PostList} from "../../components/PostList";

export const MainScreen = ({navigation}) => {
  const openPostHandler = (post) => {
    navigation.navigate('Post', {postId: post.id, booked: post.booked});
  }
  return <PostList data={DATA} onOpen={openPostHandler}/>;
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
