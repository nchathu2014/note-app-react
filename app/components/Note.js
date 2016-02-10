import React from 'react';
import NoteItemList from './NoteItemList';


export default class Note extends React.Component{

	constructor(props){
		super(props);	
	}

	render(){
		return(
			<div className="container-fluid text-center">
				<NoteItemList noteList={this.props.noteList}/>
			</div>	
		);	
	}	
}




