var React = require('react');
var Badge = require('./badge');
module.exports = React.createClass({
	render: function() {
		return ( <div className="col-sm-6 col-md-4">
			<div className="thumbnail">
      			<img src={this.props.imageSource} alt="..." />
      			<div className="caption">
        			<h3>{this.props.thumbTitle}</h3>
        				<p>{this.props.caption}</p>
        				<p>
        				<Badge badgeTitle={this.props.badgeTitle} count={this.props.count} />
        				</p>
      			</div>
    		</div>
    	</div>);
	}
});
