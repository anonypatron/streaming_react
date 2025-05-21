import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(
    ArcElement, 
    Tooltip, 
    Legend
);

function UserPurchaseFrequencyChart(props) {
    // let chartData = props.UserPurchaseFrequencyChart;

    let chartData = {
        "labels": ["1회", "2-5회", "6-10회", "10회 이상"], // 시간
        "datasets": [{
            "label": "User Purchase Frequency",
            "data": [200, 150, 43, 10] // 사용자 수
        }]
    };

    const data = {
            labels: chartData.labels,
            datasets: chartData.datasets.map(dataset => ({
            label: dataset.label,
            data: dataset.data,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)'
            ],
            borderWidth: 1,
        })),
    };

    // const options = {
    //     responsive: true,
    //     legend: {
    //         position: 'top',
    //     },
    //     title: {
    //         display: true,
    //         text: 'Chart.js Doughnut Chart'
    //     },
    //     animation: {
    //         animateScale: true,
    //         animateRotate: true
    //     }
    // }

    const options = {
        plugins: {
            title: {
                display: true,
                text: "사용자 구매 빈도 분포"
            },
        }
    };

    return <Pie options={ options } data={ data }/>
}

export default UserPurchaseFrequencyChart;