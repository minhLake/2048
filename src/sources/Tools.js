const getBlockPos = (index) => {
	switch(index) {
		case 0:
		case 1:
		case 2:
		case 3:
			return {top: 112.5 * 0 , left: 112.5 * index}
			break;
		case 4:
		case 5:
		case 6:
		case 7:
			return {top: 112.5 * 1 , left: 112.5 * (index % 4)}
			break;
		case 8:
		case 9:
		case 10:
		case 11:
			return {top: 112.5 * 2 , left: 112.5 * (index % 8)}
			break;
		case 12:
		case 13:
		case 14:
		case 15:
			return {top: 112.5 * 3 , left: 112.5 * (index % 12)}
			break;
		default:break;
	}
}

export default {
	getBlockPos
}