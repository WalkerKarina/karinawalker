import React, { Component } from 'react'

//add functionality where onclick leads to expanded view with more info


class WideCard extends Component {

	constructor(props){
		super(props);
		this.state = {

		}
	}

	render() {
		return (
			<div class="widecard">
				<div>
					<h3>{this.props.title}</h3>
					<h4>{this.props.where}</h4>
					<h4>{this.props.from} - {this.props.to}</h4>
				</div>
			</div>
		)
	}
}
export default WideCard;