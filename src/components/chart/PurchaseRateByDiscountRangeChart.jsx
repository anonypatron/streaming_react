import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

function PurchaseRateByDiscountRangeChart(props) {
    // let chartData = props.PurchaseRateByDiscountRangeChart;

    let chartData = {
        "labels": ["P0-1", "P1-10", "P10-20", "P20+"], // 시간
        "datasets": [{
            "label": "Purchase Rate By Discount Range",
            "data": [0.012683, 0.019999, 0.014238, 0.013522] // 사용자 수
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
    
    const options = {
        plugins: {
            title: {
                display: true,
                text: "할인율에 따른 구매율 증가"
            },
        }
    };

    return <Doughnut options={ options } data={ data }/>
}

export default PurchaseRateByDiscountRangeChart;