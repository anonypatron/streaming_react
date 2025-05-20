import {
    BarElement,
    CategoryScale,
    Chart as ChartJS,
    Legend,
    LinearScale,
    Title,
    Tooltip,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

function BrandViewPerHourChart(props) {
    let chartData = props.CategoryViewPerHourChart;
    
    const data = {
            labels: chartData.labels,
            datasets: chartData.datasets.map(dataset => ({
            label: dataset.label,
            data: dataset.data,
            backgroundColor: 'rgba(105, 235, 54, 0.8)',
        })),
    };

    const options = {
        responsive: false,
        indexAxis: 'y',
        plugins: {
            legend: {
                position: "top",
            },
            title: {
                display: true,
                text: 'Hourly Active Users',
            },
            },
            scales: {
            y: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: 'Number of Users',
                },
            },
            x: {
                title: {
                    display: true,
                    text: 'Hour',
                },
            },
        },
    };

    return <Bar options={ options } data={ data }/>
}

export default BrandViewPerHourChart;