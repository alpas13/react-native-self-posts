import {ActionsTypes} from "../../constants/actions-type";
import {DATA} from "../../mock/mock";

export const ActionsCreator = {
  loadPosts: () => {
    return {
      type: ActionsTypes.LOAD_POSTS,
      payload: DATA
    }
  },
  toggleBooked: (id) => {
    return {
      type: ActionsTypes.TOGGLE_BOOKED,
      payload: id,
    }
  }
}
