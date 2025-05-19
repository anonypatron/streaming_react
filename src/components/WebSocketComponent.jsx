import React, { useState, useEffect, useRef } from 'react';
import { Client } from '@stomp/stompjs';
import SockJS from 'sockjs-client';

function WebSocketComponent() {
    const [receivedData, setReceivedData] = useState(null);
    const stompClient = useRef(null); // 렌더링에 필요하지 않은 값

    useEffect(() => {
        // WebSocket 엔드포인트 주소 (Spring WebSocketConfig에 설정한 addEndpoint)
        const socketUrl = 'http://localhost:8080/ws-result';
        const socket = new SockJS(socketUrl);

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
            stompClient.current.subscribe('/topic/user-activity', (message) => {
                const body = JSON.parse(message.body);
                setReceivedData(body);
                console.log('Received data:', body);
            });

            // Todo : 다른 토픽들도 구독할 것
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
        <div>
            <h1>WebSocket Example</h1>
            {receivedData && (
                <pre>{JSON.stringify(receivedData, null, 2)}</pre>
            )}
            {!receivedData && <p>Waiting for data...</p>}
        </div>
    );
}

export default WebSocketComponent;