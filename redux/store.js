import {createStore} from 'redux';
import {Auth} from './reducer';
const storeState = createStore(Auth);
export default storeState;
  