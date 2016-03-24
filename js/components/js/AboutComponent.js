define(function(){

	var AboutComponent = React.createClass({displayName: "AboutComponent",
		getInitialState: function(){
			return {msg: ''};
		},
		clickHandler: function(){
			require(['contact']);
		},
		componentDidMount: function(){
			this.setState({msg: 'Acabou de renderizar este AboutComponent'});
		},
		render: function(){
			return (
				React.createElement("div", {className: "module-holder"}, 
					React.createElement("h1", {className: "page-header"}, "About"), 
					React.createElement("br", null), React.createElement("br", null), 
					React.createElement("p", {className: "well"}, 
						"Go to ", React.createElement("a", {onClick: this.clickHandler}, "Contact")
					), 
					React.createElement("p", {className: "alert alert-success"}, this.state.msg)
				)

			);
		}
	});

	ReactDOM.render(
		React.createElement(AboutComponent, null),
		document.querySelector('main')
	);
})