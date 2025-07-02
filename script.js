// Verbindung zum Crestron-System per WebSocket
let socket;

function connect() {
    const url = 'ws://localhost:8080'; // Beispieladresse
    socket = new WebSocket(url);

    socket.onopen = () => console.log('Verbunden mit Crestron');
    socket.onerror = err => console.error('WebSocket-Fehler', err);
    socket.onclose = () => console.log('Verbindung geschlossen');
}

function sendSignal(signal, value) {
    if (socket && socket.readyState === WebSocket.OPEN) {
        const payload = { signal, value };
        socket.send(JSON.stringify(payload));
    } else {
        console.warn('Socket nicht verbunden');
    }
}

// Event-Handler
const lightBtn = document.getElementById('light-toggle');
const volumeSlider = document.getElementById('volume-slider');
const volumeValue = document.getElementById('volume-value');
const sourceSelect = document.getElementById('source-select');

lightBtn.addEventListener('click', () => {
    lightBtn.classList.toggle('active');
    const state = lightBtn.classList.contains('active');
    sendSignal('Light_On', state ? 1 : 0);
});

volumeSlider.addEventListener('input', () => {
    const val = parseInt(volumeSlider.value, 10);
    volumeValue.textContent = val;
    sendSignal('Volume_Level', val);
});

sourceSelect.addEventListener('change', () => {
    sendSignal('Source_Select', sourceSelect.value);
});

// Verbindung automatisch aufbauen
connect();
