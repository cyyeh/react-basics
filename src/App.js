import React, { Component } from 'react';

// classbased component
class ClassComponent extends Component {
	render() {
		// return outputs with two more pair of tags needs 
		// parenthesis and wrap them with div parent node
		return (
			<div>
				<h1>I am Class-based Component</h1>
				{this.props.text2}
			</div>
		);
	}
}

// stateless function component
const StatelessComponent = (props) => {
	// return outputs with two more pair of tags needs 
	// parenthesis and wrap them with div parent node
	return (
		<div>
			<h1>I am stateless function component</h1>
			{props.txt}
			<ClassComponent text2={props.txt}/>
			{props.cat}
		</div>
	);
}

StatelessComponent.propTypes = {
	txt: React.PropTypes.string,
	cat: React.PropTypes.number.isRequired
}

StatelessComponent.defaultProps = {
	cat: 100
}

export default StatelessComponent;
