import React from 'react';
import ReactDOM from 'react-dom';

export default class Note extends React.Component{

	constructor(){
		super();

		this.state={
			message:"Hello World!",
			isEdit:false
		}
		
	}

	render(){
		{return (this.state.isEdit)?this._editDisplay():this._renderDisplay()}		
	}



	componentDidMount(){

		this.TIME_FADE_IN=500;
		this.TIME_FADE_OUT=200;
		this.setState({
			message:this.props.item
		})
		this.node=ReactDOM.findDOMNode(this.refs.btnWrapper);
	}

	componentDidUpdate(){
		this.node=ReactDOM.findDOMNode(this.refs.btnWrapper);
	}

	_editHandler(){
		console.log("_editHandler");
		this.setState({
			isEdit:true
		});
	}

	_clearText(){
		var newText = this.refs.txtAreaRef.value="";
		this.refs.txtAreaRef.focus();
		this.setState({
			message:newText
		});
	}

	_saveNote(event){

		var newText = this.refs.txtAreaRef.value

		this.setState({
			isEdit:false,
			message:newText
		});
	}

	/*_removeHandler(){
		console.log("_removeHandler");
	}*/

	_onMouseHandler(){
	    $(this.node).fadeIn(this.TIME_FADE_IN);
	}

	_onMouseLeaveHandler(){
	    $(this.node).fadeOut(this.TIME_FADE_OUT);
	}

	_renderDisplay(){
		return(
			<div id="topWrapper" onMouseOver={this._onMouseHandler.bind(this)}
				 onMouseLeave={this._onMouseLeaveHandler.bind(this)}>
              	<div id="wrapper">

					<div className="txtMessage">{this.state.message}</div>

				</div>
				<div id="btnWrapper" ref={"btnWrapper"}>
					<button onClick={this._editHandler.bind(this)} className='btn btn-sm btn-primary glyphicon glyphicon-pencil'>
					</button>&nbsp;
					<button onClick={this.props.removeNoteFunc} className='btn btn-sm btn-danger glyphicon glyphicon-trash'>
					</button>


				</div>
			</div>

			
			
		);
	}

	_editDisplay(){
		
		return(
			<div id="wrapper">
				
				  	<label htmlFor="comment">Note:</label>
				  	<textarea className="form-control" 
				  			  rows="5" 
				  			  id="comment"
				  			  ref="txtAreaRef"
				  			  defaultValue={this.state.message}>
				  	</textarea>			
				    <button onClick={this._saveNote.bind(this)} 
				    		className="btn btn-sm btn-success glyphicon glyphicon-floppy-disk"></button>
				    		&nbsp;
				    <button onClick={this._clearText.bind(this)} 
				    		className="btn btn-sm btn-danger glyphicon glyphicon-option-horizontal"></button>
			</div>
		);
	}

	
}


Note.propTypes={
	defaultValue		:React.PropTypes.string,
	_onMouseHandler     :React.PropTypes.func,
	_onMouseLeaveHandler:React.PropTypes.func,
	_editHandler        :React.PropTypes.func,
	_removeHandler      :React.PropTypes.func,
	_saveNote           :React.PropTypes.func
}



