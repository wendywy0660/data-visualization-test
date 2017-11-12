import React from 'react';
import PropTypes from 'prop-types';
import BarChart from './Charts/Bar';
import { YEARSMAP, getGroupByFeature } from '../utils/transform';

class Comparison extends React.Component {
  state = {
    selectedFeature: 'pn',
  };

  handleFeatureChange = (event) => {
    this.setState({ selectedFeature: event.target.value });
  }

  render() {
    const data = getGroupByFeature(this.props.data, this.state.selectedFeature);
    const bars = [{ name: 'YEAR 2013', key: 'year2013' }, { name: 'YEAR 2014', key: 'year2014' }];
    YEARSMAP.map(year => ({ name: `YEAR ${year}`, key: `year${year}` }));
    return (
      <div className="comparison">
        <h3 className="heading">Compare data by year</h3>
        <form className="view-controller">
          <label htmlFor="selectFeature">
            Select Feature:
            <select className="select-box" name="selectFeature" value={this.state.selectedFeature} onChange={this.handleFeatureChange}>
              <option value="pn">Number of PNs</option>
              <option value="face">Face Values</option>
            </select>
          </label>
        </form>
        <BarChart
          height={this.props.height}
          title="Comparison"
          xAxisLabel="Offence Category"
          yAxisLabel="Number of PNs"
          data={data}
          bars={bars}
        />

      </div>
    );
  }
}

Comparison.propTypes = {
  height: PropTypes.number,
  data: PropTypes.array.isRequired, // eslint-disable-line react/forbid-prop-types
};

Comparison.defaultProps = {
  height: 350,
};

export default Comparison;
