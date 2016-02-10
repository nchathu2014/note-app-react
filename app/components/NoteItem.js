import React from 'react';


export default class NoteItem extends React.Component{

	constructor(props){
		super(props);
		this.state={
			editable:false,
			inputText:this.props.text,
			visibility:'hidden'
		}	
	}

	render(){
		return (this.state.editable) ? this._renderEditDisplay() : this._renderDisplay()
	}

	_editNote(){	
		this.setState({
			editable:true
		});	
	}

	_closeEdit(){	
		this.setState({
			editable:false,
			inputText:this.refs.textAreaRef.defaultValue			
		});		
	}

	_saveNote(){
		this.setState({
			editable:false,
		});
	}

	_onChange(event){
		console.log()
		this.setState({
			inputText:event.target.value
		});
	}

	_mouseOver(){
		this.setState({
			visibility:'visible'
		});
	}

	_mouseOut(){
		this.setState({
			visibility:'hidden'
		});
	}

	_renderDisplay(){
		return(
				<div className="outer-wrapper" 
					 onMouseOver={this._mouseOver.bind(this)}
					 onMouseOut={this._mouseOut.bind(this)}>

					<div className="note-item wrapper" >
						{this.state.inputText}
					</div>
				    <div style={{background:'yellow',padding:'5px'}} onClick={this._editNote.bind(this)}>
				    	<button className="btn btn-sm btn-success" style={{visibility:this.state.visibility}}>
				    		<span className="glyphicon glyphicon-pencil"></span>
				    	</button>&nbsp;
				    	<button className="btn btn-sm btn-danger" style={{visibility:this.state.visibility}} onClick={this.props.removeNoteItem}>
				    		<span className="glyphicon glyphicon-trash"></span>
				    	</button>
				    </div>		
				</div>
			);
	}

	_renderEditDisplay(){
		return(
				<div className="outer-wrapper">				
					<div className="note-item wrapper">
						<textarea className="form-control" 
								  ref="textAreaRef"							 
								  value={this.state.inputText}
								  onChange={this._onChange.bind(this)}>
						</textarea>
					</div>
				    <div style={{background:'yellow',padding:'5px'}}>
				    	<button className="btn btn-sm btn-success" onClick={this._saveNote.bind(this)}>
				    		<span className="glyphicon glyphicon-floppy-disk"></span>
				    	</button>&nbsp;
				    	<button className="btn btn-sm btn-danger" onClick={this._closeEdit.bind(this)}>
				    		<span className="glyphicon glyphicon-remove"></span>
				    	</button>
				    </div>		
				</div>
			);
	}	
}




