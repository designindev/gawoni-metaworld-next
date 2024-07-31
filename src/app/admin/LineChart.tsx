'use client'

import { Line } from 'react-chartjs-2'
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler } from 'chart.js'
import { Typography } from '@mui/material'

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler)

function LineChart() {
  const sampleData = [43, 40, 50, 40, 70, 40, 45, 33, 40, 60, 40, 50, 36]

  const canvasData = {
    datasets: [
      {
        label: '',
        borderColor: 'green',
        backgroundColor: 'green',
        lineTension: 0.5,
        data: sampleData,
        borderWidth: 2,
      },
    ],
  }

  const options = {
    scales: {
      x: {
        grid: {
          color: 'rgba(255,255,255,.1)', // for the grid lines
          drawTicks: false, // true is default
          drawOnChartArea: true, // true is default
        },
        labels: ['Jan', 'Jan', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Aug', 'Sep', 'Nov', 'Dec'],
        ticks: {
          color: 'white',
        },
      },
      y: {
        labels: ['Jan', 'Jan', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Aug', 'Sep', 'Nov', 'Dec'],
        border: {
          display: false,
        },
        min: 0,
        max: 100,
        ticks: {
          stepSize: 10,
          color: 'green',
        },
      },
    },
    maintainAspectRatio: false,
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        // display: false,
      },
    },
  }

  const graphStyle = {
    height: '300px',
  }

  return (
    <div className='chart'>
      <Typography variant='h5' component='h3' mb={3}>
        Selling overview
      </Typography>
      <div style={graphStyle}>
        <Line options={options} data={canvasData} />
      </div>
    </div>
  )
}
export default LineChart

{
  /* <div style={graphStyle}>
<Line
  data={{
    labels: ['Jan', 'Jan', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Aug', 'Sep', 'Nov', 'Dec'],
    datasets: [
      {
        label: '',
        data: [50, 75, 25, 35, 52, 76, 50, 75, 25, 35, 52, 76],
        borderWidth: 1,
        borderColor: '#00FF19',
        backgroundColor: '#00FF19',
      },
    ],
  }}
  options={{
    maintainAspectRatio: false,
    scales: {
      y: {
        labels: ['Jan', 'Jan', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Aug', 'Sep', 'Nov', 'Dec'],
        min: 0,
        max: 100,
      },
    },
  }}
/>
</div> */
}
