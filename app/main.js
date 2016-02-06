import React from 'react';
import ReactDOM from 'react-dom';
import Board from './components/Board';

var noteList=[
				"Note 1",
				"Note 2",
				"Note 3",
				"Note 4"
			]

ReactDOM.render(
	<Board noteList={noteList}/>,
	document.getElementById('container')
);