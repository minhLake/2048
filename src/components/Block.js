import React from 'react';

class Block extends React.Component {
	render() {
		const style = {
			top: this.props.data.pos.top,
			left: this.props.data.pos.left
		}
		return (
			<figure style={style} className="block">
				<figcaption className="block-title">
					
				</figcaption>
			</figure>
		);
	}
}

export default Block;