var React = require('react');


module.exports = React.createClass({
	getInitialState: function() {
		return{
			text: this.props.text,
			done: this.props.done
		}

	},


	handleClick: function() {
		this.props.whenItemClicked(this.props.item);
	},
	render: function() {
		return <div className="input-group">
			<span className="input-group-addon">
				<input type="checkbox"
					checked={this.state.done}
					onChange={ this.handleDoneChange}
				/>
			</span>
			<input type = "text"
				className="form-control"
				value={this.state.text}
			/>
		</div>
		
	},
	handleDoneChange: function(e) {
		this.setState({done: e.target.checked});
	}
});