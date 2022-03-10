import { combineReducers } from 'redux';
import player from './playerReducer';
import ranking from './rankingReducer';

const rootReducer = combineReducers({ player, ranking });

export default rootReducer;
