import { ON_RUN } from "../../action/actionType";
const isRunning = (state,action)=>{
	let data = action.data;
	switch (action.type) {
		case ON_RUN : return {
			...state,
			data
		};
		default : return {
			...state
		}
	}
}
export default isRunning;
