import {ActionsTypes} from "../../constants/actions-type";
import * as FileSystem from 'expo-file-system';
import {DB} from "../../db";

export const Operation = {
  loadPosts: () => async (dispatch) => {
    try {
      const posts = await DB.getPosts();
      dispatch(ActionsCreator.loadPosts(posts));
    } catch (e) {
      console.log('Error: ', e);
    }
  },
  addPost: (post) => async (dispatch) => {
    const imgName = post.img.split('/').pop();
    const newPatch = FileSystem.documentDirectory + imgName;

    try {await FileSystem.moveAsync({
      from: post.img,
      to: newPatch,
    })} catch (e) {
      console.log('Error: ', e);
    }

    const payload = {...post, img: newPatch};

    payload.id = await DB.addPost(payload);

    dispatch(ActionsCreator.addPost(payload));
  },
  updatePost: (post) => async (dispatch) => {
    await DB.updatePost(post);
    dispatch(ActionsCreator.toggleBooked(post.id));
  },
  removePost: (id) => async (dispatch) => {
    await DB.removePost(id);
    dispatch(ActionsCreator.removePost(id));
  }
}

export const ActionsCreator = {
  loadPosts: (posts) => {
    return {
      type: ActionsTypes.LOAD_POSTS,
      payload: posts,
    }
  },
  toggleBooked: (id) => {
    return {
      type: ActionsTypes.TOGGLE_BOOKED,
      payload: id,
    }
  },
  removePost: (id) => {
    return {
      type: ActionsTypes.REMOVE_POST,
      payload: id,
    }
  },
  addPost: (payload) => {
    return {
      type: ActionsTypes.ADD_POST,
      payload,
    }
  }
}
