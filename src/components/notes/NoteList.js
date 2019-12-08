import React from 'react';
import './styles.css';

import Note from "./Note";

function NoteList(props) {
	// Извлекаем notes из props
	const {notes} = props;
	return (
		<ul className="card-ul">
			{
				// перебираем массив записей и на каждой итериации возвращаем компонент Note, в который пробрасываем key и note 
				notes.map((note, i) => (
					<Note key={note.id}
					      note={note}
					/>
				))
			}
		</ul>
	);
}

export default NoteList;
