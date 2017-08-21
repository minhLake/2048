import { GAME_WINNING } from "../../action/actionType";
const YouWin = (state,action)=>{
	let data = action.data;
	switch (action.type) {
		case GAME_WINNING : return {
			...state,
			data
		};
		default : return {
			...state
		}
	}
}
export default YouWin;
