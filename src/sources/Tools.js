import Config from './config.js';
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

const getBlocksRange = () => {

};

const BlockNumberHandle = (()=>{
	let i = 3;
	return ()=>{

		if(i >= 2) i -- ;
		return i;
	}
})();

const initBlockRange = (range=[]) => {
	let Nmbers = range;
	let Nmber = null;
	let isRandom = true;
	return () => {
		if(Nmbers.length !== 0){
			do{
				isRandom = true;
				Nmber = Math.floor(Math.random() * 16);		
				Nmbers.forEach((value) => {
					if(value === Nmber) isRandom = false;
				});
			}while(!isRandom)
		}else{
			Nmber = Math.floor(Math.random() * 16);
		}
		return Nmber;
	}
};

const randomContent = (() => {

	let targetBlock = [];
	for(let idx = 0,initBlockNumber = BlockNumberHandle(); idx < initBlockNumber ; idx ++) {
		targetBlock.push(initBlockRange()())
	}

	return (index) => {
		let getContent = null;
		targetBlock.forEach((value,idx) => {
			if(value === index){
				getContent = Math.random() > 0.25 ? Config.content[0] : Config.content[1];
			}
		});
		return getContent
	}
})();

const initArrange = () => {
	let arrange = [];
	for (let i = 0 ; i < 16 ; i ++){
		arrange.push(randomContent(i));
	}
	return arrange;
};

const transform2Arr = (arrange) => {
	let count = 0;
	let arrange2Arr = [];
		
	for (let iy = 0 ; iy < 4 ; iy ++ ){
		arrange2Arr[iy] = [];
		for (let ix = 0 ; ix < 4 ; ix ++){
			if(arrange[count] === null){
				arrange[count] = 0;
			}
			arrange2Arr[iy][ix] = arrange[count];
			count ++ ;
		}
	}

	return arrange2Arr;
}

const calculateArrange = (arrange2Arr, type) => {

}

export default {
	getBlockPos,
	initArrange,
	transform2Arr,
	transform2Arr,
	calculateArrange
}