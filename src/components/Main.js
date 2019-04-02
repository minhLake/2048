import React from 'react';
import { connect } from 'react-redux';
// import { message } from 'antd';
import * as Action from '../action/';
import Block from './Block.js';
import { getBlockPos, getNewArrange, isGameOver, isWin ,initArrange ,sleep } from '../sources/Tools.js';
let _OnkeyUp = ()=>{}
class AppComponent extends React.Component {

	constructor(props) {
		super(props);
		let initMapArr = initArrange();
		this.props.dispatch(Action.initMap(initMapArr));
		this.props.dispatch(Action.youWin(false));
		this.props.dispatch(Action.gameOver(false));
		this.props.dispatch(Action.isRun(false));
		this.props.dispatch(Action.isStart(true));
	}
	componentDidMount() {
		const keyRange = (e) => {
			const currKey = e.keyCode || e.which || e.charCode,
		  			keyName = String.fromCharCode(currKey),
						keyArr = ['W','S','A','D'],
						keyArrMap = ['&','(','%','\''];
			if(keyArr.includes(keyName)) return keyName;
			else if(keyArrMap.includes(keyName)) return keyArr[keyArrMap.findIndex((a)=>a===keyName)];
			else return false;
		}
		_OnkeyUp = (e) => {
				let arrang,
						newArrange,
						randomArr;
		    if(keyRange(e)){
			    const start = setInterval(()=>{
			    	arrang = this.props.keyboard.data;
						newArrange = getNewArrange(arrang, keyRange(e));
				    if(newArrange){
					    switch(keyRange(e)) {
					    	case 'W': this.props.dispatch(Action.keyUp(newArrange));break;
					    	case 'S': this.props.dispatch(Action.keyDown(newArrange));break;
					    	case 'A': this.props.dispatch(Action.keyLeft(newArrange));break;
					    	case 'D': this.props.dispatch(Action.keyRight(newArrange));break;
					    	default: break;
					    }
					   	this.props.dispatch(Action.isRun(true));
				    }else{
				    	this.props.dispatch(Action.isRun(false));
				    	if(isGameOver(arrang)){this.props.dispatch(Action.gameOver(true));}
				    	if(isWin(arrang)){this.props.dispatch(Action.youWin(true));}
			    		randomArr = initArrange(arrang);
				    	this.props.dispatch(Action.initMap(randomArr));
				    }
				    if(!this.props.isRun.data){clearInterval(start)}
			    },50);
		 		}
		}
		document.body.addEventListener('keyup', _OnkeyUp, false);
	}

	componentWillUpdate(nextProps) {
		if(!!nextProps.isRun.data&&nextProps.isRun.data!==this.props.isRun.data) {document.body.removeEventListener('keyup', _OnkeyUp, false);}
		else if(!nextProps.isRun.data&&nextProps.isRun.data!==this.props.isRun.data){document.body.addEventListener('keyup', _OnkeyUp, false);}
	}

  	render() {
			const Cont = this.props.keyboard.data ? this.props.keyboard.data : 0;
	  	let Blocks = [];

	  	for (let index = 0; index < 16; index ++) {
	  		let data = {
		  			index: index,
		  			pos: getBlockPos(index),
		  			content: Cont[index]
	  			};
	  		if(Blocks.length >= 0) {
	  			Blocks.push(<Block key={index} data={data} />);
	  		}
	  	}
	    return (
	    	<section className="stage">
	    		<section className="block-sec">
	    			{Blocks}
	    		</section>
	    	</section>
	    );
  	}
}
const StateToPropsMap = (state)=>{
	return state;
}
export default connect(StateToPropsMap)(AppComponent);
