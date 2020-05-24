import React from 'react';
import {DATA} from '../../mock/mock';
import {HeaderButtons, Item} from "react-navigation-header-buttons";
import {AppHeaderIcon} from "../../components/AppHeaderIcon";
import {PostList} from "../../components/PostList";

export const BookedScreen = ({navigation}) => {
  const openPostHandler = (post) => {
    navigation.navigate('Post', {postId: post.id, booked: post.booked});
  }

  const data = DATA.filter((post) => post.booked);

  return <PostList data={data} onOpen={openPostHandler}/>;
};

BookedScreen.navigationOptions = ({navigation}) => ({
  headerTitle: 'Booked posts',
  headerLeft: () => <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
    <Item title='Menu' iconName='ios-menu' onPress={() => navigation.toggleDrawer()}/>
  </HeaderButtons>
});
