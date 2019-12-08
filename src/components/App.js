import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

import notesConstant from '../constants/notesConstant';
import NoteList from "./notes/NoteList";

// Создаём функциональный компонент
function App() {
  // описываем, что компонент возвращает (html)
  return (
    <div className="container">
        <div className="jumbotron">
            <h1 className="display-3">News</h1>
        </div>
        {/* Используем наравне с html компонент NoteList, в качестве параметров передаем в него список notes*/}
        <NoteList notes={notesConstant}/>
    </div>
  );
}

export default App;
