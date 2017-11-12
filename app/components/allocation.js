import React from 'react';
import PropTypes from 'prop-types';
import mapKeys from 'lodash/mapKeys';
import pick from 'lodash/pick';
import PieChart from './Charts/Pie';
import BarChart from './Charts/Bar';
import { dollarFormatter } from '../utils/formatter';
import { YEARSMAP, getFilteredDataByYear, getGroupByFeature } from '../utils/transform';

function mapDataForPie(data, year) {
  return data.map((entry) => {
    const newData = pick(entry, ['name', `year${year}`]);
    return mapKeys(newData, (value, key) => ((key === `year${year}`) ? 'value' : key));
  });
}

class Allocation extends React.Component {
  state = {
    selectedYear: '2014',
    selectedFeature: 'pn',
  };

  handleYearChange = (event) => {
    this.setState({ selectedYear: event.target.value });
  }

  handleFeatureChange = (event) => {
    this.setState({ selectedFeature: event.target.value });
  }

  render () {
    const data = getGroupByFeature(this.props.data, this.state.selectedFeature);
    const bars = [{ name: 'PNs', key: 'pn' }, { name: 'Face values', key: 'face' }];
    return (
      <div className="allocation">
        <h3 id="heading">Split based on categories</h3>
        <form>
          <label htmlFor="selectYear">
            Select Year:
            <select className="select-box" name="selectYear" value={this.state.selectedYear} onChange={this.handleYearChange}>
              { YEARSMAP.map(year => <option value={year}>Year {year}</option>) }
            </select>
          </label>

          <label htmlFor="selectFeature">
            Select Feature:
            <select className="select-box" name="selectFeature" value={this.state.selectedFeature} onChange={this.handleFeatureChange}>
              <option value="pn">Number of PNs</option>
              <option value="face">Face Values</option>
            </select>
          </label>
        </form>

        <div className="allocation-chart">
          <PieChart
            height={this.props.height}
            title="Allocation"
            data={mapDataForPie(data, this.state.selectedYear)}
          />
          <BarChart
            height={350}
            title="Comparison"
            xAxisLabel="Offence Category"
            yAxisLabel="Number of PNs"
            yAxisLabel2="Face Values"
            yAxisFormatter={dollarFormatter}
            data={getFilteredDataByYear(this.props.data, this.state.selectedYear)}
            bars={bars}
            biaxial
          />

        </div>
      </div>
    );
  }
}

Allocation.propTypes = {
  height: PropTypes.number,
  data: PropTypes.array.isRequired, // eslint-disable-line react/forbid-prop-types
};

Allocation.defaultProps = {
  height: 350,
};

export default Allocation;
