var MovieDescription = React.createClass({
	propTypes: {
		desc: React.PropTypes.string.isRequired,
	},
	render: function() {
		 return React.createElement('div', {},
            React.createElement('p', {}, this.props.desc),
            React.createElement('p', {}, this.props.bohaters),
            React.createElement('img', { src: this.props.images })
        );
	}
});