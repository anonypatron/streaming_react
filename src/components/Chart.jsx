import { useState } from 'react';
import HourlyActiveUsersChart from "./HourlyActiveUsersChart";
import WebSocketComponent from "./WebSocketComponent";

const Chart = () => {
    const [activeView, setActiveView] = useState('hourlyUsers');

    const handleViewChange = (view) => {
        setActiveView(view);
    };

    return (
        // 버튼 클릭에 따라 다른 차트 보여주기
        <div>
            <div>
                <button onClick={ () => handleViewChange('hourlyUsers') }>Hour Users</button>
                <button onClick={ () => handleViewChange('orderStatus') }>Order Status</button>
            </div>
            <WebSocketComponent>
                { activeView == 'hourlyUsers' && <HourlyActiveUsersChart/> }
                { activeView == 'orderStatus' && <OrderStatusChart/> }
            </WebSocketComponent>
        </div>
    );
};

export default Chart;