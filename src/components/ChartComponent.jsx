import { useState } from 'react';
import WebSocketComponent from "../service/WebSocketService";
import CategoryViewPerHourChart from "./chart/CategoryViewPerHourChart";
import BrandViewPerHourChart from "./chart/BrandViewPerHourChart";
import HourlyActiveUsersChart from "./chart/HourlyActiveUsersChart";
import UserPurchaseFrequencyChart from "./chart/UserPurchaseFrequencyChart";

const ChartComponent = () => {
    const [activeView, setActiveView] = useState('category_views');

    const handleViewChange = (view) => {
        setActiveView(view);
    };

    return (
        <div>
            <h2>로그 데이터 통계</h2>
            <div>
                
                <button onClick={ () => handleViewChange('category_views') }>실시간 인기 카테고리(view)</button>
                <button onClick={ () => handleViewChange('brand_views') }>실시간 인기 브랜드(view)</button>
                <button onClick={ () => handleViewChange('hourly_users') }>시간대별 사용자 활동량 분석 (피크 시간 확인)</button>
                <button onClick={ () => handleViewChange('purchase_frequency') }>사용자 구매 빈도 분포</button>
            </div>
            <br/>
            <div>
                <WebSocketComponent>
                    { activeView == 'category_views' && <CategoryViewPerHourChart/> }
                    { activeView == 'brand_views' && <BrandViewPerHourChart/> }
                    { activeView == 'hourly_users' && <HourlyActiveUsersChart/> }
                    { activeView == 'purchase_frequency' && <UserPurchaseFrequencyChart/> }
                </WebSocketComponent>
            </div>
        </div>
    );
};

export default ChartComponent;