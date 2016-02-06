import React from 'react';
import Immutable from 'immutable';
import Note from './Note';

export default class Board extends React.Component{

	
	constructor(props){
		super(props);

		

		
	}

	

	_removeNoteFunc(index){
		var arr = this.props.noteList
		arr.splice(index,1)
		this.forceUpdate()
		console.log(arr);
	}

	
	_renderNote(){
		
	}

	
	render(){
		return(
			<div>

				{this.props.noteList.map((item,index)=>{
					return <Note key={index} 
					             item={item} 
					             removeNoteFunc={this._removeNoteFunc.bind(this,index)}>
					       </Note>
				})}
				
			</div>	
		);
		

	}
}


Board.propTypes={
	note:React.PropTypes.string,
	key:React.PropTypes.number,
	removeNoteFunc:React.PropTypes.func
}