import React from 'react';
import PropTypes from 'prop-types';
import { render } from 'react-dom';
const { formatTime } = require('./components/utils');


class App extends React.Component {
  state = {
    status: 'off',
    time: 0,
    timer: null,
  }

  step = () => {
    this.setState({
      time: this.state.time - 1,
    });
    console.log(this.state.time);
    console.log(this.state.status);

    // switch(expr) {
    //   case (this.state.time === 0 && this.state.status === 'work'): 
    //     this.setState({
    //       status: 'rest',
    //       time: 5,
    //     });
    //     break;
    //   case (this.state.time === 0 && this.state.status === 'rest'): 
    //     this.setState({
    //       status: 'work',
    //       time: 10,
    //     });
    //     break;
    // }

    if(this.state.time === 0) {
      console.log('ZMIANA')

      if(this.state.status === 'work'){
        this.setState({
          status: 'rest',
          time: 5,
        });
      } else if(this.state.status === 'rest'){
        this.setState({
          status: 'work',
          time: 10,
        });
      }
    }
  };

  startTimer = () => {
    this.setState({
      timer: setInterval(this.step, 1000),
      time: 10,
      status: 'work',
    });
    // console.log('kliknięty start')
    // console.log('time in state', this.state.time)
  }

  render() {
    const { status, time } = this.state;

    return (
      <div>
        <h1>Protect your eyes</h1>
        {(status === 'off') && 
        <div>
          <p>According to optometrists in order to save your eyes, you should follow the 20/20/20. It means you should to rest your eyes every 20 minutes for 20 seconds by looking more than 20 feet away.</p>
          <p>This app will help you track your time and inform you when it's time to rest.</p>
        </div>}
        {(status === 'work') && <img src="./images/work.png" />}
        {(status === 'rest') && <img src="./images/rest.png" />}
        {(status != 'off') && <div className="timer">{formatTime(time)}</div>}
        {(status === 'off') && <button className="btn" onClick={this.startTimer}>Start</button>}
        {(status != 'off') && <button className="btn">Stop</button>}
        <button className="btn btn-close">X</button>
      </div>
    )
  }
};

App.propTypes = {
  status: PropTypes.string,
}

render(<App />, document.querySelector('#app'));
