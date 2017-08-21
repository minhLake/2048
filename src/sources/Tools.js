import Config from './config.js';

const getBlockPos = (index) => {
	switch(index) {
		case 0:
		case 1:
		case 2:
		case 3:
			return {top: 112.5 * 0 , left: 112.5 * index}
		case 4:
		case 5:
		case 6:
		case 7:
			return {top: 112.5 * 1 , left: 112.5 * (index % 4)}
		case 8:
		case 9:
		case 10:
		case 11:
			return {top: 112.5 * 2 , left: 112.5 * (index % 8)}
		case 12:
		case 13:
		case 14:
		case 15:
			return {top: 112.5 * 3 , left: 112.5 * (index % 12)}
		default:break;
	}
}

const initArrange = (arrange = Config.initMap) => {

		let Rdm = null,
				RdmIsOk = null,
				limit = arrange !== Config.initMap ? 1 : 2,
				HoldOn = arrange.find((a)=>a===0)===0 ? true : false;
		if(HoldOn){
			for(let i = 0 ; i < limit ; i ++) {
				do{
					Rdm = Math.floor(Math.random() * 16);
					if(arrange[Rdm] === 0) {
						RdmIsOk = true;
						arrange[Rdm] = Math.random() > 0.25 ? 1 : 2;
					}else{
						RdmIsOk = false;
					}
				}while (!RdmIsOk)
			}
		}

		return arrange;
	

};

const transform2Arr = (arrange,type) => {
	let newArrange = [];
	let count = 0;
		
	for(let i = 0 ; i < 4 ; i ++){
		newArrange[i] = [];
		for(let multiple = 0, gap = 4; multiple < 4; multiple ++) {
			if(type === 'TransposeMatrix') {
				if(arrange[i + gap * multiple] === null){
					arrange[i + gap * multiple] = 0;
				}
				newArrange[i][multiple] = arrange[i + gap * multiple];
			}
			else if(type === 'Matrix') {
				if(arrange[count] === null){
					arrange[count] = 0;
				}
				newArrange[i][multiple] = arrange[count];
				count ++;
			}
		}
		
	}

	return newArrange;
};

const revertArr = (arrange, type = 1) => {
	let count = 0;
	let arrangeArr = [];
		
	for (let iy = 0 ; iy < 4 ; iy ++ ){
		for (let ix = 0 ; ix < 4 ; ix ++){

			if(type === 1){

				arrangeArr[count] = arrange[iy][ix];
				count ++ ;

			}
			else if(type === -1){
				arrangeArr[count] = arrange[ix][iy];
				count ++ ;
			}
		}
	}
	return arrangeArr;
};

const calculateArrange = (matrix , type) => {
	let isStop = true;
	for(let iy = 0 ; iy < 4 ; iy ++){
		for(let ix = 0 ; ix < 4 ; ix ++){
			if(type === 'Left'){
				if(ix !== 3){

					if(matrix[iy][ix] === 0 && matrix[iy][ix + 1] !== 0){
						matrix[iy][ix] = matrix[iy][ix + 1];
						matrix[iy][ix + 1] = 0;
						isStop=false;
					}
					if(matrix[iy][ix] !== 0 && matrix[iy][ix] === matrix[iy][ix + 1]){
						matrix[iy][ix] = matrix[iy][ix] + 1;
						matrix[iy][ix + 1] = 0;
						isStop=false;
					}
				
				}else if(ix === 3){

				}
				
			}else if(type === 'Right'){
				if(ix !== 3){
					if(matrix[iy][3 - ix] === 0 && matrix[iy][3- ix - 1 ] !== 0){
						matrix[iy][3 - ix] = matrix[iy][3 - ix - 1];
						matrix[iy][3 - ix - 1] = 0;
						isStop=false;
					}
					else if(matrix[iy][3 - ix] !== 0 && matrix[iy][3 - ix] === matrix[iy][3 - ix - 1]){
						matrix[iy][3 - ix] = matrix[iy][3 - ix] + 1;
						matrix[iy][3 - ix - 1] = 0;
						isStop=false;
					}
				
				}else if(ix === 3){

				}
				
			}
		}
	}
	if(isStop === true){
		return false;
	}
	else {
		return matrix;
	}
};

const getNewArrange = (arrange, type) => {
	let newArrange = [];
	switch(type) {
		case 'W':
			newArrange = transform2Arr(arrange , 'TransposeMatrix');
			newArrange = calculateArrange(newArrange, 'Left');
			if(newArrange) {return revertArr(newArrange,-1);}
			else {return false;}
		case 'S':
			newArrange = transform2Arr(arrange , 'TransposeMatrix');
			newArrange = calculateArrange(newArrange, 'Right');
			if(newArrange) {return revertArr(newArrange,-1);}
			else {return false;}
		case 'A':
			newArrange = transform2Arr(arrange, 'Matrix');
			newArrange = calculateArrange(newArrange, 'Left');
			if(newArrange) {return revertArr(newArrange);}
			else {return false;}
		case 'D':
			newArrange = transform2Arr(arrange, 'Matrix');
			newArrange = calculateArrange(newArrange, 'Right');
			if(newArrange) {return revertArr(newArrange);}
			else {return false;}
		default: return false;
	}

	// return newArrange;
};
const sleep =(fn,time) => {
  const timeout = (ms) => {
  	return new Promise((resolve, reject) => {
	  	setTimeout(resolve,ms);
	  });
  }
  timeout(time).then(fn);
};

const isGameOver = (testArrange) => {
	let isGameOver = [];
	let i = 0;
	const direction = ['W','S','A','D'];
	direction.forEach((value) => {
		if(!getNewArrange(testArrange, value)){
			isGameOver[i] = true;
			i++;
		}
	});
	if (isGameOver.length === 4) {
		return true;
	}else{
		return false;
	}
};

const isWin = (testArrange) => {
	let isWin = testArrange.find((a)=>a===2048) === 2048 ? true : false;

	return isWin;
};

export {
	getBlockPos,
	initArrange,
	getNewArrange,
	sleep,
	isGameOver,
	isWin
}