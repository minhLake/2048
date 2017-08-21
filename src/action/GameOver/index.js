import { GAME_OVER } from '../actionType';
const gameOver = (bool) => {
	return {
		type: GAME_OVER,
		data: bool
	}
}
export default gameOver;