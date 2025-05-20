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

function HourlyActiveUsersChart(props) {

    let chartData = props.hourlyUserData;
    // let chartData = {
    //     "labels": ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23"], // 시간
    //     "datasets": [{
    //         "label": "Hourly Active Users",
    //         "data": [123, 98, 56, 78, 110, 150, 180, 200, 220, 250, 280, 300, 320, 310, 290, 270, 250, 230, 210, 190, 170, 150, 130, 110] // 사용자 수
    //     }]
    // };

    const data = {
            labels: chartData.labels,
            datasets: chartData.datasets.map(dataset => ({
            label: dataset.label,
            data: dataset.data,
            backgroundColor: 'rgba(105, 235, 54, 0.8)', // 막대 색상 설정 (원하는 색상으로 변경 가능)
        })),
    };

    const options = {
        responsive: false,
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

    return <Bar data={ data } options={ options } />;
}

export default HourlyActiveUsersChart;