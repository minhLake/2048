require('normalize.css/normalize.css');
require('styles/css/App.css');

import React from 'react';
import ReactDOM from 'react-dom';
import Block from './Block.js';
import Tools from '../sources/Tools.js';

class AppComponent extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			arrange : Tools.initArrange()
		};
	}

	componentDidMount() {

		document.onkeyup = (e) => {
			let currKey = null,
			keyName = null;

		    e = e || event;　　　
		    currKey = e.keyCode || e.which || e.charCode;　　　　
		    keyName = String.fromCharCode(currKey);

		    switch(keyName) {
		    	case 'W':
		    		// alert(Tools.transform2Arr(this.state.arrange));
		    		console.log(Tools.transform2Arr(this.state.arrange));
		    		break;
		    	case 'S':
		    		
		    		break;		    	
		    	case 'A':
		    		
		    		break;		    	
		    	case 'D':
		    		
		    		break;
		    }
		}


	}

  	render() {

	  	let Blocks = [];

	  	for (let index = 0; index < 16; index ++) {
	  		let data = {
		  			index: index,
		  			pos: Tools.getBlockPos(index),
		  			content: this.state.arrange[index]
	  			},
	  			blockRef = 'Block' + index;
	  		if(Blocks.length >= 0) {
	  			Blocks.push(<Block ref={blockRef} data={data} />);
	  		}
	  	}

	    return (
	    	<section className="stage" ref="stage">
	    		<section className="block-sec">
	    			{Blocks}
	    		</section>
	    	</section>
	    );
  	}
}

AppComponent.defaultProps = {
};

export default AppComponent;
