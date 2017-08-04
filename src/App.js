import React, { Component } from 'react';

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			a: ''
		}
		this.update = this.update.bind(this);
	} 

	update() {
		this.setState({
			a: this.a.refs.input.value,
			b: this.refs.b.value
		});
	}

	render() {
		return (
			<div>
				<Input
					ref={ component => this.a = component}
					update={this.update}
				/> {this.state.a}
				<hr />
				<input 
					ref="b"
					type="text"
					onChange={this.update}
				/> {this.state.b}
			</div>
		);
	}
}

class Input extends Component {
	render() {
		return (
			<div>
				<input ref="input" type="text" onChange={this.props.update} />
			</div>
		);
	}
}

export default App;
