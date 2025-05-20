import { useState } from 'react';
import WebSocketComponent from "../service/WebSocketService";
import CategoryViewPerHourChart from "./chart/CategoryViewPerHourChart";
import BrandViewPerHourChart from "./chart/BrandViewPerHourChart";
import HourlyActiveUsersChart from "./chart/HourlyActiveUsersChart";
import UserPurchaseFrequencyChart from "./chart/UserPurchaseFrequencyChart";
import CustomerCountPerDecileChart from "./chart/CustomerCountPerDecileChart";
import PurchaseRateByDiscountRangeChart from "./chart/PurchaseRateByDiscountRangeChart";

const ChartComponent = () => {
    const [activeView, setActiveView] = useState('category_views');

    const handleViewChange = (view) => {
        setActiveView(view);
    };

    return (
        <div>
            <div>
                <button onClick={ () => handleViewChange('category_views') }>실시간 인기 카테고리(view)</button>
                <button onClick={ () => handleViewChange('brand_views') }>실시간 인기 브랜드(view)</button>
                <button onClick={ () => handleViewChange('hourly_users') }>시간대별 사용자 활동량 분석 (피크 시간 확인)</button>
                <button onClick={ () => handleViewChange('purchase_frequency') }>사용자 구매 빈도 분포</button>
                <button onClick={ () => handleViewChange('decile') }>사용자 구매 금액 백분위</button>
                <button onClick={ () => handleViewChange('purchase_discount') }>할인율에 따른 구매율 증가</button>
            </div>
            {/* 위에서부터 horizontalBar, horizontalBar, VerticalBar, Pie, Area, Doughnut chart*/}
            <WebSocketComponent>
                { activeView == 'category_views' && <CategoryViewPerHourChart/> }
                { activeView == 'brand_views' && <BrandViewPerHourChart/> }
                { activeView == 'hourly_users' && <HourlyActiveUsersChart/> }
                { activeView == 'purchase_frequency' && <UserPurchaseFrequencyChart/> }
                { activeView == 'decile' && <CustomerCountPerDecileChart/> }
                { activeView == 'purchase_discount' && <PurchaseRateByDiscountRangeChart/> }
            </WebSocketComponent>
        </div>
    );
};

export default ChartComponent;