import React from 'react';
import './App.css';

function Welcome(props) {
	return <h1 
		onClick={props.onClick} 
		id={props.id}>Hello, {props.name} ({props.val})
	</h1>;
}

class Form extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			formField1: '',
			formField2: ''
		};
		//this.handleChange = this.handleChange.bind(this);
	}

	handleChange = (event) => {
		this.setState({ [event.target.id]: event.target.value })
	}

	render() {
		return (
			<form>
				<input type="text" id="formField1" 
					    value={this.state.formField1} onChange={this.handleChange}
				/> 
				{this.state.formField1}
			</form>
		)
	}
}

class App extends React.Component {
	constructor() {
		super()
		this.state = {
			saraClicks: 0,
			cahalClicks: 0,
			editeClicks: 0
		};
	}

	handleClick = (event) => {
		this.setState({[event.target.id]: this.state[event.target.id]+1})
	}
	render() {
		return (
		<div>
			<Welcome onClick={this.handleClick} id={'saraClicks'} 
			         val={this.state.saraClicks} name="Sara" />
			<Welcome onClick={this.handleClick} id={'cahalClicks' } 
			         val={this.state.cahalClicks} name="Cahal" />
			<Welcome onClick={this.handleClick} id={'editeClicks'} 
			         val={this.state.editeClicks} name="Edite" />
			<Form />
		</div>
		);
	}
 }
	
export default App;