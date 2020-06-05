import {ActionsTypes} from '../../constants/actions-type';

const initialState = {
  allPosts: [],
  bookedPosts: [],
  loading: true,
}

export const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionsTypes.LOAD_POSTS:
      return {
        ...state,
        allPosts: action.payload,
        bookedPosts: action.payload.filter((post) => post.booked),
        loading: false,
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
    case ActionsTypes.REMOVE_POST:
      return {
        ...state,
        allPosts: state.allPosts.filter((post) => post.id !== action.payload),
        bookedPosts: state.bookedPosts.filter((post) => post.id !== action.payload),
      }
    case ActionsTypes.ADD_POST:
      return {
        ...state,
        allPosts: [{ ...action.payload }, ...state.allPosts],
      }
    default:
      return state
  }
}
