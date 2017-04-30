import { createStore, compse} from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';

//import the root reducer
import rootReducer from './reducers/index';

//

import comments from './data/comments';
import posts from './data/posts';

//create an object for the default data
const defaultState = {
  posts,
  comments
 }
//root reducer allows us to interface with it also takes default state
 const store = createStore(rootReducer, defaultState);
//browser history keeps track of where were going
 export const history = syncHistoryWithStore(browserHistory, store);

 export default store;
