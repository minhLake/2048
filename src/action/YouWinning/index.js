import { GAME_WINNING } from '../actionType';
import { Message } from 'antd';
const gameWin = (bool) => {
	if(bool) Message.success('游戏通关！')
	return {
		type: GAME_WINNING,
		data: bool
	}
}
export default gameWin;