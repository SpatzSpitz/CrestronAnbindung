const WebSocket = require('ws');
const net = require('net');

const WS_PORT = 8080;
const CRESTRON_HOST = '192.168.1.100';
const CRESTRON_PORT = 41794;

const wss = new WebSocket.Server({ port: WS_PORT }, () => {
  console.log(`WebSocket-Server gestartet auf Port ${WS_PORT}`);
});

const clients = new Set();

const crestron = net.createConnection({ host: CRESTRON_HOST, port: CRESTRON_PORT }, () => {
  console.log(`TCP-Verbindung zu Crestron hergestellt: ${CRESTRON_HOST}:${CRESTRON_PORT}`);
});

crestron.on('data', data => {
  console.log('Von Crestron empfangen:', data.toString());
  for (const client of clients) {
    if (client.readyState === WebSocket.OPEN) {
      client.send(data);
    }
  }
});

crestron.on('error', err => {
  console.error('Crestron TCP-Fehler:', err.message);
});

crestron.on('close', () => {
  console.log('TCP-Verbindung zu Crestron geschlossen');
});

wss.on('connection', ws => {
  clients.add(ws);
  console.log('WebSocket-Client verbunden');

  ws.on('message', msg => {
    console.log('Vom Client empfangen:', msg.toString());
    crestron.write(msg);
  });

  ws.on('close', () => {
    clients.delete(ws);
    console.log('WebSocket-Client getrennt');
  });
});
