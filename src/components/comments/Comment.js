import React from 'react';
import '../notes/styles.css';

class Comment extends React.Component {
    // описываем конструктор, который принимает props
    // в конструкторе в контексте вызова(this) создаем стейт(state) (*1) и задаем контекст вызова для функции handleClick(*2)
    constructor(props) {
        super(props);
        this.state = {
            isOpenComment: false // *1
        };
        this.handleClick = this.handleClick.bind(this); // *2
    }

    // создаём функцию, которая реагирует на клик по кнопке
    handleClick() {
        // setState - ключевая функция, в которую передается объект с полями и новыми значениями, которые необходимо изменить с стейте
        this.setState({
            isOpenComment: !this.state.isOpenComment
        });
    }

    render() {
        const {comment: {text, user}} = this.props;
        return (
            <div>
                <div>
                    <h3>
                        {user}
                        <button onClick={this.handleClick} className="btn btn-secondary float-right btn-sm">
                        {this.state.isOpenComment ? 'Close comment' : 'Open comment'}
                        </button>
                    </h3>
                </div>
                {this.state.isOpenComment &&
                    <div className="text">
                        {text}
                    </div>
                }
            </div>
        );
    }
}

export default Comment;