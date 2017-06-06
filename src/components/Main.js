require('normalize.css/normalize.css');
require('styles/css/App.css');

import React from 'react';
import Block from './Block.js';
import Tools from '../sources/Tools.js'

class AppComponent extends React.Component {
  render() {

  	let Blocks = [];

  	for (let index = 0; index < 16; index ++) {
  		let data = {
  			index: index,
  			pos: Tools.getBlockPos(index)
  		};
  		if(Blocks.length >= 0) {
  			Blocks.push(<Block data={data}/>);
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

AppComponent.defaultProps = {
};

export default AppComponent;
