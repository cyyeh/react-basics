import React, { Component } from 'react';

// classbased component
class ClassComponent extends Component {
	render() {
		return (
			<h1>I am Class-based Component</h1>
		);
	}
}

// stateless function component
const StatelessComponent = () => {
	return (
		<div>
			<h1>I am stateless function component</h1>
			<ClassComponent />
		</div>
	);
}

export default StatelessComponent;
