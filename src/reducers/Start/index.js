import { KEY_BOARD_ON } from "../../action/actionType";
const isStart = (state,action)=>{
	let data = action.data;
	switch (action.type) {
		case KEY_BOARD_ON : return {
			...state,
			data
		};
		default : return {
			...state
		}
	}
}
export default isStart;
