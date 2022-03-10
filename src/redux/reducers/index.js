import { combineReducers } from 'redux';
import player from './playerReducer';
import ranking from './rankingReducer';
import token from './token';

const rootReducer = combineReducers({ player, ranking, token });

export default rootReducer;
