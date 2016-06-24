var React =  require('react');
var ListItem = require('./list-item');

module.exports = React.createClass({
	render: function() {
		return <ul>
			{this.renderList()}
		</ul>
	},

	renderList: function() {
		if(this.props.items && this.props.items.length===0) {
			return <h4> 
				Add a todo to get started
			</h4>
		} else {
			var children= this.props.items.map(function(entry){
				return (<ListItem
					text={entry['text']}
					itemKey={entry['.key']}
					key={entry['.key']}
					done={entry['done']} 
					/>);
			});
			return children;
		}
	}
});