import { INIT_MAP, KEY_BOARD_UP, KEY_BOARD_DOWN, KEY_BOARD_LEFT, KEY_BOARD_RIGHT } from "../../action/actionType";
const keyboard = (state,action)=>{
	let data = action.data;
	switch (action.type) {
		case INIT_MAP : return {
			...state,
			data
		};
		case KEY_BOARD_UP : return {
			...state,
			data
		};
		case KEY_BOARD_DOWN : return {
			...state,
			data
		};
		case KEY_BOARD_LEFT : return {
			...state,
			data
		};
		case KEY_BOARD_RIGHT : return {
			...state,
			data
		};
		default : return {
			...state
		}
	}
}
export default keyboard;
