import React from 'react';
import Config from '../sources/config.js';

class Block extends React.Component {
	render() {
		const style = {
			top: this.props.data.pos.top,
			left: this.props.data.pos.left
		}
		let showContent = null;
		if(this.props.data.content !== 0) {
			showContent = Config.content[this.props.data.content - 1];
		}else{
			showContent = '';
		}

		let blockClass = 'block';
		Config.content.forEach((value,index) => {
			if(index === this.props.data.content-1) {
				blockClass += ' block-' + index;
			}
		})

		return (
			<figure style={style} className={blockClass}>
				<figcaption className="block-title">
					{showContent}
				</figcaption>
			</figure>
		);
	}
}

export default Block;