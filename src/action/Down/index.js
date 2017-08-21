import { KEY_BOARD_DOWN } from '../actionType';
const KeyDown = (arrange) => {
	return {
		type: KEY_BOARD_DOWN,
		data: arrange
	}
}
export default KeyDown;