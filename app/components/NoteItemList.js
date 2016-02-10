import React from 'react';
import NoteItem from './NoteItem';
import NoteCount from './NoteCount';

export default class NoteItemList extends React.Component{

	constructor(props){
		super(props);	
	}

	_removeNoteItem(index){
		this.props.noteList.splice(index,1);
		this.forceUpdate();
	}

	_createNote(){
		var Element = {"id":Math.random(),"text":"Hello React"}
		console.log("_createNote");
		this.props.noteList.push(Element);
		this.forceUpdate();
	}

	render(){
		return(
			<div>

			    <NoteCount count={this.props.noteList.length} createNote={this._createNote.bind(this)}/>
			    {this.props.noteList.map((data,index)=>{
			    	return <NoteItem key={Math.random()}
			    					 id={data.id}
			    					 text={data.text}
			    					 removeNoteItem={this._removeNoteItem.bind(this,index)}/>
			    })}
			</div>
		);	
	}	
}

NoteItemList.propTypes={
	removeNoteItem:React.PropTypes.func
}




