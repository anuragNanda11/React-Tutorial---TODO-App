var React = require('react');
var ReactDOM = require('react-dom');
var ReactFire = require('reactfire');
var Firebase = require('firebase');
var Header = require('./header');
var List = require('./list');

 
 // Initialize Firebase
 var config = {
	apiKey: "AIzaSyAG0GLSRMi29CH7XStZ5i4KhppJt5Pel0c",
	//authDomain: "todos-aee5d.firebaseapp.com",
	databaseURL: "http://todos-aee5d.firebaseio.com",
	//storageBucket: "todos-aee5d.appspot.com",
 };
 Firebase.initializeApp(config);

var App = React.createClass({
	mixins: [ ReactFire ],

	getInitialState: function() {
    	return {
      		items: [],
    	};
  },
	
	componentWillMount: function() {
  		var ref = Firebase.database().ref("items");
  		this.bindAsArray(ref, "items");
  		ref.on('value', this.handleDataLoaded);
	},

	render: function() {
		return <div className = "row panel panel-default">
			<div className = "col-md-8 col-md-offset-2">
				<h2 className="text-center">
					To-Do List
				</h2>
			</div>
			<Header itemStore={this.firebaseRefs['items']} />
			<div  
			className={"content " + (this.state.loaded ? 'loaded': '')}>
				<List items={this.state.items}/>
			</div>
		</div> 
	},

	handleDataLoaded: function() {
		this.setState({
			loaded: true
		});
	}

});



var element = React.createElement(App);

ReactDOM.render(element,  document.querySelector('.container'));