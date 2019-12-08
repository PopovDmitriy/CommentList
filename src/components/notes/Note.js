import React from "react";
import CommentList from "../comments/CommentList";

// Создаём компонент при помощи класса, наследуя его от React.Component
class Note extends React.Component {
	// описываем конструктор, который принимает props
	// в конструкторе в контексте вызова(this) создаем стейт(state) (*1) и задаем контекст вызова для функции handleClick(*2)
	 constructor(props) {
	 	super(props);
	 	this.state = {
	 		isOpenText: false // *1
	    };
	 	this.handleClick = this.handleClick.bind(this); // *2
	 }

	 // создаём функцию, которая реагирует на клик по кнопке
	 handleClick() {
		// setState - ключевая функция, в которую передается объект с полями и новыми значениями, которые необходимо изменить с стейте
	 	this.setState({
		    isOpenText: !this.state.isOpenText
	    });
	 }

	 render() {
	 	const {note: {title, date, text, comments}} = this.props;

	 	return (
	 		<div className="card mx-auto">
			    <li className="card-li">
				    <div className="card-header">
				        <h2>
							{title}
							{/* на кнопку атрибутом добавляем функцию клика */}
					        <button onClick={this.handleClick}
					                className="btn btn-primary float-right btn-lg"
					        >
						        {this.state.isOpenText ? 'Close' : 'Open'}
					        </button>
				        </h2>
					    <div className="card-subtitle text-muted">
						    date created: {(new Date(date)).toDateString()}
					    </div>
				    </div>
					{/* Указываем, что текст и комментарии будут отображаться, если  this.state.isOpenText ==== true*/}
				    {this.state.isOpenText &&
					    <div className="card-body">
						    {text}
						    <CommentList comments={comments || []}/>
					    </div>
				    }
			    </li>
		    </div>
	    );
	 }
}

export default Note;
