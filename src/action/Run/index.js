import { ON_RUN } from '../actionType';
const isRun = (bool) => {
	return {
		type: ON_RUN,
		data: bool
	}
}
export default isRun;