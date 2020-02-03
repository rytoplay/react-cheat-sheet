


#### Create a new project
 `npx create-react-app myAppName`
#### New full component
```  
import  React  from  'react';

class  App  extends  React.Component {
	constructor(props) {
	    super(props);
	}
	state = {
		propertyName: initialValue || ''
	};
	render() {
		return (
			<h1>my jsx here</h1>
		)
	};
}
export default App;
```

#### functional subcomponents
```
import  React  from  'react';
import  './App.css';

function  Welcome(props) {
	return  <h1>Hello, {props.name}</h1>;
}

function  App() {
	return (
		<div>
			<Welcome  name="Sara"  />
			<Welcome  name="Cahal"  />
			<Welcome  name="Edite"  />
		</div>
	);
}

export  default  App;
```
#### click handlers
```
import React from 'react';
import './App.css';

function Welcome(props) {
	return <h1 
		onClick={props.onClick} 
		id={props.id}>Hello, {props.name} ({props.val})
	</h1>;
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
		</div>
		);
	}
 }
	
export default App;
```
#### Forms
_Forms in React are interesting because the values have to be saved up to the state onChange_

 1. _Declare a state property for every element in the form_
 2. Make sure every element contains an id="stateName", a value={this.state.stateName}, and
 onChange={this.handleChange(event)}
 3. add the handleChange function to put the value of any form element into its state field._

```
class Form extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			formField1: '',
			formField2: ''
		};
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(event) {
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
```
