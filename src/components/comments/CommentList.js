import React from 'react';
import Comment from "./Comment";

class CommentList extends React.Component {
	// описываем конструктор, который принимает props
	// в конструкторе в контексте вызова(this) создаем стейт(state) (*1) и задаем контекст вызова для функции handleClick(*2)
	constructor(props) {
		super(props);
		this.state = {
			isOpenCommentList: false // *1
		};
		this.handleClick = this.handleClick.bind(this); // *2
	}
    // создаём функцию, которая реагирует на клик по кнопке
	handleClick() {
		// setState - ключевая функция, в которую передается объект с полями и новыми значениями, которые необходимо изменить с стейте
		this.setState({
			isOpenCommentList: !this.state.isOpenCommentList
		});
	}

	render() {
		const {comments} = this.props;
		
		return (
			<div className="card mx-auto">
				<div className="card-header">
					<h2>
						Comments
						<button onClick={this.handleClick}
								className="btn btn-outline-success float-right btn-lg"
						>
							{this.state.isOpenCommentList ? 'Close comments' : 'Open comments'}
						</button>
					</h2>
				</div>
				{/* Указываем, rомментарии будут отображаться, если  this.state.isOpenCommentList ==== true*/}
				{
					!!this.state.isOpenCommentList && comments.length && comments.map(comment => (
						<Comment key={comment.id}
								 comment={comment}
						/>
					))
				}
			</div>
		);
	}

}

export default CommentList;
