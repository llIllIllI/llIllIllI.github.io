// sw.js
self.addEventListener('install', (e) => self.skipWaiting());
self.addEventListener('activate', (e) => e.waitUntil(self.clients.claim()));

self.addEventListener('message', (event) => {
    if (event.data && event.data.type === 'SHOW_NOTIFICATION') {
        const { title, body, icon } = event.data;
        // 전달된 아이콘이 없으면 기본 아이콘 사용
        const defaultIcon = 'https://cdn-icons-png.flaticon.com/512/311/311074.png';
        
        self.registration.showNotification(title, {
            body: body,
            icon: (icon && icon !== 'null') ? icon : defaultIcon,
            vibrate: [200, 100, 200],
            badge: (icon && icon !== 'null') ? icon : defaultIcon,
            tag: 'alarm-sync-' + Date.now()
        });
    }
});
