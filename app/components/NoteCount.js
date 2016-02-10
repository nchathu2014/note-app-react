import React from 'react';

export default class NoteCount extends React.Component{

	constructor(props){
		super(props);	
	}

	render(){
		return(
				<div>				
					<button className="btn btn-lg" onClick={this.props.createNote}>
						<span className="glyphicon glyphicon-plus-sign cus-glyphicon"></span>
					</button>&nbsp;
					<button className="btn btn-lg">
						<span className="glyphicon cus-glyphicon">{this.props.count}</span>
					</button>						
				</div>
		);		
	}	
}




