define(function(){

	var PowerRanger = React.createClass({displayName: "PowerRanger",
		render: function(){
			return(
				React.createElement("li", null, 
					this.props.fighter.color, " Ranger: ", this.props.fighter.name
				)
			)
		}
	});

	var ContactComponent = React.createClass({displayName: "ContactComponent",
		getInitialState: function(){
			return {rangers: null};
		},
		clickHandler: function(){
			var powerRangers = [{color: "Red", name: "Jason"}, 
				{color: "Black", name: "Zack"}, {color: "Blue", name: "Billy"}, 
				{color: "Pink", name: "Kimberly"}, {color: "Yellow", name: "Trini"}], list = [];
			powerRangers.map(function(item){
				list.push(React.createElement(PowerRanger, {fighter: item}));
			});
			this.setState({rangers: list});
		},
		render: function(){
			return (
				React.createElement("div", {className: "module-holder"}, 
					React.createElement("h1", {className: "page-header"}, "Contact"), 
					React.createElement("br", null), React.createElement("br", null), 
					React.createElement("p", {className: "well"}, 
						React.createElement("a", {onClick: this.clickHandler}, "Show me the power rangers real names!")
					), 
					React.createElement("ul", null, 
						this.state.rangers
					)
				)

			);
		}
	});

	ReactDOM.render(
		React.createElement(ContactComponent, null),
		document.querySelector('main')
	);
})