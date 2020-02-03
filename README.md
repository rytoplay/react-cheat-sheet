


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
`ParentComponent.js`
```
render() {
	return (
		<SubComponent foo={5} />
	)
}

function SubComponent(props) {
	return (
		<h2>foo plus 3 = {3 + this.props.foo}</h2>
	)
}
```
#### click handlers
```
class ParentComponent extends React.Component {
	constructor() {
		super();
	}
	state = {
		myCounter: 0
	}
	clickHandler = (val) {
		this.setState({ myCounter: val });
	}
	render() {
		return (
			<ChildComponent clickHandler={clickHandler}
```
