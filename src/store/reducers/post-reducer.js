import {ActionsTypes} from '../../constants/actions-type';

const initialState = {
  allPosts: [],
  bookedPosts: []
}

export const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionsTypes.LOAD_POSTS:
      return {
        ...state,
        allPosts: action.payload,
        bookedPosts: action.payload.filter((post) => post.booked)
      }
    case ActionsTypes.TOGGLE_BOOKED:
      const allPosts = state.allPosts.map((post) => {
        if (post.id === action.payload) {
          post.booked = !post.booked;
        }
        return post;
      })
      return {
        ...state,
        allPosts,
        bookedPosts: allPosts.filter((post) => post.booked)
      }
    default:
      return state
  }
}
