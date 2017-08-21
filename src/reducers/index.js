import { combineReducers } from 'redux';
import keyboard from './keyboard/';
import youWinning from './Win';
import gameOver from './GameOver';
import isRun from './Run/';
import isStart from './Start/';

const rootReducer = combineReducers({
	keyboard,
	youWinning,
	gameOver,
	isRun,
	isStart
});
export default rootReducer;
