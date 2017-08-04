import React, { Component } from 'react';

// classbased component
class ClassComponent extends Component {
	constructor(props) {
		super(props);

		this.state = {
			msg: "this is the state message",
			dog: 1
		}
	}

	update(event) {
		this.setState({ msg: event.target.value });
	}

	render() {
		// return outputs with two more pair of tags needs 
		// parenthesis and wrap them with div parent node
		return (
			<div>
				<h1>I am Class-based Component</h1>
				{this.props.text2}
				<hr />
				<input type="text"
					onChange={this.update.bind(this)} /> 
				<h3>
					{this.state.msg} - {this.state.dog}
				</h3>
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
			{props.cat}
			<ClassComponent text2={props.txt}/>
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
