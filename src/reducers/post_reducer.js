
import { FETCH_POSTS } from '../actions/fetch_posts';
import { FETCH_POST } from '../actions/fetch_post';
import { DELETE_POST } from '../actions/delete_post'
import _ from 'lodash'


export default function (state = {}, action) {

  switch (action.type) {
    case DELETE_POST:
    return _.omit(state,action.payload)
    //  Checks if the state object have the given key and omits/delete from the state object
    // Notice that we use lodash to work better with the state object
    case FETCH_POST:
      const post = action.payload.data;
      const newState = { ...state };
      newState[post.id] = post;
      return newState;
    // Take all the existed posts and the new post 
    case FETCH_POSTS:
      return _.mapKeys(action.payload.data, "id")
    default:
      return state;
  }
}
