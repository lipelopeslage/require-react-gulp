define(function(){
	
	var IndexComponent = React.createClass({displayName: "IndexComponent",
		clickHandler: function(){
			require(['about']);
		},
		render: function(){
			document.body.style.visibility = "visible";

			return (
				React.createElement("div", {className: "module-holder"}, 
					React.createElement("h1", {className: "page-header"}, "Index"), 
					React.createElement("br", null), React.createElement("br", null), 
					React.createElement("p", {className: "well"}, 
						"Go to ", React.createElement("a", {onClick: this.clickHandler}, "About")
					)
				)

			);
		}
	});

	ReactDOM.render(
		React.createElement(IndexComponent, null),
		document.querySelector('main')
	);
})