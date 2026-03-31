// sw.js - GitHub 호스팅용 서비스 워커

self.addEventListener('install', (event) => {
    // 설치 즉시 활성화
    self.skipWaiting();
});

self.addEventListener('activate', (event) => {
    // 제어권 즉시 획득
    event.waitUntil(self.clients.claim());
});

// 메인 페이지(티스토리)에서 보낸 메시지 수신
self.addEventListener('message', (event) => {
    if (event.data && event.data.type === 'SHOW_NOTIFICATION') {
        const { title, body } = event.data;
        
        // 브라우저가 백그라운드에 있어도 알림 표시
        self.registration.showNotification(title, {
            body: body,
            icon: 'https://cdn-icons-png.flaticon.com/512/311/311074.png',
            vibrate: [200, 100, 200],
            badge: 'https://cdn-icons-png.flaticon.com/512/311/311074.png',
            tag: 'smart-alarm-sync',
            renotify: true // 같은 태그여도 다시 알림
        });
    }
});

// 알림 클릭 시 동작 (옵션)
self.addEventListener('notificationclick', (event) => {
    event.notification.close();
    // 필요 시 특정 URL 오픈 로직 추가 가능
});
