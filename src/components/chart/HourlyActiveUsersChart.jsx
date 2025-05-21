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
    // let chartData = props.hourlyUserData;

    let chartData = {
        "labels": ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23"], // 시간
        "datasets": [{
            "label": "Hourly Active Users",
            "data": [123, 98, 56, 78, 110, 150, 180, 200, 220, 250, 280, 300, 320, 310, 290, 270, 250, 230, 210, 190, 170, 150, 130, 110] // 사용자 수
        }]
    };

    const data = {
            labels: chartData.labels,
            datasets: chartData.datasets.map(dataset => ({
            label: dataset.label,
            data: dataset.data,
            backgroundColor: [
                'rgba(96, 163, 188, 0.2)',  // 더스티 블루
                'rgba(118, 179, 129, 0.2)', // 숲 초록
                'rgba(248, 206, 92, 0.2)',  // 머스타드 옐로우
                'rgba(202, 110, 107, 0.2)', // 로지 레드
                'rgba(102, 94, 119, 0.2)',  // 다크 퍼플
                'rgba(255, 137, 65, 0.2)',  // 번트 오렌지
                'rgba(76, 175, 80, 0.2)',   // 에메랄드 그린
                'rgba(165, 105, 189, 0.2)',  // 라벤더 퍼플
                'rgba(173, 216, 230, 0.2)', // 하늘색
                'rgba(144, 238, 144, 0.2)', // 연두색
                'rgba(255, 250, 205, 0.2)', // 레몬색
                'rgba(255, 192, 203, 0.2)', // 분홍
                'rgba(221, 160, 221, 0.2)', // 자주색
                'rgba(255, 222, 173, 0.2)', // 살구색
                'rgba(135, 206, 235, 0.2)', // 스카이블루
                'rgba(240, 230, 140, 0.2)',  // 카키색
                'rgba(52, 152, 219, 0.2)',  // 밝은 파랑
                'rgba(46, 204, 113, 0.2)',  // 초록
                'rgba(241, 196, 15, 0.2)',  // 노랑
                'rgba(231, 76, 60, 0.2)',   // 빨강
                'rgba(155, 89, 182, 0.2)',  // 보라
                'rgba(255, 160, 0, 0.2)',   // 주황
                'rgba(26, 188, 156, 0.2)',  // 청록
                'rgba(230, 126, 34, 0.2)'   // 짙은 주황
            ],
            borderColor: [
                'rgba(96, 163, 188, 1)',  // 더스티 블루
                'rgba(118, 179, 129, 1)', // 숲 초록
                'rgba(248, 206, 92, 1)',  // 머스타드 옐로우
                'rgba(202, 110, 107, 1)', // 로지 레드
                'rgba(102, 94, 119, 1)',  // 다크 퍼플
                'rgba(255, 137, 65, 1)',  // 번트 오렌지
                'rgba(76, 175, 80, 1)',   // 에메랄드 그린
                'rgba(165, 105, 189, 1)',  // 라벤더 퍼플
                'rgba(173, 216, 230, 1)', // 하늘색
                'rgba(144, 238, 144, 1)', // 연두색
                'rgba(255, 250, 205, 1)', // 레몬색
                'rgba(255, 192, 203, 1)', // 분홍
                'rgba(221, 160, 221, 1)', // 자주색
                'rgba(255, 222, 173, 1)', // 살구색
                'rgba(135, 206, 235, 1)', // 스카이블루
                'rgba(240, 230, 140, 1)',  // 카키색
                'rgba(52, 152, 219, 1)',  // 밝은 파랑
                'rgba(46, 204, 113, 1)',  // 초록
                'rgba(241, 196, 15, 1)',  // 노랑
                'rgba(231, 76, 60, 1)',   // 빨강
                'rgba(155, 89, 182, 1)',  // 보라
                'rgba(255, 160, 0, 1)',   // 주황
                'rgba(26, 188, 156, 1)',  // 청록
                'rgba(230, 126, 34, 1)'   // 짙은 주황
            ],
            borderWidth: 1,
        })),
    };

    const options = {
        plugins: {
            title: {
                display: true,
                text: "시간대별 사용자 활동량 분석 (피크 시간 확인)"
            },
            legend: {
                position: "right",
                display: false
            },
        }
    };
    // const options = {
    //     responsive: false,
    //     plugins: {
    //         legend: {
    //             position: "top",
    //         },
    //         title: {
    //             display: true,
    //             text: 'Hourly Active Users',
    //         },
    //     },
    //     scales: {
    //         y: {
    //             beginAtZero: true,
    //             title: {
    //                 display: true,
    //                 text: 'Number of Users',
    //             },
    //         },
    //         x: {
    //             title: {
    //                 display: true,
    //                 text: 'Hour',
    //             },
    //         },
    //     },
    // };

    return <Bar options={ options } data={ data }/>;
}

export default HourlyActiveUsersChart;