import React from 'react';
import Comparison from './comparison';
import Allocation from './allocation';
import mockFetchData from '../utils/mock-fetch-data';

class App extends React.Component {
  state = {
    data: [],
  };

  componentWillMount() {
    mockFetchData().then((data) => {
      if (data) this.setState({ data });
    });
    // .catch((err) => { handleError(err); });
  }

  render () {
    return (
      <div>
        <h2 id="heading">Data Visualization Task</h2>
        <Comparison data={this.state.data} />
        <Allocation data={this.state.data} />
      </div>
    );
  }
}

export default App;
