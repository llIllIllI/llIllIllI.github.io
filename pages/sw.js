// sw.js
self.addEventListener('install', (e) => self.skipWaiting());
self.addEventListener('activate', (e) => e.waitUntil(self.clients.claim()));

// 페이지(index.html)에서 보낸 알림 명령 수신
self.addEventListener('message', (event) => {
    if (event.data && event.data.type === 'SHOW_NOTIFICATION') {
        const { title, body } = event.data;
        self.registration.showNotification(title, {
            body: body,
            icon: 'https://cdn-icons-png.flaticon.com/512/311/311074.png',
            vibrate: [200, 100, 200],
            badge: 'https://cdn-icons-png.flaticon.com/512/311/311074.png',
            tag: 'smart-alarm-sync',
            renotify: true
        });
    }
});
