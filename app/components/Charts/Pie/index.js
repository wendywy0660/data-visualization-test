import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { PieChart, Pie, Cell, Legend, ResponsiveContainer } from 'recharts';
import classnames from 'classnames';

class RCPieChart extends Component {
  render () {
    const { title, className, width, height } = this.props;
    const { colors, innerRadius, outerRadius, paddingAngle, data } = this.props;
    const renderTitle = title ? <h5 className="title">{title}</h5> : null;
    const legend = data.map((cell, index) => ({
      value: cell.name,
      color: colors[index],
      type: 'square',
    }));
    const renderCells = data.map((cell, index) => <Cell key={index} fill={colors[index]} />);
    return (
      <div className={classnames('rc-pie-chart', className)}>
        {renderTitle}
        <ResponsiveContainer width={width} height={height}>
          <PieChart margin={{ bottom: 40, top: 40 }}>
            <Pie dataKey="value" data={data} innerRadius={innerRadius} outerRadius={outerRadius} paddingAngle={paddingAngle}>
              {renderCells}
            </Pie>
            <Legend verticalAlign="bottom" payload={legend} />
          </PieChart>
        </ResponsiveContainer>
      </div>
    );
  }
}

RCPieChart.defaultProps = {
  width: '100%',
  innerRadius: 80,
  outerRadius: 110,
  paddingAngle: 2,
  colors: ['#428FCD', '#FFD74F', '#8084E9', '#6CC497', '#C2437C', '#F79320', '#224097'],
};

RCPieChart.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  innerRadius: PropTypes.number.isRequired,
  outerRadius: PropTypes.number.isRequired,
  paddingAngle: PropTypes.number.isRequired,
  width: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]).isRequired,
  height: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]).isRequired,
  colors: PropTypes.array.isRequired,
  data: PropTypes.array.isRequired,
};

export default RCPieChart;
