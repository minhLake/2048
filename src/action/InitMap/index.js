import { INIT_MAP } from '../actionType';
const InitMap = (arrang) => {
	return {
		type: INIT_MAP,
		data: arrang
	}
}
export default InitMap;