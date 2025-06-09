// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   Title,
//   Tooltip,
//   Filler,
//   Legend,
// } from 'chart.js';
// import { Line } from 'react-chartjs-2';

// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   Title,
//   Tooltip,
//   Filler,
//   Legend
// );

// function CustomerCountPerDecileChart(props) {
//     let chartData = props.CustomerCountPerDecileChart;

//     if (!chartData) {
//         return (
//             <div>
//                 <p>잠시만 기다려주세요.</p>
//             </div>
//         )
//     }
    
//     // let chartData = {
//     //     "labels": ["P0-10", "P10-20", "P20-30", "P30-40", "P40-50",
//     //          "P50-60", "P60-70", "P70-80", "P80-90", "P90-100"], // 시간
//     //     "datasets": [{
//     //         "label": "Customer Count Per Decile",
//     //         "data": [512, 731, 834, 923, 1012, 789, 602, 391, 195, 71] // 사용자 수
//     //     }]
//     // };

//     const options = {
//         responsive: true,
//         plugins: {
//             title: {
//                 display: true,
//                 text: "사용자 구매 금액 백분위"
//             },
//             legend: {
//                 display: false
//             },
//         }
//     };

//     const data = {
//             labels: chartData.labels,
//             datasets: chartData.datasets.map(dataset => ({
//             label: dataset.label,
//             data: dataset.data,
//             borderColor: 'rgb(53, 162, 235)',
//             backgroundColor: 'rgba(53, 162, 235, 0.5)',
//         })),
//     };

//     return <Line options={ options } data={ data }/>
// }

// export default CustomerCountPerDecileChart;