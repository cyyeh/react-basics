import React, { Component } from 'react';

// classbased component
class App extends Component {
	render() {
		// return outputs with two more pair of tags needs 
		// parenthesis and wrap them with div parent node
		return (
			<div>
				<h1>I am Class-based Component</h1>
				<h3>This is another statement.</h3>
			</div>
		);
	}
}

export default App;
