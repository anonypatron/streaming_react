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
    let chartData = props.brandViewsData;
    
    if (!chartData || !chartData.labels || !chartData.datasets || chartData.datasets.length === 0) {
        return (
            <div>
                <p>데이터 로딩 중입니다. 잠시만 기다려주세요.</p>
            </div>
        );
    }
    
    // let chartData = {
    //     "labels": ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"],
    //     "datasets": [{
    //         "label": "Brand View Per Hour",
    //         "data": [1000, 900, 800, 700, 600, 500, 400, 300, 200, 100]
    //     }]
    // };
    
    const data = {
            labels: chartData.labels,
            datasets: chartData.datasets.map(dataset => ({
            label: dataset.label,
            data: dataset.data,
            backgroundColor: [
                'rgba(52, 152, 219, 0.2)',
                'rgba(46, 204, 113, 0.2)',
                'rgba(241, 196, 15, 0.2)',
                'rgba(231, 76, 60, 0.2)',
                'rgba(155, 89, 182, 0.2)',
                'rgba(255, 160, 0, 0.2)',
                'rgba(26, 188, 156, 0.2)',
                'rgba(230, 126, 34, 0.2)',
                'rgba(149, 165, 166, 0.2)',
                'rgba(44, 62, 80, 0.2)'
            ],
            borderColor: [
                'rgba(52, 152, 219, 1)',
                'rgba(46, 204, 113, 1)',
                'rgba(241, 196, 15, 1)',
                'rgba(231, 76, 60, 1)',
                'rgba(155, 89, 182, 1)',
                'rgba(255, 160, 0, 1)',
                'rgba(26, 188, 156, 1)',
                'rgba(230, 126, 34, 1)',
                'rgba(149, 165, 166, 1)',
                'rgba(44, 62, 80, 1)'
            ],
            borderWidth: 1,
        })),
    };

    const options = {
        indexAxis: 'y',
        plugins: {
            title: {
                display: true,
                text: "실시간 인기 브랜드(view)"
            },
            legend: {
                display: false
            },
        }
    };

    return <Bar options={ options } data={ data }/>
}

export default BrandViewPerHourChart;