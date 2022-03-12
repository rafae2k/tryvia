import { combineReducers } from 'redux';
import player from './playerReducer';
import ranking from './rankingReducer';
import token from './token';
import questions from './triviaApi';

const rootReducer = combineReducers({ player, ranking, token, questions });

export default rootReducer;
