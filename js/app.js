if('serviceWorker' in navigator){
    navigator.serviceWorker.register('service-worker.js')
    .then(reg => console.log('Service Worker registrado!', reg))
    .catch(err => console.error('Erro ao registrar o Serice Worker!', err));
}