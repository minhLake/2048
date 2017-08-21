import { GAME_OVER } from "../../action/actionType";
const gameOver = (state,action)=>{
	let data = action.data;
	switch (action.type) {
		case GAME_OVER : return {
			...state,
			data
		};
		default : return {
			...state
		}
	}
}
export default gameOver;
