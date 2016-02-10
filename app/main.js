import React from 'react';
import ReactDOM from 'react-dom';
import Note from './components/Note';

var noteList=[{"id":100,"text":"Nuwan with ReactJS"}]

ReactDOM.render(
	<Note noteList={noteList}/>,
	document.getElementById('container')
);