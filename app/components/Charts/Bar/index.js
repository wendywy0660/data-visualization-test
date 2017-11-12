import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { BarChart, Bar, XAxis, YAxis, Legend, CartesianGrid, ResponsiveContainer, Tooltip } from 'recharts';
import classnames from 'classnames';

class RCBarChart extends Component {
  yaxisConverter = (value) => {
    const { yAxisFormatter } = this.props;
    return yAxisFormatter ? yAxisFormatter(value) : value;
  }
  render () {
    const { title, className, width, height, biaxial } = this.props;
    const { colors, barSize, xAxisLabel, yAxisLabel, yAxisLabel2, axisLabelColor, bars, data } = this.props;
    const renderTitle = title ? <h5 className="title">{title}</h5> : null;
    const legend = bars.map((bar, index) => ({
      value: bar.name,
      color: colors[index],
      type: 'square',
    }));
    const renderBars = bars.map((bar, index) => {
      const yAxisId = biaxial && index === 1 ? 'right' : 'left';
      return <Bar key={index} yAxisId={yAxisId} dataKey={bar.key} fill={colors[index]} barSize={barSize} />;
    });

    return (
      <div className={classnames('rc-bar-chart', className)}>
        {renderTitle}
        <ResponsiveContainer width={width} height={height}>
          <BarChart data={data} margin={{ bottom: 40 }}>
            <XAxis
              dataKey="name"
              tickSize={10}
              label={{ value: xAxisLabel, dy: 20, fill: axisLabelColor, fontSize: 12 }}
            />
            <YAxis
              yAxisId="left"
              orientation="left"
              tickLine={false}
              axisLine={false}
              label={{ value: yAxisLabel, dx: -30, fill: axisLabelColor, fontSize: 12 }}
            />

            { biaxial && <YAxis
                yAxisId="right"
                orientation="right"
                tickLine={false}
                axisLine={false}
                label={{ value: yAxisLabel2, dx: -30, fill: axisLabelColor, fontSize: 12 }}
                tickFormatter={this.yaxisConverter}
              />
            }
            <Tooltip />
            <Legend verticalAlign="bottom" payload={legend} />
            <CartesianGrid vertical={false} />
            {renderBars}
          </BarChart>
        </ResponsiveContainer>
      </div>
    );
  }
}
RCBarChart.defaultProps = {
  width: '100%',
  barSize: 30,
  axisLabelColor: '#858B88',
  colors: ['#B3B3B3', '#62738E'],
  biaxial: false,
  yAxisLabel2: undefined,
};

RCBarChart.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  xAxisLabel: PropTypes.string.isRequired,
  yAxisLabel: PropTypes.string.isRequired,
  yAxisFormatter: PropTypes.func,
  axisLabelColor: PropTypes.string.isRequired,
  barSize: PropTypes.number.isRequired,
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
  bars: PropTypes.array,
  biaxial: PropTypes.bool,
  yAxisLabel2:PropTypes.string,
};

export default RCBarChart;
