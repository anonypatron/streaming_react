import React, { useState, useEffect, useRef, Children } from 'react';
import { Client } from '@stomp/stompjs';
import SockJS from 'sockjs-client';

function WebSocketComponent({ children }) {
    const [categoryViewsData, setCategoryViewsData] = useState([]);
    const [brandViewsData, setBrandViewsData] = useState([]);
    const [hourlyUserData, setHourlyUserData] = useState([]);
    const [purchaseFrequency, setpurchaseFrequency] = useState([]);
    const stompClient = useRef(null); // 값이 변해도 렌더링하지 않음

    // WebSocket endpoint
    const socketUrl = 'http://localhost:8080/ws-result';

    useEffect(() => {
        // const socket = new SockJS(socketUrl);
        const socket = new WebSocket(socketUrl);
        console.log('socket연결');

        stompClient.current = new Client({
            webSocketFactory: () => socket,
            debug: (str) => {
                console.log('STOMP Debug:', str); // STOMP 디버그 로그
            },
            reconnectDelay: 5000, // 재연결 시도 간격 (ms)
            heartbeatIncoming: 4000, // 서버로부터의 하트비트 간격 (ms)
            heartbeatOutgoing: 4000, // 서버로 보내는 하트비트 간격 (ms)
        });

        stompClient.current.onConnect = () => {
            console.log('WebSocket connected');
            // 구독할 토픽 주소 (Spring WebSocketConfig에 설정한 enableSimpleBroker)
            // 1
            stompClient.current.subscribe('/topic/category_views', (message) => {
                const body = JSON.parse(message.body);
                console.log(body);
                setCategoryViewsData(body);
            });

            // 2
            stompClient.current.subscribe('/topic/brand_views', (message) => {
                const body = JSON.parse(message.body);
                console.log(body);
                setBrandViewsData(body);
            });

            // 3
            stompClient.current.subscribe('/topic/hourly_users', (message) => {
                const body = JSON.parse(message.body);
                console.log(body);
                setHourlyUserData(body);
            });

            // 4
            stompClient.current.subscribe('/topic/purchase_frequency', (message) => {
                const body = JSON.parse(message.body);
                console.log(body);
                setpurchaseFrequency(body);
            });

            // // 5
            // stompClient.current.subscribe('/topic/decile', (message) => {
            //     const body = JSON.parse(message.body);
            //     setDecileData(body);
            // });

            // 6
            // stompClient.current.subscribe('/topic/purchase_discount', (message) => {
            //     const body = JSON.parse(message.body);
            //     setpurchaseDiscount(body);
            // });
        };

        stompClient.current.onDisconnect = () => {
            console.log('WebSocket disconnected!');
        };

        stompClient.current.onStompError = (frame) => {
            console.error('STOMP error:', frame);
        };

        stompClient.current.activate();

        // 컴포넌트 언마운트 시 연결 해제
        return () => {
            if (stompClient.current && stompClient.current.active) {
                stompClient.current.deactivate();
            }
        };
    }, []); // 마운트 될 때만 실행

    return (
        <>
            { React.Children.map(children, (child) =>
                React.isValidElement(child)
                    ? React.cloneElement(child, {
                        hourlyUserData,
                        categoryViewsData,
                        brandViewsData,
                        purchaseFrequency,
                    })
                    : child
            )}
        </>
    );
    
}

export default WebSocketComponent;