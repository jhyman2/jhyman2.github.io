import React    from 'react';
import ReactDOM from 'react-dom';

import Header from './components/header';

export default class App extends React.Component {

  render () {
    return (
      <div id="indexTest">
        <Header />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app-container'));