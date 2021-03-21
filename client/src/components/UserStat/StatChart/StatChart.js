//Core
import React from 'react';
import PropTypes from 'prop-types';
//Components
import Chart from 'react-apexcharts';
//Styles
import './StatChart.scss';

const StatChart = ({ timeLine, title, data }) => {
	const chartOptions = {
		series: [{ name: `${title}`, data: [...data] }],
		options: {
			chart: {
				width: '100%',
				height: '50%',
				type: 'line',
				zoom: { enabled: false },
				toolbar: { show: false },
			},

			dataLabels: { enabled: false },

			stroke: { curve: 'smooth' },

			title: {
				text: `${title}`,
				align: 'left',
				style: { fontSize: '16px', fontWeight: 'bold', color: '#263238' },
			},

			grid: { row: { colors: ['transparent'], opacity: 0.5 } },

			xaxis: {
				categories: [...timeLine],
				labels: { show: true, rotate: -65, rotateAlways: true },
			},

			responsive: [
				{ breakpoint: 320, options: { chart: { width: 200 } } },
				{ breakpoint: 768, options: { chart: { width: 300 } } },
				{ breakpoint: 1280, options: { chart: { width: 500 } } },
			],
		},
	};

	return (
		<div className="stat-chart_wrap">
			<Chart options={chartOptions.options} series={chartOptions.series} type="line" />
		</div>
	);
};

StatChart.propTypes = {
	title: PropTypes.string.isRequired,
	data: PropTypes.arrayOf(PropTypes.number).isRequired,
	timeLine: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default StatChart;
