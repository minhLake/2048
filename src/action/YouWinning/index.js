import { GAME_WINNING } from '../actionType';
const gameWin = (bool) => {
	return {
		type: GAME_WINNING,
		data: bool
	}
}
export default gameWin;