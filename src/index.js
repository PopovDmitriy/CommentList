import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import * as serviceWorker from './serviceWorker';

// При помощи метода render передаем какой компонент главный в нашем приложении и в какой жлемент и с какой айдишкой он будет вставлен в Index.html
ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
