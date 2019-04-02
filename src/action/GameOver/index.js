import { GAME_OVER } from '../actionType';
import { Message } from 'antd';
const gameOver = (bool) => {
	if(bool) Message.warning('游戏结束！')
	return {
		type: GAME_OVER,
		data: bool
	}
}
export default gameOver;